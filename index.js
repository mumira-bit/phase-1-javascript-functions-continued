// 1. Function declaration with default value
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// 2. Function expression with default value
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

// 3. Function that returns a function, using template literal and wrapper
function wrapAdjective(wrapper = "*") {
  return function(adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}

