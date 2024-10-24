// Function to return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Function to return the last two drivers from an array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing both returnFirstTwoDrivers and returnLastTwoDrivers functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function that returns a function to multiply fare
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Function that doubles the fare
  const fareDoubler = createFareMultiplier(2);
  
  // Function that triples the fare
  const fareTripler = createFareMultiplier(3);
  
  // Function to select either the first two or last two drivers
  function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
  }
  
  // Example test cases:
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Antonia', 'Nuru']
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Amari', 'Mo']
  
  console.log(fareDoubler(10)); // 20
  console.log(fareTripler(10)); // 30
  
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // ['Amari', 'Mo']
  