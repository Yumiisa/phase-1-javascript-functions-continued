// code your solution here
function saturdayFun(fun ="roller-skate"){
    return `This Saturday, I want to ${fun}!`
}
console.log(saturdayFun())
const fn = function () {
    return("Yet more razzling");
  };
  console.log(fn())
  const mondayWork=function(place="go to the office"){
      return `This Monday, I will ${place}.`
  };
  console.log(mondayWork())
  let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }
  console.log(wrapAdjective())
  function iInvokeThings (thing) {
    return thing();
  }
  
  console.log(iInvokeThings(function(){
    return 4+5;
   
  }))
  console.log(iInvokeThings(function(){
    return "hello" + ' ' + "World"
  }))