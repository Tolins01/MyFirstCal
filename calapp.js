const currentOperandText = document.querySelector("[data-currentOperand]")
const previousOperandText = document.querySelector("[data-previousOperand]")
const deleteButton = document.querySelector("[data-delete]")
const equalsButton = document.querySelector("[data-equals]")
const allClearButton = document.querySelector("[data-all-clear]")
const operationButton = document.querySelectorAll("[data-operation]")
const numberButtons = document.querySelectorAll("[data-number]")

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
    }

    appendNumber(number){
      if(number === "." && this.currentOperand.includes('.'))return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
   
   chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
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
        this.operation =   undefined 
        this.previousOperand =  ''  
    }
 

    updateDisplay(){
        this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
            console.log(this.operation)
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
})


allClearButton.addEventListener('click',() =>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',() =>{
    calculator.delete()
    calculator.updateDisplay()
})