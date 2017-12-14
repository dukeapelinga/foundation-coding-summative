(function(){ //IIFE START

// ----------- Get Element Variables --------------
	
    var dayQuantity = document.getElementById('dayQuantity');
    var addDay = document.getElementById('addDay');
    var minusDay = document.getElementById('minusDay');

    var vehicleOption = document.getElementById('motorbike');
    var vehicleOptionTwo = document.getElementById('smallCar');
    var vehicleOptionThree = document.getElementById('mediumCar');
    var vehicleOptionFour = document.getElementById('largeCar');

    var submitButton = document.getElementById('proceedButton');

    var vehicleImageOption = document.getElementById('vehicleImage');
    var activityNameValues = document.getElementById('activityNameValue');
    var destinationNameValues = document.getElementById('destinationNameValue');
    var distanceNameValues = document.getElementById('distanceNameValue');
    var vehicleNameValues = document.getElementById('vehicleNameValue');
    var rentalLengthValues = document.getElementById('rentalLengthValue');
    var rentalPriceValues = document.getElementById('rentalPriceValue');
    var estimateFuelCosts = document.getElementById('estimateFuelCost');
    var estimateTotalCosts = document.getElementById('estimateTotalCost');

// --------------- Event Listeners -----------------
    
    minusDay.addEventListener('click', minus, false);
    addDay.addEventListener('click', plus, false);

    submitButton.addEventListener('click', invokeFunctions, false);
    

    vehicleOption.addEventListener('click', function(){
        overviewModal("2009 HARVEY-DAVIDSON", "img/vehicleImages/motorbike.jpg", 109, 3.7);
    }, false);
    vehicleOptionTwo.addEventListener('click', function(){
        overviewModal("2015 HONDA CIVIL", "img/vehicleImages/smallCar.jpg", 129, 8.5);
    }, false);
    vehicleOptionThree.addEventListener('click', function(){
        overviewModal("2013 HONDA CRV", "img/vehicleImages/mediumCar.jpg", 144, 9.7);
    }, false);
    vehicleOptionFour.addEventListener('click', function(){
        overviewModal("2017 THOR FREEDOM ELITE", "img/vehicleImages/largeCar.jpg", 200, 17);
    }, false);

// ------------- Function to Invoke Other Functions --------------

    function invokeFunctions(){
        formValidator();

        getDistanceValue();
        getDestinationValue();

        submitButton.onclick = availableVehicle (vehicleOption, 1, 1, 1, 5);
        submitButton.onclick = availableVehicle (vehicleOptionTwo, 1, 2, 1, 10);
        submitButton.onclick = availableVehicle (vehicleOptionThree, 1, 5, 3, 10);
        submitButton.onclick = availableVehicle (vehicleOptionFour, 2, 6, 2, 15);
    }

// ----------------- Variables with Empty Value/Array -----------------

    var locationValue = [];

    var rdValue;
    var activityValue = [];

    var destinationValue = [];

    var numberPassengerValue = [];

    var count = 0;
    var tripDurationValue = [];
    
    var distanceValue = [];

// -------------- Selecting City Function ---------------

    function locationSelector (){
        var selectLocation = document.getElementById('locationOptions').value;

        if (selectLocation == "Wellington" || selectLocation == "Auckland" || selectLocation == "Christchurch"){
            locationValue.push(selectLocation);
        } else {
            console.log('break');
        }
         
    }
   
// ------------------ Selecting Activity Function ---------------------

    function getActivityValue(){

        var radios = theForm.elements.activity;

        for (var i = 0; i < radios.length; i++){
          
            var someRadio = radios[i];
          
            if (someRadio.checked){
                rdValue = someRadio.value;
                break;
            }

            else rdValue = 'noRadioChecked';
        }

        if (rdValue == 'Skydiving'){
            activityValue.splice(0,1, rdValue);
        } else if (rdValue == 'Water-Rafting'){
            activityValue.splice(0,1, rdValue);
        } else if (rdValue == 'Bungy-Jumping'){
            activityValue.splice(0,1, rdValue);
        } else {
            console.log('break');
        }
    }
    
// ------------- Converting Activity to Destination Function --------------

    function getDestinationValue(){
        if (activityValue[0] === 'Skydiving'){
            destinationValue.splice(0,1, 'Queenstown');
        } else if (activityValue[0] === 'Water-Rafting'){
            destinationValue.splice(0,1, 'Waitomo Caves');
        } else if (activityValue[0] === 'Bungy-Jumping'){
            destinationValue.splice(0,1, 'Kawarau Bridge');
        } else {
            console.log('break');
        }    
    }

// ---------------- Selecting Number of Passenger Function ---------------------

    function getNumberPassengerValue(){

        var radios = theForm.elements['seat-options'];

        for (var i = 0; i < radios.length; i++) {
            
            var someRadio = radios[i];
          
            if (someRadio.checked) {
                rdValue = someRadio.value;
                break;
            }

            else rdValue = 'noRadioChecked';
        }

        if (rdValue == '1'){
            numberPassengerValue.splice(0,1, parseInt(rdValue));
        } else if (rdValue == '2'){
            numberPassengerValue.splice(0,1, parseInt(rdValue));
        } else if (rdValue == '3'){
            numberPassengerValue.splice(0,1, parseInt(rdValue));
        } else if (rdValue == '4'){
            numberPassengerValue.splice(0,1, parseInt(rdValue));
        } else if (rdValue == '5'){
            numberPassengerValue.splice(0,1, parseInt(rdValue));
        } else if (rdValue == '6'){
            numberPassengerValue.splice(0,1, parseInt(rdValue));
        } else{
            console.log('break');
        }
    }

// ----------------- Adding and Subtracting Number of Days Function --------------

    function plus(){
       if (count < 15) {
        count++;
        dayQuantity.value = count;
      }
    }
    
    function minus(){
      if (count > 0) {
        count--;
        dayQuantity.value = count;
      }  
    }

    function inputDayValue(){
        if (dayQuantity.value > 0){
            tripDurationValue.splice(0,1, parseInt(dayQuantity.value));
        } else {
          console.log('break');
        }
    }
    
// --------------- Validate Form Function ---------------
    
    function formValidator(){
        
        locationSelector();
        getActivityValue();
        getNumberPassengerValue();
        inputDayValue();

        if (locationValue.length && activityValue.length && numberPassengerValue.length && tripDurationValue.length){
            $("#vehicles").show();
        } else {
            $("#errorModal").show();
            console.log('break');
        }
    }

// --------------- Getting Distances Value Function ----------------

    function getDistanceValue(){
        if (locationValue[0] === "Auckland" && activityValue[0] === "Skydiving"){
            distanceValue.splice(0,1, distanceData[0].queenstown);
        } else if (locationValue[0] === "Auckland" && activityValue[0] === "Water-Rafting"){
            distanceValue.splice(0,1, distanceData[0].waitomo);
        } else if (locationValue[0] === "Auckland" && activityValue[0] === "Bungy-Jumping"){
            distanceValue.splice(0,1, distanceData[0].kawarau);
        } else if (locationValue[0] === "Wellington" && activityValue[0] === "Skydiving"){
            distanceValue.splice(0,1, distanceData[1].queenstown);
        } else if (locationValue[0] === "Wellington" && activityValue[0] === "Water-Rafting"){
            distanceValue.splice(0,1, distanceData[1].waitomo);
        } else if (locationValue[0] === "Wellington" && activityValue[0] === "Bungy-Jumping"){
            distanceValue.splice(0,1, distanceData[1].kawarau);
        } else if (locationValue[0] === "Christchurch" && activityValue[0] === "Skydiving"){
            distanceValue.splice(0,1, distanceData[2].queenstown);
        } else if (locationValue[0] === "Christchurch" && activityValue[0] === "Water-Rafting"){
            distanceValue.splice(0,1, distanceData[2].waitomo);
        } else if (locationValue[0] === "Christchurch" && activityValue[0] === "Bungy-Jumping"){
            distanceValue.splice(0,1, distanceData[2].kawarau);
        } else {
            console.log('break');
        }
    }

// --------------- Selecting Vehicle Function -----------------

    function availableVehicle(vehicle, minA, maxA, minB, maxB){
        if((numberPassengerValue[0] >= minA && numberPassengerValue[0] <= maxA) &&  (tripDurationValue[0] >= minB && tripDurationValue[0] <= maxB)){
            vehicle.style.display = 'block'; 
        } else if (tripDurationValue[0] < 2 && numberPassengerValue[0] > 2){
            vehicle.style.display = 'none';
            $("#errorMessage").show();
        } else {
            vehicle.style.display = 'none';
        }
    }

// --------------- Calculation of Value Function --------------

    function overviewModal(vehicleName, vehicleImageChange, rentalCost, fuelCapacity){
        var rentalPriceArray = [];
        var fuelCostArray = [];

        vehicleImageOption.src = vehicleImageChange;
        activityNameValues.textContent = activityValue;
        destinationNameValues.textContent = destinationValue;
        distanceNameValues.textContent = distanceValue + ' km';
        vehicleNameValues.textContent = vehicleName;
        rentalLengthValues.textContent = dayQuantity.value + ' Day(s)';

        var totalRentalCost = (dayQuantity.value * rentalCost).toFixed(2);
        rentalPriceValues.textContent = '($' + rentalCost + '/day)' + ' ' + '$' + totalRentalCost;
        rentalPriceArray.push(totalRentalCost);

        var estimatedFuelCost = (((distanceValue / 100) * fuelCapacity) * 2.15).toFixed(2);
        estimateFuelCosts.textContent = '$' + estimatedFuelCost;
        fuelCostArray.push(estimatedFuelCost);

        var rentalCostValue = Number(rentalPriceArray);
        var fuelCostValue = Number(fuelCostArray);
        var estimatedTotalCost = (rentalCostValue + fuelCostValue).toFixed(2);
        estimateTotalCosts.textContent = '$' + estimatedTotalCost;
    }

})(); //IIFE END 




