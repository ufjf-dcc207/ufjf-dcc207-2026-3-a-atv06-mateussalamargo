import { useState } from "react"

export default function Atributo() {     
    const [valor,setValor] = useState<number>(1)
    let coracoes = ""
    for(let i = 0; i < 5; i++) {
        if(i < valor) {
            coracoes += "❤️"
        }
        else {
            coracoes += "🩶"
        }
    }

    function coracaoClick() {
        if(valor === 5)
            setValor(0)
        else
            setValor(valor+1)
    }


    return (
        <>
            <div className="atributo">{valor}{coracoes}</div>
            <button onClick={coracaoClick}>+</button>
        </>
    )
}