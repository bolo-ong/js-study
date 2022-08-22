{let first
 let count

function refillCoffee(first, count){
    let second = first * (2/3)
    let third = first * (2/3) * (2/3)
    if(count == 1){
        console.log(Math.ceil(first + second));
    }
    else if(count == 2){
        console.log(Math.ceil(first + second + third));
    }
}
}

refillCoffee(300, 2)