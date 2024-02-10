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


