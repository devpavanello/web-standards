function blockRect(r1, r2){

    // R1 -> BLOCO
    // R2 -> PAREDE
    // catetos: armazenam a distancia entre os retangulos
    var catX = r1.centerX() - r2.centerX()
    var catY = r1.centerY() - r2.centerY()

    // SOMA DAS METADES
    var sumHalfWidth = r1.halfWidth() + r2.halfWidth()
    var sumHalfHeight = r2.halfHeight() + r2.halfHeight()

    // VERIFICA SE A SOMA DO CATETO DE X E MENOR QUE A SOMA DA LARGURA E
    // VERIFICA SE A SOMA DO CATETO DE Y E MENOR QUE A SOMA DA ALTURA
    // VERIFICA A INTESECÇÃO ENTRE OS DOIS SPRITES
    if(Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight)
    {
        var overlapX = sumHalfWidth - Math.abs(catX)
        var overlapY = sumHalfHeight - Math.abs(catY)

        // VERIFICA A COLISAO POR CIMA OU OR BAIXO
        if(overlapX >= overlapY)
        {           
           if(catY > 0)
           {
                // POR CIMA
                r1.posY += overlapY
           }
           else
           {
                // POR BAIXO
                r1.posY -= overlapY
           }
        }
        // VERIFICA COLISAO PELA ESQUERDA OU DIREITA
        else 
        {
            if(catX > 0)
            {
                // DIREITA
                r1.posX += overlapX
            }
            else
            {
                // ESQUERDA
                r1.posX -= overlapX
            }
        }
    }
}