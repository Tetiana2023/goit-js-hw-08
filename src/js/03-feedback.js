import throttle from "lodash.throttle";
 
const feedbackFormEl = document.querySelector(".feedback-form")
const inputEl = document.querySelector("input");
const textareaEl = document.querySelector("textarea");

rezultmessageFormdata();

const formData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

feedbackFormEl.addEventListener('submit', onSubmitForm);
feedbackFormEl.addEventListener('input', throttle(onFormInput), 500);

function onSubmitForm(event){
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(formData);

}
function onFormInput(event){
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function rezultmessageFormdata(){
    const message = localStorage.getItem("feedback-form-state");
    const savedMessage = JSON.parse(message);

    if (savedMessage) {
       inputEl.value = savedMessage.email || '';
       textareaEl.value = savedMessage.message || '';
    }

}