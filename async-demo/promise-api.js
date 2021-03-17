// const p = Promise.resolve({id:1});
// p.then(result => console.log(result));

// const q = Promise.reject(new Error("reason for rejection ...")); // give the call stack also else a simple message
// q.then(err => console.log("Error : "))

const p1 = new Promise((resolve) =>{
    setTimeout(()=>{
        console.log("Async operation 1 ... ");
        resolve(1);
    },2000)
})


const p2 = new Promise((resolve) =>{
    setTimeout(()=>{
        console.log("Async operation 2 ... ");
        resolve(2);
    },2000)
})

const p3 = new Promise((reject) =>{
    setTimeout(()=>{
        console.log("Async operation 3 ... ");
        reject(new Error ('An error has occured'));
    },2000)
})

// Promise.all([p1,p2,p3])
// .then(result => console.log(result))
// .catch(err => console.log("error",err.message))


Promise.race([p1,p2,p3])
.then(result => console.log(result))
.catch(err => console.log("error",err.message))