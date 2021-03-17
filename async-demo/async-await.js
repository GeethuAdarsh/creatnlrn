console.log("Before");
console.log("After");


async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log("Commits",commits);
    }
    catch{
        throw new Error ('Something happened')
    }
    
}
displayCommits();

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