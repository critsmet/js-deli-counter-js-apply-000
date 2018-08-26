var katzDeli = [];
var n = 1

function takeANumber(katzDeliLine, n) {
    katzDeliLine.push(n); 
    n++
  return "You are number " + katzDeliLine[katzDeliLine.length - 1] + "."
  }
  
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0 ) {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
  else {   
  return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var currently = "The line is currently:"
  var list = " "
  if (katzDeliLine.length === 0) {
  return "The line is currently empty."
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
    list += (i+1) + ". " + katzDeliLine[i] + ", "
  }
  return currently + list.substring(0, list.length - 2)
}
}