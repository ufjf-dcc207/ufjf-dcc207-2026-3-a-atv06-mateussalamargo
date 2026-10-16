import { useState } from "react";
import Atributo from "./Atributo";
import './emoji.css';
import type { EmojiType } from "./Types";

type EmojiKeys = "feliz" | "morto" | "doente";
const EmojiMap = new Map<EmojiKeys, string>([
    ["feliz", "🙃"],
    ["morto", "😵"],
    ["doente", "🤒"],
]);

export default function Emoji() {
    const [emoji,setEmoji] = useState<EmojiType>({
        agua: 0,
        comida: 0,
        energia: 5,
        luz: true,
        vida: 5,
    });
    
    function alimentarClick() {
        if(emoji.vida === 0) return;
        emoji.comida = Math.min(5, emoji.comida+1);
        const novoEmoji = structuredClone(emoji);
        setEmoji(novoEmoji)
    }

    function hidratarClick() {
        if(emoji.vida === 0) return;
        setEmoji({...emoji, agua: Math.min(5, emoji.agua+1)});
    }

    function alternarLuzClick() {
        setEmoji({...emoji, luz: !emoji.luz})
    }
    
    function cicloClick() {
        /*setComida(Math.max(0,comida-1))
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
        }*/
    }

    let status = EmojiMap.get("feliz")
    if((emoji.agua === 0 || emoji.energia === 0 || emoji.comida === 0) && emoji.vida !== 0) {
        status = EmojiMap.get("doente")
    }
    if(emoji.vida === 0) {
        status = EmojiMap.get("morto")
    }

    return (
        <div className="emoji">
            <div className="rosto">{status}</div>
            <div className="atributos">
                <Atributo emoji="❤️" valor={emoji.vida}/>
                <Atributo emoji="🍗" valor={emoji.comida}/>
                <Atributo emoji="🔋" valor={emoji.energia}/>
                <Atributo emoji="💧" valor={emoji.agua}/>
                {emoji.luz && "💡"}
            </div>
            <div className="acoes">
                <button onClick={alimentarClick}>Alimentar</button>
                <button onClick={hidratarClick}>Hidratar</button>
                <button onClick={alternarLuzClick}>{emoji.luz? "Desligar": "Ligar"}</button>
                <button onClick={cicloClick}>Ciclo</button>
            </div>
        </div>
    )
}

