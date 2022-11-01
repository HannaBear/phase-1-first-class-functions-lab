
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = function(){

    let newDrivers = drivers.slice(0,2)
    return newDrivers
};


const returnLastTwoDrivers = function(){
    
    let newDrivers = drivers.slice(-2);
    return newDrivers
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num1) => {     
    return function(num2) {         return num1 * num2;     }; }  
    const fareDoubler = (num1) => {     return num1 + num1; } 
    const fareTripler = (num1) => {     return num1 + num1 + num1; }  

    const selectDifferentDrivers = (driver, twoDrivers) => {     return twoDrivers(driver); }



