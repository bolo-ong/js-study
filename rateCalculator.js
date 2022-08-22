{let deposit
 let year 

function ratesCalculator(deposit, year) {
    if(deposit < 50000){
        let total = deposit * 1.15**year
        console.log(Math.ceil(total));
    }

    else if(deposit >= 50000){
        let total = deposit * 1.2**year
        console.log(Math.ceil(total));
    }
}
}

ratesCalculator(10000, 2)