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
    const [vida,setVida] = useState<number>(5)
    const [energia,setEnergia] = useState<number>(5)
    const [comida,setComida] = useState<number>(2)
    const [agua,setAgua] = useState<number>(0)
    const [luz,setLuz] = useState<boolean>(true)

    function alimentarClick() {
        if(vida !== 0) {
            setComida(Math.min(5,comida+1))
        }
    }

    function hidratarClick() {
        if(vida !== 0) {
            setAgua(Math.min(5,agua+1))
        }
    }

    function alternarLuzClick() {
        setLuz(!luz)
    }
    
    function cicloClick() {
        setComida(Math.max(0,comida-1))
        setAgua(Math.max(0,agua-1))
        if(luz && vida !== 0) {
            setEnergia(Math.max(0,energia-1))
        }
        else {
            if(vida !== 0) {
                setEnergia(Math.min(5,energia+1))     
            }
        }
        if(agua === 0) {
            setVida((prevVida) => (Math.max(0,prevVida-1)))
        }
        if(energia === 0) {
            setVida((prevVida) => (Math.max(0,prevVida-1)))
        }
        if(comida === 0) {
            setVida((prevVida) => (Math.max(0,prevVida-1)))
        }
    }

    let status = EmojiMap.get("feliz")
    if((agua === 0 || energia === 0 || comida === 0) && vida !== 0) {
        status = EmojiMap.get("doente")
    }
    if(vida === 0) {
        status = EmojiMap.get("morto")
    }

    return (
        <div className="emoji">
            <div className="rosto">{status}</div>
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

