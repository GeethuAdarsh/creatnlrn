console.log("Before");
getUser(1 ,getRepositories);
console.log("After");

function getRepositories(user){
    console.log("User",user);
    getRepositories(user.gitHubUsername,getCommits);
}

function getCommits(repos){
        console.log(repos)
        getCommits(repo,displayCommits); //referernce to the function
}

function displayCommits(commits){
    console.log(commits)
}

function displayRepositories(repos){
    console.log(repos);
}

function getUser(id, callback){
    setTimeout(()=>{
        console.log("Reading from database...");
        callback({ id : id, gitHubUsername : "geethu"}) 
    },2000)
}

function getRepositories(user,callback){
    setTimeout(()=>{
        console.log("Repositories...")
        callback(['repo1','repo2','repo3'])
    },2000)
}