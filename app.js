const buttons = document.querySelectorAll("button")
const screen = document.querySelector(".input")
// const operate = document.querySelectorAll(".bot")
const specialChars = ["%","*","/","+","="];
let outPut = "";
let answer ="";

const calculate = (evaluat)=>{
    if(evaluat==="=" && outPut !== "" ){
        // console.log(eval(outPut))
         outPut = eval(outPut)
         answer = outPut
    }else if (evaluat ==="reset"){
        outPut ="";
    }else if(evaluat==="Del"){
        outPut = outPut.toString().slice(0,-1)
        console.log(outPut)
    }else{
        if(outPut === "" && specialChars.includes(evaluat))return;
        if(outPut.includes()){
            console.log (outPut.split('').pop())
            outPut += evaluat;  
        }else{
            outPut += evaluat;  
        }
     
    }
    screen.value = outPut;
};

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(answer===""){
              calculate(e.target.dataset.value)
            }else if(answer !=="" && specialChars.includes(e.target.dataset.value)){
                outPut+=calculate(e.target.dataset.value)
            }
            else if (answer !=="" && specialChars.includes(e.target.dataset.value) === false){
                calculate(e.target.dataset.value)
                answer = ""
                
            }
        // console.log(e.target.dataset.value)
    
    })
})

































// for(let a of butDoc){
//     a.addEventListener("click",()=>{        
//         screen.value += parseInt(a.innerText)
// })
// }


// for(let b of operate){
//     b.addEventListener("click",()=>{ 
//         let forbear=""
//     let newCal = screen.value.split("").pop()  
//         console.log(newCal)     
//     if(newCal!== "+" || newCal!== "-" || newCal !== "*" ||newCal!=="/"){
//         screen.value += b.innerText
//         forbear+=b.innerText
//     }else if(forbear=== "+" || forbear=== "-" || forbear === "*" ||forbear==="/"){
//            let newVal = screen.value.split("").map(function(num){
//             return num
//            })
//            console.log(newVal)
//         //    for(c of newVal){
//         //     screen.value+= c
//         //    }
//         }
// })
// }


// reset.addEventListener("click",()=>{
//     screen.value=""    
// })


// equal.addEventListener("click",()=>{
//     eval(screen.value)     
// })