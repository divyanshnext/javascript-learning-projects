const form = document.querySelector('form')
//form do type se submit hota hai ya toh POST type se ya GET type se


//this below usecase of taking value before eventListeners will give you empty
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "please give a valid height";
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "please give a valid height";
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});