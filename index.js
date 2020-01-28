const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(record){
  let answer = record.find( function(r) { return r.result === "W"})
  debugger
  if (answer){
    return answer.year;
  } else {
    return undefined
  }
}