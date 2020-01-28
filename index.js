
function superbowlWin(records) {
  let result = records.find(record => record.result == "W");
  if (result){
    return result.year;
  }else{
    return undefined;
  }

}

