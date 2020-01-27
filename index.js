

 superbowlWin = (record) => { 
   let outcome = record.find( record => record.outcome === "W" )
   return !!outcome ? outcome.year : undefined 
 }

