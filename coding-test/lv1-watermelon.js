// 수박수박수박수박수박수?
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

function solution(n){
    var answer = '';
    
    if(Number.isInteger(n) && 1 <= n <= 10000){
        const repeatWatermelon = '수박'.repeat(n/2)
        if(n%2 == 1){
            answer = repeatWatermelon + '수'
        }
        else{
            answer = repeatWatermelon
        }
        return answer
    }
}

console.log(solution(5))