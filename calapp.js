const currentOperandText = document.querySelector("[data-currentOperand]")
const previousOperandText = document.querySelector("[data-previousOperand]")
const deleteButton = document.querySelector("[data-delete]")
const equalsButton = document.querySelector("[data-equals]")
const allClearButton = document.querySelector("[data-all-clear]")
const operationButton = document.querySelectorAll("[data-operation]")
const numberButtons = document.querySelectorAll("[data-number]")
const themeButton = document.querySelector("#range")
const body = document.querySelector(".body")
const display =  document.querySelector(".display")
const keypads = document.querySelector(".keypad")

themeButton.addEventListener("input", ()=>{
   
  function adjustClasses (className,operate,otherBut){

    const editButtons = document.querySelectorAll(".edit") 
    const topContainer = document.querySelector(".top-container")
    equalsButton.classList[operate](otherBut.equal)
    topContainer.classList[operate](otherBut.topContainer)

    editButtons.forEach(but => {
      but.classList[operate](otherBut.editclass)
    })
    numberButtons.forEach(but=>{
        but.classList[operate](className)
      })
    operationButton.forEach(but=>{
       but.classList[operate](className)
      })
  }

  function adjustMainTheme(operate, bodyClass, displayClass, keypadClass){

  body.classList[operate](bodyClass)
  display.classList[operate](displayClass)
  keypads.classList[operate](keypadClass)

}
  switch(themeButton.value){
    case "2":
      body.classList.remove("theme-three-body");
      adjustMainTheme( "add", "theme-two-body", "display-two","key-two")
      adjustClasses("button-two-theme","add", {equal:"equal-but-two", editclass:"theme-edit-two", topContainer:"two-top-container"})
      adjustClasses("button-three-theme","remove",{equal:"equal-but-three", editclass:"theme-edit-three", topContainer:"three-top-container"})
      break;

    case "3":
      body.classList.add("theme-three-body");
      adjustMainTheme("remove","theme-two-body","display-two","key-two")
      adjustClasses("button-three-theme","add",{equal:"equal-but-three", editclass:"theme-edit-three", topContainer:"three-top-container"})
      break;

    default:
   
    body.classList.remove("theme-three-body");
    adjustMainTheme( "remove", "theme-two-body", "display-two","key-two")
    adjustClasses("button-two-theme","remove",{equal:"equal-but-two", editclass:"theme-edit-two", topContainer:"two-top-container"});
    adjustClasses("button-three-theme","remove",{equal:"equal-but-three", editclass:"theme-edit-three", topContainer:"three-top-container"})
    return
   }
})
     

let answer;
console.log('welcome')

class Calculator {
    constructor (previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }

    clear(){
      this.currentOperand = '0'
      this.previousOperand = '0'
      this.operation = undefined
    }

    delete() {
        if (answer !== 0) {
             // Display the answer
            answer = 0; // Reset the answer after displaying it
            return;
        }
        this.currentOperand = this.currentOperand.toString().slice(0, -1); // Perform delete
    }
    

    

    appendNumber(number){
      if(number === "." && this.currentOperand.includes('.'))return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
   
   chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '' || answer!=0) {
      this.compute()
    }
    this.operation = operation 
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
    if(answer!=0 && this.previousOperand == 0){
        this.previousOperand = answer
    }

  }

    getDisplayNumber(number){
        const floatNumber = parseFloat(number)
        if (isNaN(floatNumber))return ''
        return floatNumber.toLocaleString('en')
    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand)
        const current =  parseFloat (this.currentOperand)
        if (isNaN(prev) || isNaN(current))return
        switch (this.operation){
            case '+':
                computation = prev + current
                break
            case ('-'):
                computation = prev - current;
                break
            case ('*'):
                computation = prev * current;
                break
            case ('÷'):
                computation = prev / current;
                break
             default: 
            return
        }
        this.currentOperand = computation
        answer = this.currentOperand
        this.operation =   undefined 
        this.previousOperand =  ''  
    }
 

    updateDisplay(){
        const previousOperand= document.querySelector(".previousOperand")
        this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
            previousOperand.style.display = "flex";
            this.previousOperandText.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`}
            else {
                this.previousOperandText.innerText = ''
              }
    }
} 

 
const calculator = new Calculator(previousOperandText,currentOperandText)




numberButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
           calculator.appendNumber(button.innerText)
           calculator.updateDisplay()
    
    })
})

operationButton.forEach(button =>{
    button.addEventListener('click',()=>{
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
})
})



equalsButton.addEventListener('click',() =>{
    if(calculator.previousOperand === 0)return
    if(calculator.currentOperandText.innerText){  
    answer = 0;
    }
    calculator.compute()
    calculator.updateDisplay()
    calculator.clear()
    
    // console.log(calculator.previousOperandText.innerText)
})


allClearButton.addEventListener('click',() =>{
    calculator.clear() 
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',() =>{
    calculator.delete()
    calculator.updateDisplay()
})


