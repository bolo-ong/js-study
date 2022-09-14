
function passOrFail(개론, 민법){
    if(isNaN(개론) || isNaN(민법)){
        alert('숫자로 입력하세요');
    }    
    else if(개론 < 40 || 민법 < 40){
        console.log('불합격');
    }
    else if((개론 + 민법) > 120){
        console.log('합격');
    }
    else{
        console.log('불합격');
    }
}

개론 = 'q'
민법 = 50
passOrFail(개론, 민법);