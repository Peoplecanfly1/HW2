let links = [
  "http://www.json-generator.com/api/json/get/cevhxOsZnS",
  "http://www.json-generator.com/api/json/get/cguaPsRxAi",
  "http://www.json-generator.com/api/json/get/cfDZdmxnDm",
  "http://www.json-generator.com/api/json/get/cfkrfOjrfS",
  "http://www.json-generator.com/api/json/get/ceQMMKpidK",
];

export function getAllDataParallel(arr) {
  let requests = arr.map((url) => fetch(url));
  Promise.all(requests)
    .then((responses) => Promise.all(responses.map((item) => item.json())))
    .then((items) => items.forEach((item) => console.log(item)));
}

// getAllDataParallel(links);

export default function getAllDataSequence(arr) {
  new Promise((resolve) => {
    resolve(
      arr.forEach((item) => {
          Promise.resolve(fetch(item)).then(data => data.json()).then(console.log)
      })
    );
  });
}

// getAllDataSequence(links);
