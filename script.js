'use strict';

// var plantType = parseInt(document.getElementById('plantType').value);
// var loction = parseInt(document.getElementById('loction').value);
// var interval = Number(document.querySelector('.interval'));
// var area = Number(document.querySelector('.area'));

// console.log(area)

// const result = plantType * loction * interval * area;

// console.log(result)

// chose dripper line --> 0.3 \ 0.5 \ 1.0

//  stage *1* calculate amount of water need to be given
function calculateResult() {
    var plantType = parseFloat(document.getElementById('plantType').value);
    var location = parseFloat(document.getElementById('loction').value);
    var interval = parseFloat(document.querySelector('.interval').value);
    var area = parseFloat(document.querySelector('.area').value);
  
    // Check if any of the values are NaN (Not-a-Number)
    if (isNaN(plantType) || isNaN(location) || isNaN(interval) || isNaN(area)) {
      document.getElementById('resultValue').textContent = "One or more inputs are not valid numbers.";
    } else {
      const result = plantType * location * interval * (area / 1000);
      document.getElementById('resultValue').textContent = result;
    }
  }
  //stage *2* calculat the amount of drippers 
  //  area / (sapce between drippers)^2 =  amount of drippers

  function calculatDrippers() {
    var area = parseFloat(document.querySelector('.area').value);
    var dripType =  parseFloat(document.getElementById('dripType').value);

    const resultDrippers = area / (dripType ** 2); 
    document.getElementById('resultDrippers').textContent = resultDrippers;
    
  }

  //stage *3* calculate amount of flow
  // number of drripers * flow of a single dripper (1.6 \ 2.3 \ 3.5) 
  //= flow in litter per hour \ 1000 =  flow in cubic meter
  function calculatFlow() {
    var amountOfDrippers = parseFloat(document.getElementById('resultDrippers').textContent);
    var flowOfSingleDripper = parseFloat(document.getElementById('dripFlow').value);
  
    const drippresFlow = (amountOfDrippers * flowOfSingleDripper) / 1000; // Converting from liters per hour to cubic meters
    document.getElementById('drippresFlow').textContent = drippresFlow;
  }
  

  // calculate the durtion 
  // 1 ) result \ flow in cubic meter = x.xx 
  // 2 )  .XX * 0.6 =  durtion in min

  function calculatTime() {
    var result =  parseFloat(document.getElementById('resultValue').textContent);
    var areaFlow =  parseFloat(document.getElementById('drippresFlow').textContent);

    const preCalculat = result / areaFlow
    const calculatTime = (preCalculat * 100) * 0.6

    document.getElementById('claculateTime').textContent = calculatTime
  }
