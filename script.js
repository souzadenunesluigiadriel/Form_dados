const input = document.querySelector('inpunt')

input.addEventListener('keypress', () =>{
    let inpuntlength = input.ariaValueMax.length

    if(inpuntlength === 3 || inpuntlength === 7) {
        input.value += '-'
    }else if (inpuntlength === 11){
        input.value += '-'
    }
    
})