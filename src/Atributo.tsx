import { useState } from "react"

export default function Atributo() {     
    const [valor,setValor] = useState<number>(1)

    function coracaoClick() {
        if(valor === 5)
            setValor(0)
        else
            setValor(valor+1)
    }


    return (
        <>
            <div className="atributo">{valor} {"❤️".repeat(valor)}{"🩶".repeat(5 - valor)}</div>
            <button onClick={coracaoClick}>+</button>
        </>
    )
}