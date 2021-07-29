export default function getUserData() {
  new Promise(function (resolve) {
    resolve(fetch("http://www.json-generator.com/api/json/get/cfQCylRjuG"));
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.getUsersData) {
        return fetch("http://www.json-generator.com/api/json/get/cfVGucaXPC");
      }
    })
    .then((value) => console.log(value));
}

// getUserData();
