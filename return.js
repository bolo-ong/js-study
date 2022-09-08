function msCalculator(a,b){
    let result = (a*60 + b)*1000
    return result
}

console.log(msCalculator(2,10))



function discountCalculator(a,b){
    let result = a - a*0.1
    if(b == true){
        return parseFloat(result-1.5).toFixed(2)
    }
    else{
    return parseFloat(result).toFixed(2)
    }
}

console.log(discountCalculator(70,false))