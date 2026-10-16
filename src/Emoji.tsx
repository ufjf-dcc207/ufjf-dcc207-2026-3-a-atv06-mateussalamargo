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
        agua: 5,
        comida: 5,
        energia: 5,
        luz: true,
        vida: 5,
    });
    
    function alimentarClick() {
        if(emoji.vida === 0) return
        setEmoji({...emoji, comida: Math.min(5, emoji.comida+1)})
    }

    function hidratarClick() {
        if(emoji.vida === 0) return
        setEmoji({...emoji, agua: Math.min(5, emoji.agua+1)})
    }

    function alternarLuzClick() {
        setEmoji({...emoji, luz: !emoji.luz})
    }
    
    function cicloClick() {
        if(emoji.vida === 0) return
        
        const novoEmoji = structuredClone(emoji)
        novoEmoji.comida = Math.max(0,novoEmoji.comida-1) 
        novoEmoji.agua = Math.max(0,novoEmoji.agua-1)
        if(emoji.luz) {
            novoEmoji.energia = Math.max(0,novoEmoji.energia-1)
        }
        else {
            novoEmoji.energia = Math.min(5,novoEmoji.energia+1)
        }
        if(emoji.agua === 0) {
            novoEmoji.vida = Math.max(0,novoEmoji.vida-1)
        }
        if(emoji.energia === 0) {
            novoEmoji.vida = Math.max(0,novoEmoji.vida-1)
        }
        if(emoji.comida === 0) {
            novoEmoji.vida = Math.max(0,novoEmoji.vida-1)
        }
        setEmoji(novoEmoji)
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

