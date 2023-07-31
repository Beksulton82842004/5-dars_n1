
/*
let piyoda = 3.6
let velosiped = 20.1
let mashina = 70
let samolyot = 800
*/
let piyoda = 3.6
let velosiped = 20.1
let mashina = 70
let samolyot = 800


const elInput = document.querySelector(".input")
const elBtn = document.querySelector(".btn")
const elTexts = document.querySelector(".texts")
const elTexts2 = document.querySelector(".texts2")
const elTexts3 = document.querySelector(".texts3")
const elTexts4 = document.querySelector(".texts4")

elBtn.addEventListener("click", function( evt ){
    evt . preventDefault()
    elTexts.innerHTML= ( elInput.value / 3.6 + " " + "Soat"  )

})
 


elBtn.addEventListener("click", function( evt ){
    evt . preventDefault()
    elTexts2.innerHTML= ( elInput.value / velosiped + " " + "Soat"  )

})

elBtn.addEventListener("click", function( evt ){
    evt . preventDefault()
    elTexts3.innerHTML= ( elInput.value / mashina + " " + "Soat"  )

})


elBtn.addEventListener("click", function( evt ){
    evt . preventDefault()
    elTexts4.innerHTML= ( elInput.value / samolyot + " " + "Soat"  )

})