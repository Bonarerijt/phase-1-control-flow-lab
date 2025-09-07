function scuberGreetingForFeet(ride) {
  let message;
  if (ride <= 400) {
    message = 'This one is on me!';
  }
    else if(ride > 400 && ride <= 2000) {
      message = 'That will be twenty bucks.';
    }
    else if (ride >2000 && ride <= 2500){
      message = 'I will gladly take your thirty bucks.';
    }
    else {
      message = 'No can do.';
    }
  return message;
}
console.log(scuberGreetingForFeet(2501));


function ternaryCheckCity(cityName) { 
  return cityName ==='NYC'?"Ok, sounds good.":'No go.';
}
console.log(ternaryCheckCity('NYC'));

function switchOnCharmFromTip(amountOfTip) {
  switch (amountOfTip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'
  }
}
console.log(switchOnCharmFromTip('generous'));