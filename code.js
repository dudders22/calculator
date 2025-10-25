let buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => btn.addEventListener('click',buttonClick));

function buttonClick(event){
    let btn = event.target;
    console.log(btn.id);
}
