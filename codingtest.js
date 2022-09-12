// function solution(n){
//     var answer = 0;

//     for(x=0; x<n; x++){
//         if(n%x == 1){
//             answer = x;
//             return answer;
//         }
//     }
// }

// console.log(solution(12))

function solution(n){
    var answer = '';

    if(n%2 == 1){
        answer = '수박'.repeat(n/2) + '수'
    }
    else{
        answer = '수박'.repeat(n/2)
    }
    return answer
}

console.log(solution(5))