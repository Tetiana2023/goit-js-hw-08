import throttle from "lodash.throttle";
 
const feedbackFormEl = document.querySelector(".feedback-form")
const inputEl = document.querySelector("input");
const textareaEl = document.querySelector("textarea");

const object = {};

feedbackFormEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event){
    event.preventDefault();
    event.target.reset();
    

}