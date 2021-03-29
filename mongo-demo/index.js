// const mongoose = require('mongoose');
//  mongoose.connect('mongodb://localhost/playground')
//  .then(()=> console.log("Mongodb conneted"))
//  .catch(err=> console.error('not connected',err));

//  const courseSchema = new mongoose.Schema({
//      name : String,
//      author : String,
//      tags : [String],
//      date : {type : Date , default : Date.now},
//      isPublished : Boolean
//  })

//  const Course = mongoose.model('Course',courseSchema);
//  async function createCourse(){
//     const course = new Course ({
//         name : 'Angular course',
//         author : 'geethu', 
//         tags : ['angular','frontend'],
//         isPublished : true
//      });
//      const result = await course.save();
//      console.log(result)
//  }
 
//  async function getCourse(){
//      const pageNumber = 2;
//      const pageSize = 10;
//      const courses = await Course
//         .find({author:'geethu'})
//         .skip((pageNumber - 1)*pageSize)
//         .limit(pageSize)
//         .sort({name : 1})
//         .select({name:1,tags:1})
//         .count()
//         console.log(courses)
//  }

//  async function updateCourse(id){
//     const course = await Course.findById(id)
//     if(!course) return;
//     course.isPublished = true;
//     course.author = 'Another Author';

//     const result = await course.save();
//     console.log(result);
//  }

//  updateCourse('60533392267af587bbc1597e')
//  //getCourse();
//  //createCourse();

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/employee-details')
    .then(() => { console.log("connected to mongodb") })
    .catch(err => console.log("coudnt connect"))

const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    salary: Number,
    designation: String

})

const Employee = mongoose.model('employee', employeeSchema)

async function createEmployee() {
    const employee = new Employee({
        name: 'John',age:25,salary:18000,designation:'Accountant'
    })


    const result = await employee.save()
    console.log(result)

}

//createEmployee()

//descending order
async function descending() {
    const result =  await Employee.find()
                        .sort({name:-1})
    console.log("descending",result)
}

// async function run1() {
//     const result = await descending()
   
// }

descending()

// count

async function count() {
    const result =  await Employee.find()
                        .count({salary:{$gt:10000,$lt:50000}})
    console.log("count",result)
}

// async function run2() {
//     const result = await count()
    
// }

count()

//name and designation
async function or() {
    const result = await Employee.find()
                        .or([{age:20},{salary:50000}])
                        .select({name:1,designation:1})
    console.log("name and desg",result)
}

// async function run3() {
//     const result = await or()
//     console.log(result)
// }

or()

//Name starts with 'Ar'
async function nameStarts() {
    const result =  await Employee.find({name:/^Ar/});
    console.log("starts with ar",result)
                        
}

// async function run4() {
//     const result = await nameStarts()
//     console.log(result)
// }

nameStarts()


