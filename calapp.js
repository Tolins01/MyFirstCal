const currentOperandText = document.querySelector("[data-currentOperand]")
const previousOperandText = document.querySelector("[data-previousOperand]")
const deleteButton = document.querySelector("[data-delete]")
const equalsButton = document.querySelector("[data-equals]")
const allClearButton = document.querySelector("[data-all-clear]")
const operationButton = document.querySelectorAll("[data-operation]")
const numberButtons = document.querySelectorAll("[data-number]")
let answer=0;
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

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
        this.previousOperand = this.previousOperand.toString().slice(0,-1)
        if(this.currentOperand=="" && this.previousOperand==""){
           this.clear()
          
        }
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
    if(answer!=0 && this.previousOperand == 0){
        this.previousOperand = answer
    }
    this.currentOperand = ''
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
        switch (this.operation || answer!=0){
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
    calculator.compute()
    calculator.updateDisplay()
    calculator.clear()
})


allClearButton.addEventListener('click',() =>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',() =>{
    calculator.delete()
    calculator.updateDisplay()
})