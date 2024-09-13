const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock)

// setInterval -- method ek aisa method hai bolta hai ki mujhe time bta dijiye ki kitne inteval ke bad mujhe is code ko run krte rhna hai 

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000)   // 1000 for 1 second 2000 for 2 second