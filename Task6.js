export default function getResolvedPromise(value){
 return Promise.resolve(value)
}


//  *****uncomment code below to invoke a function*******
 
// getResolvedPromise(400)
//   .then((value) => {
//     if (value > 300) {
//       throw new Error("Ошибка");
//     }
//   })
  
//   .catch((e) => console.log(e))
//   .finally(v => console.log('This is finally'))