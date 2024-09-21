// generate a random color -- first step 
const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i = 0;i<6;i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
};

let IntervalId;

const startChangingColor = function(){
  if(!IntervalId){ // good practice to check before 
    IntervalId = setInterval(changeBgColor,1000)
  }
  
  
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }  
};

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',function(){
  clearInterval(IntervalId);
  IntervalId = null;       // for genious people
});
