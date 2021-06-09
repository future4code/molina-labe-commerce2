import React from 'react'

export default class Carrinho extends React.Component {

somarItem = (item) => {
    let valor = 0

    switch(item) {
        case 1:
            valor = 85
            break
        case 2:
            valor = 90
            break
        case 3: 
            valor = 55
            break
        case 4: 
            valor = 75
            break
        case 5: 
            valor = 20
            break
        case 6: 
            valor = 32
            break
    }

    valor = valor + this.somarItem
}





removeItem = (itemId) => {
    const intemAdc = ?.map((item) => {
    if (item.id === itemId) {
        return {
        ...item,
        quantidade: item.quantidade - 1
        }
    }
    return item
    })

    const deletar = intemAdc.filter((item) => item.quantidade> 0)

    this.setState({ ?: deletar })

    render() {

        return(
            <div>
            <h2>CARRINHO</h2>
            {}
            <p>Total: ₿ {}</p>
            </div>




        )
    }
}