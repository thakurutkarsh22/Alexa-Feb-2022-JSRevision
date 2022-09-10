//  fetch api for post 

function postData() {
  const formData = {
    name: "utkarsh",
    email: "thakurutkarsh22@gmail.com",
  }

  const url = 'https://ptsv2.com/t/hpmpe-1662826486/post';

  fetch(url, {
    method: "POST",
    body: JSON.stringify(formData),
  }).then(response => response.json()).then(data => console.log(data));
}


function sendReqe(e) {
  // const value = e.target.value;
  // think console as an api call;
  console.log("hey");
}

function debouncing(func, delay) {
  let timer;
  
  return function() { // beeterSendReq
    // console.log(this);
    let context = this;
    let args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  }
}


function debounce(func ,delay, immediate) {
  let timer;
  
  return function() { // beeterSendReq
    // console.log(this);
    let context = this;
    let args = arguments;

    clearTimeout(timer);
    
    if(immediate && !timer) {
      func.apply(context, args);
    }
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  }
}


// const betterSendReqe = debouncing( sendReqe, 4000);
const betterSendReqe = debounce( sendReqe, 400, true);



// html 

sendReqe();
obj.sendRej(event);

obj.betterSendReqe(event)

// betterSendReqe(event);

// obj.betterSendReqe

function debouncw(fun, threshold) {

}



postData()