const form = document.querySelector('form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
 const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');
  if(weight === '' || weight < 0 || isNaN(height)){
    result.innerHTML = `Please enter a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please enter a valid weight`;
  }
  else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);  
    
      if ( bmi <= 18.6){
        result.innerHTML = `<span>You are Under weight ${bmi}</span>`
      }
      if ( bmi <= 24.9){
        result.innerHTML = `<span>Your Weight is Normal ${bmi}</span>`
      }
      else {
        result.innerHTML = `<span>You have to work hard, you are overweight ${bmi}</span>`
      }
}
}

)