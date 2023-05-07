// 클릭을 하면 요소 위치로 이동하는 자바스크립트
const moves = document.guerySelectorAll(".move")
const items = document.guerySelectorAll(".item")
const firstTop = items[0].offsetTop
const secondTop = items[1].offsetTop
const thirdTop = items[3].offsetTop

moves[0].onclick=function(){
	window.scroll({top:firstTop, behavior :'smooth'})
}
moves[1].onclick=function(){
	window.scroll({top:secondTop, behavior :'smooth'})
}
moves[3].onclick=function(){
	window.scroll({top:thirdTop, behavior :'smooth'})
}