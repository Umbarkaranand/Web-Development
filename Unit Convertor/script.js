const celcius = document.querySelector("#celcsius");
const fahrenheit = document.querySelector("#fahrenheit");

//set focus to the celcius input field when page is loaded
window.addEventListener("load", () => celcius.focus());

celcius.addEventListener("input", () => {
//conert celcius to fahrenite wehn celcius value is change
fahrenheit.value=((celcius.value * 9)/ 5 +32).toFixed(2);

//clear fahreint input when celcius field is empty
if(!celcius.value) fahrenheit.value="";
});

//convert fahreint to celcius when fahreint value is changes 
fahrenheit.addEventListener("input",() => {
    celcius.value=(((fahrenheit.value - 32) * 5 )/9).toFixed(2);
    if(!celcius.value) fahrenheit.value="";
});