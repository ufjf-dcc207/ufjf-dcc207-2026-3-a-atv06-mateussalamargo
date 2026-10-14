import { useState } from "react"
import "./atributo.css"

type AtributoProps = {
    emoji: string;
}

export default function Atributo({emoji}:AtributoProps) {     
    const [valor,setValor] = useState<number>(0)

    function emojiClick() {
        if(valor === 5)
            setValor(0)
        else
            setValor(valor+1)
    }


    return (
        <div className="atributo">
            <div className="emojiAtributo">{valor} {emoji.repeat(valor)}<span className="inativo">{emoji.repeat(5 - valor)}</span></div>
            <button onClick={emojiClick}>+</button>
        </div>
    )
}