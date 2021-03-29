// console.log("Before");
// console.log("After");

// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log("Commits" , commits))
//     .catch(err => console.log("Error",err))

// function getUser(id){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("Reading from database...");
//             resolve({ id : id, gitHubUsername : "geethu"}) 
//         },2000)
//     })
    
// }

// function getRepositories(user){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("Repositories...")
//             resolve(['repo1','repo2','repo3'])
//         },2000)
//     })
   
// }

// function getCommits(commits){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("commits...")
//             resolve(["commit"])
//         },2000)
//     })
    
// }

getDetails(1,"rajisha")
    .then((details)=>{
        console.log("student details:",details)
    }).then(()=>{
        examDate().then((date)=>{
            console.log("exam date is:",date.date)
        }).then(()=>{
            subjectName().then((name)=>{
                examDate().then((date)=>
                console.log("subject name  is ", name,"and date is ",date.date)   )
            })
        })
        
    })


function getDetails(id, name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            id = id
            name = name
            resolve({ id, name })
        }, 2000)

    })
}

function examDate() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ date: ["18feb", "20feb", "23feb"] })
        }, 2000)
    })
}

function subjectName() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("javascript")

        }, 2000)
    })
}