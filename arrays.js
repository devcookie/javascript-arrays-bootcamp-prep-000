var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArr = [element, ...array];
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element)
  return array
}