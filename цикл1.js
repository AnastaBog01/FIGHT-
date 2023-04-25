

$('#butk').click(function (){
  f1('Скорпион')
})
$('#butn').click(function (){
  f1('Саб-Зиро')
})
$('#butb').click(function (){
  f1('Милина')
})

let comp=""
let hum=""
const turn = ["Скорпион", 'Саб-Зиро', 'Милина']
const win = ["СкорпионСаб-Зиро", "Саб-ЗироМилина", "МилинаСкорпион"]
const loose = ["СкорпионМилина", 'Саб-ЗироСкорпион', 'МилинаСаб-Зиро']
const draw = ['СкорпионСкорпион', 'Саб-ЗироСаб-Зиро', 'МилинаМилина']
let scoreh=0
let scorec=0
function f1(x){

  hum=x
  let r=Math.floor(Math.random()*3)
  comp=turn[r]
  console.log(hum, comp)
  $('#out').text("Ты выбрал "+hum+" , я выбрала "+comp+".")
  proverka()
}
function proverka(){
  let result=hum+comp
  if (win.includes(result)){
    console.log('eeeee')
    scoreh+=1
    $('#out').append(" Ты выиграл "+scoreh+" : " +scorec)
  }
  else if (loose.includes(result)){
    console.log('Lox')
    scorec++
    $('#out').append(" Ха, проиграл, в следующий раз повезет "+scoreh+" : " +scorec)
  }
  else{
    console.log('nichya')
    $('#out').append(" Ничья "+scoreh+" : " +scorec)
  }
}
