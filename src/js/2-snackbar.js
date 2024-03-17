import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css"

const form = document.querySelector('.form')
const radio = document.querySelector('fieldset')

let text
let delay
form.addEventListener('submit', foo)
radio.addEventListener("change", foooo)

function foo(event) {
    event.preventDefault()
    delay = form.elements.delay.value
    const prom = creatPromis(delay, text)
    prom.then(success).catch(notSuccess)
    form.reset()
}

function foooo (event){
    const b = event.target
     text = b.value
    return text
}

function notSuccess(delay) {
    iziToast.error({
            icon:'',
            message: `❌ Rejected promise in ${delay}ms`,
            position: "topCenter",
        })
}

function success(delay) {
    iziToast.success({
          icon:'',
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: "topCenter",
})
}

function creatPromis(delay, text) {
 const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (text==='fulfilled') {
        resolve(delay)
    }else{
        reject(delay)
    }
  }, delay);
 });
    
    return promise
}