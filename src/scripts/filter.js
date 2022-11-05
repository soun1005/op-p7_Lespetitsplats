const input = document.querySelector('input');



function liveSearch(){
    console.log(input.value);
}

input.addEventListener('keyup',liveSearch)

let string = 'hello';
console.log(string.slice(0,3));