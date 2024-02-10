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


