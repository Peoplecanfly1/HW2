export default function parseJSON(jsonStr, successCB, failureCB) {
  try {
    let result = JSON.parse(jsonStr);
    successCB(result);
  } catch (e) {
    failureCB(e);
  }
}

function failureCB(error) {
  console.log("unsuccsess", error);
}

function successCB(JSONresult) {
  console.log("sucsessParse", JSONresult);
}

// parseJSON('{"x":10}', successCB, failureCB);
