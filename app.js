const body = document.querySelector("body")
const buttons = document.querySelectorAll("button")
const screen = document.querySelector(".input")
const specialChars = ["%","*","/","+","="];
let outPut = "";
let answer ="";
const calculate = (evaluat)=>{
    if (outPut.toString().includes(".")&& evaluat===".")return
    if(evaluat==="=" && outPut !== "" ){
        // console.log(eval(outPut))
         outPut = eval(outPut)
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
              calculate(e.target.dataset.value)
        // console.log(e.target.dataset.value)
    
    })
})

 function displayColor(color,delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            body.style.backgroundColor = color;
            resolve();
        }, delay);
        
    })
    
}

async function printBackgroung() {
    await displayColor("blue",3000)
    await displayColor("yellow",3000)
    await displayColor("orange",3000)
}


displayColor("pink",4000)



printBackgroung()
const data = `{"numbers":23,"address":"15 FIRST LIGHT STREET IJEODOD"}`
console.log(JSON.parse(data).address)

const jokes = document.querySelector('.jokes')



const but = document.querySelector('.button')


const addNewJokes = async ()=> {
    const jokeText = await getDadJoke()
    const newLI= document.createElement('LI')
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try{const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/',config)
    console.log(res)
    return res.data.joke
} 
    catch(e){
        return"Oh no error:("
    }   
}




but.addEventListener('click', addNewJokes)





















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