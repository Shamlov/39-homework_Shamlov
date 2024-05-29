/*Создать html-страницу для генерации случайных чисел. На 
странице должна быть кнопка, при нажатии на которую случайное 
целое число от 0 до 100 выводится в div */


let btnRandomGenerator = document.querySelector('#btnRandomGenerator')
let conclusion = document.querySelector('#conclusion')
let randomNumber 
function randomGenerator () {                            // для тренировки сделаем отдельно функцию генерации ранд числа
    randomNumber = Math.round(Math.random() * 100) 
}
function showNumber() {
    randomGenerator()
    conclusion.textContent = randomNumber
}
btnRandomGenerator.addEventListener('click', showNumber)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Создать html-страницу с div, который занимает всю ширину 
и высоту экрана. При движении мышкой внутри этого div, выво-
дить текущие координаты мышки. При клике кнопкой мыши туда 
же, выводить, какой именно кнопкой был совершен клик (правой 
или левой).*/

let mouseField = document.querySelector('.mouse-field')
let showInfo = document.querySelector('.show-info')
let showInfo2 = document.querySelector('.show-info2')
function coordinateOutput(event) {
    showInfo.textContent = `координаты X ${event.layerX} и Y ${event.layerY}`
}
function mouseButton(event) {
    let rez
    switch(event.which) {
        case 1: rez = 'левой'
        break
        case 2: rez = 'колесико'
        break
        case 3: rez = 'правой'
        break
    }
    showInfo2.querySelector('span').textContent = rez    // querySelector тут на попродовать сделал так    
}
mouseField.addEventListener('mousemove' , coordinateOutput)
mouseField.addEventListener('contextmenu', e => e.preventDefault())  // отключаем контекстное меню поля
mouseField.addEventListener('mousedown', mouseButton )

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Создать html-страницу, на которой будет кнопка и текст. При 
нажатии на кнопку, текст должен скрываться. При повторном на-
жатии – текст должен снова отображаться.*/

let btnText = document.getElementById('btnText')
let text = document.querySelector('.text')
textDisplay = () => text.classList.toggle('text-hidden')
btnText.addEventListener('click' , textDisplay)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Создать html-страницу со вкладками. С левой стороны страни-
цы отображается несколько вкладок, по которым можно переклю-
чаться. У каждой вкладки есть свое содержимое, но в один момент 
времени отображается содержимое только активной вкладки.  */


let switch1 = document.querySelector('.switch')
let text1 = document.querySelectorAll('.block-switch-text > p')   // тут сразу получаю коллекцию 
function changeСlass(event) {                 // делаю делегирование 
    if(event.target.closest('p')) {           // ловлю клик по p
        text1.forEach((el)=> {                // перебираю коллекцию с текстами
            if (event.target.dataset.text == el.dataset.text) {     // тут сравниваю значения дата атрибутов
                el.classList.remove('text-none')
            } else {
                el.classList.add('text-none')
            }
        })
    }
}
switch1.addEventListener('click', changeСlass)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

