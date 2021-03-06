const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
.then(() => console.log("Mongodb connected"))
.catch((err) => console.error("Could not connect to Mongodb..",err))

const Author = mongoose.model('Author' , new mongoose.Schema({
    name : String,
    bio : String,
    website : String
}))

const Course = mongoose.model('Course', new mongoose.Schema({
    name:String,
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Author'
    }
}))

async function createAuthor(name,bio,website){
    const author = new Author({
        name,
        bio,
        website
    })
    const result = await author.save();
    console.log(result)
}

async function createCourse(name,author){
    const course = new Course({
        name,
        author
    })
    const result = await course.save();
    console.log(result)
}

async function listCourses(){
    const courses = await Course
    .find()
    .populate('author' , 'name -_id') //can use multiple populate for multiple documents 
    .select('name author');
    console.log(courses);
}

//createAuthor('geethu','my bio','my website');

//createCourse('nodejs course' , '6061c2be67d7aa7202865327')

listCourses()