const inputDisplay = document.querySelector("#display");
const calBtn = document.querySelectorAll(".btn");
const eql=document.querySelector("#equal");
const AC = document.querySelector("#AC");
const DEL = document.querySelector("#del");
let string = "";

//display clicked button's values on input
const calculate = (event) =>{
    const selectBtn = event.target.value;
    string+=selectBtn;
    inputDisplay.value+=selectBtn;

}
//evaluate values
const equal = () =>{
    const result=String(eval(inputDisplay.value));
    inputDisplay.value=result;
}

 //selectButton
 calBtn.forEach((button)=>{
     button.addEventListener("click" , calculate);
   
 })
 eql.addEventListener("click" ,  equal);
 


