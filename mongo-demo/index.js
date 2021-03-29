const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/playground')
 .then(()=> console.log("Mongodb conneted"))
 .catch(err=> console.error('not connected',err));

 const courseSchema = new mongoose.Schema({
     name : { 
         type : String, 
         required : true,
         minlength :5,
         maxlength : 20,
         //match : /pattern/
        },
    category : {
        type : String,
        required : true,
        enum : ['web' , 'mobile', 'Network'],
        lowercase : true,
        //uppercase : true,
        trim : true
    },
     author : String,
     tags : {
         type : Array,
         validate : {
             isAsync : true,
             validator : function (v,callback){
                 setTimeout(()=>{
                    const result =  v && v.length > 0;
                    callback(result)
                 },4000)
                
            },
            message : 'A course should have atleast one tag'
         }
         
     },
     date : {type : Date , default : Date.now},
     isPublished : Boolean,
     price : {
        type : Number,
        required : function() {return this.isPublished;},
        min : 5,
        max : 100,
        get : (v) => Math.round(v),
        set : (v) => Math.round(v)
    }
 })

 const Course = mongoose.model('Course',courseSchema);
 async function createCourse(){
    const course = new Course ({
        name : 'python course',
        category : 'mobile',
        author : 'geethu', 
        tags : ['python' , 'backend'],
        isPublished : true,
        price : 20
     });
     try{
        const result = await course.save();  //also use course.validate()
        console.log(result)
     }
     catch(ex){
         for (field in ex.errors){
            console.log(ex.errors[field].message)
         }
        
     }
    
 }
 
 async function getCourse(){
     const pageNumber = 2;
     const pageSize = 10;
     const courses = await Course
        .find({author:'geethu'})
        .skip((pageNumber - 1)*pageSize)
        .limit(pageSize)
        .sort({name : 1})
        .select({name:1,tags:1})
        .count()
        console.log(courses)
 }

 async function updateCourse(id){             //Query First
    const course = await Course.findById(id)
    if(!course) return;
    course.isPublished = true;
    course.author = 'Another Author';

    const result = await course.save();
    console.log(result);
 }

 async function updateCourse2(id){
     const course = await Course.update({_id : id},{   //update first  
         $set : {
             author : 'Another Author'
         }
     });
    //  const course = await Course.findByIdAndUpdate(id,{   //update first  - use findByIdAndUpdate
    //     $set : {
    //         author : 'Another Author'
    //     }
    // },{new : true});
     console.log(course);
 }

 async function removeCourse (id) {
     const result = await Course.deleteOne({_id : id}); //use deleteMany and findByIdAndRemove
     console.log(result)
 }



//removeCourse('60616f5b2de59249ae17deaa')
 //updateCourse2('60616f5b2de59249ae17deaa');
 //updateCourse('60616f5b2de59249ae17deaa)
 //getCourse();
 createCourse();

