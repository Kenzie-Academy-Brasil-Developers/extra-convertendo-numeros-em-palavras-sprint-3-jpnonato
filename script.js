function desmenbrar (numero){
    let str =  numero.toString()
    let dezenaplusunid = Number(str.charAt(1) + str.charAt(2))
     
    if ((numero > 100) && (str.charAt(1) === '0') && (str.charAt(2) === '0')){
        return [Number(`${str.charAt(0)}00`)]
    }if ((numero > 100) && (str.charAt(1) === '0')){
        return [Number(`${str.charAt(0)}00`), Number(`${str.charAt(2)}`)]
    }if ((numero > 100) && (str.charAt(2) === '0')){
        return [Number(`${str.charAt(0)}00`), Number(`${str.charAt(1)}0`)]
    } if ((numero > 100) && dezenaplusunid > 20){
        return [Number(`${str.charAt(0)}00`), Number(`${str.charAt(1)}0`), Number(`${str.charAt(2)}`)]
    } if ((numero > 100) && dezenaplusunid < 20){
        return [Number(`${str.charAt(0)}00`), Number(`${str.charAt(1)}0`)+ Number(`${str.charAt(2)}`)]
    } if((numero > 20) && (numero < 100)){
        return [Number(str.charAt(0) + '0') , Number(str.charAt(1))]
    }
}


function numbersToWords (n){
    let numbers = ['', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove', 'vinte']
    let dezena = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
    let centena = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos', 'mil']
    
    let ndesmenb = desmenbrar(n)
    if(n > 1000){
        return 'o numero digitado deve ser entre 0 e 1000'
    }if(n <= 20){
        return numbers[n]
    } if( n === 100){
        return  'cem'
    } if( n === 1000){
        return centena[10] 
    } if ((n > 20) && (n < 100)){
        return `${dezena[ndesmenb[0]/10]} e ${numbers[ndesmenb[1]]}`    
    } if ((n > 100) && (ndesmenb.length === 1)){       
        return `${centena[ndesmenb[0]/100]}`
    } if ((n > 100) && (ndesmenb.length === 2)){       
        return `${centena[ndesmenb[0]/100]} e ${numbers[ndesmenb[1]]}`
    }if (n > 100){       
        return `${centena[ndesmenb[0]/100]} e ${dezena[ndesmenb[1]/10]} e ${numbers[ndesmenb[2]]}`
    }
}


let input = document.getElementById("input")
let button = document.getElementById("button")

button.addEventListener("click", function(){ 
    
let typedText = input.value
let textarea = document.getElementById("text-area")
let typedNumber = Number(typedText)
   
let result = numbersToWords (typedNumber)

    textarea.innerText = result
})




