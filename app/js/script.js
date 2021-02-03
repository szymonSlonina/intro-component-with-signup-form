var isEmpty = (element) => {
    return element.value == "";
}


function validateInput(event) {
   const inputElements = document.getElementsByTagName('input');
   for(let i = 0; i < inputElements.length - 1; i++){
       if(isEmpty(inputElements[i])){
            inputElements[i].classList.add('inputError');
            inputElements[i].nextElementSibling.classList.remove('errorHide');
       }
   } 
}

function resetInput(event) {
    var clickedInput = event.target;
    var errorP = clickedInput.nextElementSibling;
    if(clickedInput.classList.contains('inputError')){
        clickedInput.classList.remove('inputError');
        errorP.classList.add('errorHide');
    }
}


const submit = document.getElementById('submit');
submit.addEventListener("click", (evt) => {
    validateInput(evt);
});

const textInputs = document.getElementsByTagName('input');
for (var input of textInputs) {
    if (input.id != 'submit') {
        input.addEventListener("click", (evt) => {
            resetInput(evt);
        });
    }
}