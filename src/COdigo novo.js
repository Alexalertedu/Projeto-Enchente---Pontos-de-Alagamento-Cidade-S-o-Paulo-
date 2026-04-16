player.onChat("sensor", function () {
    loops.forever(function on_forever() {
        let posEsquerda: Position;
        
        let posJogador = player.position()
       
        let posAbaixo = positions.add(posJogador, pos(0, -2, 0))
     
        if (blocks.testForBlock(WATER, posAbaixo)) {
           
            player.say("Água encontrada abaixo!")
         
            posEsquerda = positions.add(posJogador, pos(-1, 0, 0))
           
            blocks.place(REDSTONE_TORCH, posEsquerda)
           
            loops.pause(500)
        }
        
        loops.pause(100)
    })
})
