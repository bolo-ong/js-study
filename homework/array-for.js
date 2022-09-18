function findName(input){
    let 출석부 = ['흥민', '영희', '철수', '재석']

    출석부.forEach(function(name){
        if(input == name){
            return console.log('있어요')
        }
    })
}

findName('흥민') //'있어요'



function multiplicationTable(){
    let firstNum = [2, 3, 4, 5, 6, 7, 8 ,9]
    let lastNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    firstNum.forEach(function(a){
        lastNum.forEach(function(b){
            console.log(a*b)
        })
    })
}

for(let i=2; i<10; i++){
    for(let k=1; k<10; k++){
        console.log(i*k)
    }
}



function comparedToBefore(arr,b){
    let totalGrade = 0
    
    for(let i=0; i<arr.length; i++){
        totalGrade = totalGrade + arr[i]
    }

    let existingAverage = totalGrade/arr.length
    
    if(existingAverage > b){
        console.log('평균보다 ' + (existingAverage-b) + '점이 ' + '올랐네요')
    }
    else if(existingAverage = b){
        console.log('같네요')
    }
    else{
        console.log('평균보다 ' + (b-existingAverage) + '점이 ' + '떨어졌네요')
    }
}

comparedToBefore([10,20], 10) //'평균보다 5점이 떨어졌네요'
comparedToBefore([10,20], 15) //'같네요'
comparedToBefore([10,20], 20) //'평균보다 5점이 올랐네요'