function calculateMoney(ticket) {
    if (ticket < 0) {
        return ("Invalid Number");
    }
    else {
        let gard = 500;
        let staf = 50 * 8;
        let price = ticket * 120;
        let result = price - (gard + staf);
        return result;
    }
}



function checkName(name){
    if (typeof name !== "string"){
        return "invalid"
    }
    else{
        let small = name.toLowerCase();
    let lastLetter = small[small.length-1]
    if(lastLetter === "a" || lastLetter === "y"||lastLetter === "i" || lastLetter === "o"|| lastLetter === "e"||lastLetter === "u" || lastLetter === "w"){
        return "Good Name";
    }

    else{
        return "Bad Name"
    }
    }
}



function deleteInvalids(array){
    if (!Array.isArray(array)){
        return 'Invalid Array';
    }
    else{
        let newArray = [];
        for (const value of array){
            if (typeof value === 'number' && !isNaN(value)){
                newArray.push(value)
            }
        }
        return newArray;
    }
   
}




function password(obj){
    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName;
    if(birthYear.toString().length < 4 || name === undefined || birthYear === undefined || siteName === undefined){
          return 'invalid';
    }
    else{
          const capitalSiteName = siteName[0].toUpperCase() + siteName.slice(1);
          const fullinfo = `${capitalSiteName}#${name}@${birthYear}`;
          return fullinfo;
          
    }
}




