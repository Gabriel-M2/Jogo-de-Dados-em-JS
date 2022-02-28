

if (performance.navigation.type >= 1) {

    var ran1 = Math.floor(Math.random()*6+1)
    var ran2 = Math.floor(Math.random()*6+1)
    
    var dado1 = "images/dado"+ran1+".png"
    var dado2 = "images/dado"+ran2+".png"
    
    
    document.getElementById("img1").setAttribute("src",dado1)
    document.getElementById("img2").setAttribute("src",dado2)

    if(ran1 == ran2){
        document.getElementById("vencedor").innerText="Empate!"
    }
    if(ran1 > ran2){
        document.getElementById("vencedor").innerText="Player 1 Venceu!!"
    }
    if(ran2 > ran1){
        document.getElementById("vencedor").innerText="Player 2 Venceu!!"
    }

}

