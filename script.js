n1=Math.floor(Math.random()*6)+1
n2=Math.floor(Math.random()*6)+1
document.getElementsByClassName("first")[0].setAttribute("src","./images/dice"+n1+".png")
document.getElementsByClassName("second")[0].setAttribute("src","./images/dice"+n2+".png")
if(n1>n2){
    document.getElementsByClassName("heading")[0].innerHTML="<h1>Player 1 WON</h1>";
}
else if(n1<n2){
    document.getElementsByClassName("heading")[0].innerHTML="<h1>Player 2 WON</h1>";
}
else{
    document.getElementsByClassName("heading")[0].innerHTML="<h1>!!! DRAW !!!</h1>";

}