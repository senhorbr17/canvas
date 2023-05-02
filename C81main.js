canvas=document.getElementById("meucanvas")
formato=canvas.getContext('2d')
cor="black"
canvas.addEventListener("mousedown",desenhar)

function desenhar(e){
    cor=document.getElementById("cor").value 
    mousex=e.clientX - canvas.offsetLeft
    mousey=e.clientY - canvas.offsetTop
    circulo(mousex,mousey)

}
function circulo(mousex,mousey)
{
    formato.beginPath()
    formato.strokeStyle=cor
    formato.lineWith=2
    formato.arc(mousex,mousey,50,0,2*Math.PI)
    formato.stroke()
}
function limpar(){
    formato.clearRect(0,0,canvas.width,canvas.height)
}