import { useState } from "react";

type EmojiKeys = "feliz" | "morto" | "doente";

const EmojiMap = new Map<EmojiKeys, string>([
    ["feliz", "🙃"],
    ["morto", "😵"],
    ["doente", "🤒"],
]);

export default function Emoji() {
    const [status, setStatus] = useState<EmojiKeys>("feliz");

    function felizClick() {setStatus("feliz")}

    function mortoClick() {setStatus("morto")}

    function doenteClick() {setStatus("doente")}
    
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
                break
        }             
    }

    return (
        <>
            <div className="emoji">{EmojiMap.get(status) || "🙃"}</div>
            <div className="acoes">
                <button onClick={felizClick}>Feliz</button>
                <button onClick={mortoClick}>Morto</button>
                <button onClick={doenteClick}>Doente</button>
                <button onClick={cicloClick}>Ciclo</button>
            </div>
        </>
    )
}