import { useState } from "react"
import "./atributo.css"

type AtributoProps = {
    emoji: string;
    valor: number;
}

export default function Atributo({emoji,valor}:AtributoProps) {    
    return (
        <div className="atributo">
            <div className="emojiAtributo">{valor} {emoji.repeat(valor)}<span className="inativo">{emoji.repeat(5 - valor)}</span></div>
        </div>
    )
}