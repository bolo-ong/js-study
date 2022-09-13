const tabButtonAll = document.querySelectorAll('.tab-button')
const tabContentAll = document.querySelectorAll('.tab-content')

// for(let i=0; i<tabButtonAll.length; i++){
//     tabButtonAll[i].addEventListener('click', 
//     function(){
//         tabButtonRemoveClass()
//         tabButtonAddClass(i)
//     })
// }

function tabButtonRemoveClass(){
    for(let i=0; i<tabButtonAll.length; i++){
        tabButtonAll[i].classList.remove('orange')
        tabContentAll[i].classList.remove('show')
    }
}

function tabButtonAddClass(n){
        tabButtonAll[n].classList.add('orange')
        tabContentAll[n].classList.add('show')
    }

document.querySelector('.list').addEventListener('click', 
function(e){
    tabButtonRemoveClass()
    tabButtonAddClass(parseInt(e.target.dataset.id))
})