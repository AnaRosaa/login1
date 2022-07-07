
const [input1, input2] = document.querySelectorAll('input')
const button = document.querySelectorAll('button')
console.log(input1, input2)

function handleChange(){
    const [input1, input2] = login
    if(input1.value && input2.value.length >= 8){
        button.classList.add('free access')
        console.log('free access')
    }else{
        button.classList.remove('acesso denied')
    }
}
login.forEach(function(input)){
    input.addEventListener('input', handleChange)    
};