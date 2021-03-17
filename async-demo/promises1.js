console.log("Before");
console.log("After");

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log("Commits" , commits))
    .catch(err => console.log("Error",err))

function getUser(id){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Reading from database...");
            resolve({ id : id, gitHubUsername : "geethu"}) 
        },2000)
    })
    
}

function getRepositories(user){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Repositories...")
            resolve(['repo1','repo2','repo3'])
        },2000)
    })
   
}

function getCommits(commits){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("commits...")
            resolve(["commit"])
        },2000)
    })
    
}