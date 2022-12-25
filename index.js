const character = document.getElementById('character'),
backWheel = document.querySelector('.back_wheel'),
frontWheel = document.querySelector('.front_wheel'),
up = document.querySelector('.up'),
btnjump = document.querySelector(".btn");


function add(){
  if(character.classList != 'animate'){
    character.classList.add('animate');
    backWheel.classList.add('backWheelAnimation');
    frontWheel.classList.add('frontWheelAnimation');
  }
  // we need to add a setTimeout to remove the class in order for us to jump again 
  setTimeout(function(){
    character.classList.remove('animate');
    backWheel.classList.remove('backWheelAnimation');
    frontWheel.classList.remove('frontWheelAnimation');
  },500);
}

var setTime = setInterval (trackMyScore, 100);
function trackMyScore(){
  let characterTop =  parseInt(window.getComputedStyle(character).getPropertyValue('top')); // the parsInt is to give us the number and take off the px
  let blockleft =  parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  console.log(characterTop);
  console.log(blockleft);

  // lets see where the moto div touch the rock
  if(blockleft<240 && blockleft>0 && characterTop>=690){ // the 50 and 0 coming from the motocycle div, cause it has a width of 50px11
    // alert("touvj");
    clearInterval(setTime)
  }
};


// go up function
function goUp(){
  if(character.classList != 'animateUp'){
    character.classList.add('animateUp');
    backWheel.classList.add('backWheelAnimationUp');
    frontWheel.classList.add('frontWheelAnimationUp');
  }
  // we need to add a setTimeout to remove the class in order for us to jump again 
  setTimeout(function(){
    character.classList.remove('animateUp');
    backWheel.classList.remove('backWheelAnimationUp');
    frontWheel.classList.remove('frontWheelAnimationUp');
  },500);
}

// var setTime = setInterval (trackMyScore, 100);
// function trackMyScore(){
//   let characterTop =  parseInt(window.getComputedStyle(character).getPropertyValue('top')); // the parsInt is to give us the number and take off the px
//   let blockleft =  parseInt(window.getComputedStyle(block).getPropertyValue('left'));

//   // lets see where the moto div touch the rock
//   if(blockleft<15000 && blockleft>0 && characterTop>=130){ // the 50 and 0 coming from the motocycle div, cause it has a width of 50px11
//     // alert("touvj");
//     clearInterval(setTime)
//   }
// };

btnjump.addEventListener("click", add);
up.addEventListener("click", goUp)