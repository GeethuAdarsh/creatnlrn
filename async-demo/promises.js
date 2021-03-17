const p = new Promise((resolve,reject) => {   //pending state
    setTimeout(()=>{
       // resolve(1);    //pending => fulfilled
       reject(new Error('error occured'));
    },2000)
    
})

p
    .then(result => console.log("Result",result))
    .catch(err => console.log("error" , err.message))