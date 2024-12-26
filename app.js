const buttons = document.querySelectorAll("button")
const currentOperand = document.querySelector(".currentOperand")
const previousOperand   = document.querySelector(".previousOperand")

// const operate = document.querySelectorAll(".bot")
let outPut ="";
const specCharacters= ["-","+","/","*","."]

const calculate = (evaluat)=>{
    if(evaluat==="="){
        // console.log(eval(outPut))
         outPut = eval(outPut)
         currentOperand.innerHTML = outPut;
    }else if (evaluat ==="reset"){
        outPut ="";
        currentOperand.innerHTML = outPut;
    }else if(evaluat==="Del"){
        outPut = outPut.substring(0,outPut.length-1);
        currentOperand.innerHTML = outPut;
    }else{
            outPut += evaluat;  
            currentOperand.innerText = outPut
    }
};

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        
        if(specCharacters.includes(e.target.dataset.value) && specCharacters.includes(outPut.substring(outPut.length-1))){   
        outPut.replace(outPut.substring(outPut.length-1), e.target.dataset.value)  
        }
        calculate(e.target.dataset.value)
    
    
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