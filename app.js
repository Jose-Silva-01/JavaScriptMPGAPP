let errors = [];

const isValidNumeric = function(value){
    if(isNaN(value)){
        return false;
    }else{
        return true;
    }
}

function calculateMPG(milesTravelled, gallonsConsumed){
    if(isNaN(milesTravelled) || milesTravelled <= 0 || milesTravelled == ``){
        errors.push('Miles travelled is not valid.');
    }
    if(isNaN(gallonsConsumed) || gallonsConsumed <= 0 || gallonsConsumed == ``){
        errors.push(`Gallons consumed is not valid.`);
    }
    
    if(errors.length == 0){
        let MPG = Math.round(milesTravelled/gallonsConsumed);
        return MPG;
    }
}

const txtMiles = document.getElementById(`txtMiles`);
const txtGallons = document.getElementById(`txtGallons`);
const btnCalculate = document.getElementById(`btnCalculate`);
const divAnswer = document.getElementById(`answer`);

btnCalculate.addEventListener(`click`, calculateButtonHandler)

function calculateButtonHandler(){
    let miles = txtMiles.value;
    let gallons = txtGallons.value;
    let answer = calculateMPG(miles, gallons);

    if(errors.length == 0){
        divAnswer.innerHTML = `<p>Miles travelled: ${miles} Gallons Consumed: ${gallons}` +
                ` MPG: ${answer}</p>`;
    }else{
        let errorMessage = ``;
        for(let i = 0; i < errors.length; i++){
            errorMessage += `<ul><li style="color:red">${errors[i]}</li></ul>`;
        }
        divAnswer.innerHTML = errorMessage;
        // errors.forEach(element => {
        //     divAnswer.innerHTML = `<ul><li>${element}</li></ul>`;
        // });
    }
    errors = [];
}