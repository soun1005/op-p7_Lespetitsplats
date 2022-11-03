const input = document.querySelector('input');



function liveSearch(){
    console.log(input.value);
}

input.addEventListener('keyup',liveSearch)