let promiseOne = new Promise((resolve, reject) => {
  ///async function
  setTimeout(() => {
    let Iserror = true;
    if (!Iserror) {
      const data = { name: "amit", age: 30 };
      resolve(data);
    } else {
      reject({ error: "there is some error " });
    }
  }, 1000);
});
promiseOne
  .then((data) => {
    console.log("promise is reslove");
    return data.name;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((errorData) => {
    console.log(errorData);
  })
  .finally(() => {
    console.log("promise work done either reject or either resolve ");
  });


  ////promise 2
  let promiseTwo = new Promise(( resolve,reject)=>{
setTimeout(()=>{
    let data = {customername:"amit", pass:234}
    let error= {error:"there is some thing error "}
    let errorFound= false
    if(!errorFound){
        resolve(data)
    } else {
        reject(error)
    }
},2000)
  })

  promiseTwo.then((data)=>{
    console.log("data is ", data)

  }).catch((data)=>{
    console.log(data)

  })
//   fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{
// console.log("api data is ", data)
//   })



  fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response )=> {
       return response.json()
      })
      .then(data => console.log(data))
      .catch(()=>{
console.log("threre is sssssssssssome thing error")
      })
