import { useState } from "react";
import Atributo from "./Atributo";
import './emoji.css'

type EmojiKeys = "feliz" | "morto" | "doente";

const EmojiMap = new Map<EmojiKeys, string>([
    ["feliz", "🙃"],
    ["morto", "😵"],
    ["doente", "🤒"],
]);

export default function Emoji() {
    const [status, setStatus] = useState<EmojiKeys>("feliz");

    function alimentarClick() {setStatus("feliz")}

    function hidratarClick() {setStatus("morto")}

    function alternarLuzClick() {setStatus("doente")}
    
    function cicloClick() {
        switch(status) {
            case "feliz":
                setStatus("doente")
                break
            
            case "doente":
                setStatus("morto")
                break
            
            case "morto":
                setStatus("feliz")
        }             
    }

    return (
        <div className="emoji">
            <div className="rosto">{EmojiMap.get(status) || "🙃"}</div>
            <div className="atributos">
                <Atributo emoji="❤️"/>
                <Atributo emoji="🍗"/>
                <Atributo emoji="🔋"/>
                <Atributo emoji="💧"/>
            </div>
            <div className="acoes">
                <button onClick={alimentarClick}>Alimentar</button>
                <button onClick={hidratarClick}>Hidratar</button>
                <button onClick={alternarLuzClick}>Ligar/Desligar luz</button>
                <button onClick={cicloClick}>Ciclo</button>
            </div>
        </div>
    )
}