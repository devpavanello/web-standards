//Implementação do jogo
(function(){

    // VARIAVEIS

    // CONFIGURAÇÃO DO CANVAS PARA RENDERIZAR 2D
    var cnv = document.querySelector("canvas")
    var ctx = cnv.getContext("2d")

    // CONSTANTES COM O CODIGO DAS TECLAS
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40

    // MOVIMENTOS
    var mvLeft = mvUp = mvRight = mvDown = false

    // ARRAYS (VETOR)
    var sprites = []
    var blocks = []

    // OBJETOS INSTANCIADOS COM OS SEGUINTES PARAMETROS: POSX, POSY, LARGURA, ALTURA E COR
    var character = new Sprite(50, 175, 50, 50, "#00f")
    character.speed = 4
    sprites.push(character)

    // CRIA UM SPRITE ESTATICO 
    var block1 = new Sprite(500, 100, 50, 50, "#f00")
    sprites.push(block1)
    blocks.push(block1)

    var block2 = new Sprite(200, 300, 100, 50, "#8B6914")
    sprites.push(block2)
    blocks.push(block2)

    var block3 = new Sprite(50, 100, 20, 150, "#7F7F7F")
    sprites.push(block3)
    blocks.push(block3)

    // INPUT -> EVENTO DISPARADO QUANDO UMA TECLA FOR PRESSIONADA
    window.addEventListener("keydown", function(e){
        var key = e.keyCode        
        switch(key){
            case LEFT:
                mvLeft = true
                break
            case UP:
                mvUp = true
                break
            case RIGHT:
                mvRight = true
                break
            case DOWN:
                mvDown = true
                break
        }
    }, false)

    window.addEventListener("keyup", function(e){
        var key = e.keyCode
        switch(key){
            case LEFT:
                mvLeft = false
                break
            case UP:
                mvUp = false
                break
            case RIGHT:
                mvRight = false
                break
            case DOWN:
                mvDown = false
                break            
        }
    }, false)

    // LOOP
    function loop(){
        window.requestAnimationFrame(loop, cnv)
        //Ele atualiza os cálculos matemáticos de acordo com o acionamneto das teclas.
        update()
        //Ele desenha as figuras na tela.
        render()
    }

    // ATUALIZACOES
    function update(){

        //Move o sprite
        if(mvLeft && !mvRight){
            character.posX -= character.speed
        }
        if(mvRight && !mvLeft){
            character.posX += character.speed
        }
        if(mvUp && !mvDown){
            character.posY -= character.speed
        }
        if(mvDown && !mvUp){
            character.posY += character.speed
        }

        // LIMITES DE TELA
        character.posX = Math.max(0, Math.min(cnv.width - character.width, character.posX))
        character.posY = Math.max(0, Math.min(cnv.height - character.height, character.posY))

        //Colisões
        for(var i in blocks)
        {
            //Bloco atual da lista
            var blk = blocks[i]

            //Verifica se o personagem está colidindo com os outros blocos
            if(blk.visible)
            {
                blockRect(blk, character)
            }
        }
    }

    // RENDERIZACAO
    function render(){

        ctx.clearRect(0, 0, cnv.width, cnv.height)

        for(var i in sprites){
            var spr = sprites[i]
            if(spr.visible){
                ctx.fillStyle = spr.color;
                ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height)
            }
        }
    }
    loop()

}());