function threeSixNine(n){
    if(n % 9 == 0){
        console.log('박수x2')
    }
    else if(n % 3 == 0){
        console.log('박수');
    }else{
        console.log('통과');
    }
}

threeSixNine(3);
threeSixNine(9);
threeSixNine(1);