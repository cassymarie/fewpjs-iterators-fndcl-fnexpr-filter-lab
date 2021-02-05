// Code your solution here
function findMatching(driverArray, searchText){
    if (driverArray.length === 0){return}
   return driverArray.filter(obj => {
       debugger
        obj.name.toLowerCase() === searchText.toLowerCase();
    })
    } 

function fuzzyMatch(driverArray, searchText){
    return driverArray.filter(obj => {
        obj.name.charAt(searchText.length) === searchText
    })
    }

function matchName(driverArray, searchText){
    return driverArray.filter(obj => {obj['name'] === searchText})
    }