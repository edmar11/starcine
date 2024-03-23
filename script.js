const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }
const form = document.getElementById('form')
const message = document.getElementById('thanks')
const inputName = document.querySelector('input[name="name"]')
const inputEmail = document.querySelector('input[email="email"]')
const inputMensagem = document.getElementById('mensagem')
const inputTelefone = document.getElementById('tel')
const inputAssunto = document.getElementById('assunto')
console.log(inputAssunto)

let isValidForm = false

const resetInput = (elem) => {
    elem.classList.remove('invalid')
    elem.nextElementSibling.classList.add('error-hidden')

}

const invalidateElem = (elem) =>{
    elem.classList.add('invalid')
    elem.nextElementSibling.classList.remove('error-hidden')
    isValidForm = false

}

const validateInput = () => {
    isValidForm = true
    if (!inputName.value) {
       invalidateElem(inputName)
    }

    if (!isValidEmail(inputEmail.value)) {
       invalidateElem(inputEmail) 
} 
   if (!inputMensagem.value) {
    invalidateElem(inputMensagem)
   }
   
   if (!inputTelefone.value) {
    invalidateElem(inputTelefone)
   }

   if (!inputAssunto.value) {
    invalidateElem(inputAssunto)

   }
}


form.addEventListener('submit', (e) => {
    e.preventDefault ()
    validateInput()


    if(isValidForm){
        form.remove
        message.classList.remove('error-hidden')
    }

})

inputName.addEventListener("input", () => {
    resetInput(inputName)
})
inputEmail.addEventListener("input", () => {
    resetInput(inputEmail)
})

inputMensagem.addEventListener("input", () => {
    resetInput(inputMensagem)
})

inputTelefone.addEventListener("input", () => {
    resetInput(inputTelefone)
})

inputAssunto.addEventListener("input", () => {
    resetInput(inputAssunto)
})