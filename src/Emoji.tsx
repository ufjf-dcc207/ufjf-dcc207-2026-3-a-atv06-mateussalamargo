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
    const [vida,setVida] = useState<number>(5)
    const [energia,setEnergia] = useState<number>(5)
    const [comida,setComida] = useState<number>(2)
    const [agua,setAgua] = useState<number>(0)
    const [luz,setLuz] = useState<boolean>(true)

    function alimentarClick() {
        setComida(Math.min(5,comida+1))
    }

    function hidratarClick() {
        setAgua(Math.min(5,agua+1))
    }

    function alternarLuzClick() {
        setLuz(!luz)
    }
    
    function cicloClick() {
        if(luz) {
            setEnergia(Math.max(0,energia-1))
        }
        else {
            setEnergia(Math.min(5,energia+1))     
        }
    }

    return (
        <div className="emoji">
            <div className="rosto">{EmojiMap.get(status) || "🙃"}</div>
            <div className="atributos">
                <Atributo emoji="❤️" valor={vida}/>
                <Atributo emoji="🍗" valor={comida}/>
                <Atributo emoji="🔋" valor={energia}/>
                <Atributo emoji="💧" valor={agua}/>
                {luz && "💡"}
            </div>
            <div className="acoes">
                <button onClick={alimentarClick}>Alimentar</button>
                <button onClick={hidratarClick}>Hidratar</button>
                <button onClick={alternarLuzClick}>{luz? "Desligar": "Ligar"}</button>
                <button onClick={cicloClick}>Ciclo</button>
            </div>
        </div>
    )
}