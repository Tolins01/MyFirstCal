const currentOperandText = document.querySelector("[data-currentOperand]")
const previousOperandText = document.querySelector("[data-previousOperand]")
const deleteButton = document.querySelector("[data-delete]")
const equalsButton = document.querySelector("[data-equals]")
const allClearButton = document.querySelector("[data-all-clear]")
const operationButton = document.querySelectorAll("[data-operation]")
const numberButtons = document.querySelectorAll("[data-number]")


class Calulator {
    constructor (previousOperand, currentOperand){
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand
    }

    clear(){
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }

    delete(){
        this.currentOperand = this.previousOperand.tostring.slice(0,-1)
    }

    appendNumber(number){
      if(number === "." && this.currentOperand.includes('.'))return
      this.currentOperand.innerText = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation){
        if(this.currentOperand === '')return
        if (this.previousOperand !== ''){
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
            case (''):
                computation = prev - current;
                break
        }
    }
    
    updateDisplay(){

        this.currentOperandText.innerText = this.getDisplayNumbers(this.currentOperand)
        if(this.operation!= null){
            this.previousOperandText.textcontent.innerText = 
            `${this.perviousOperand}${this.operation}`        }
    }
} 

 
const calculator = new calculator(previousOperandText, 
    currentOperandText)




buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
    
        calculate.appendNumber(button.innerText)
        calculator.operationButton(operationButton.innerText)
    
    })
})

operationButton.forEach(button =>{
    button.addEventListener('click',button =>{
    calculator.compute()
    calculator.updateDisplay()
})
})



equalsButton.addEventListener('click',button =>{
    calculator.compute()
    calculator.updateDisplay()
})