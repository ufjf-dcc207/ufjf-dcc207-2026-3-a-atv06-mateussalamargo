import { useState } from "react";

type EmojiKeys = "feliz" | "morto" | "doente";

const EmojiMap = new Map<EmojiKeys, string>([
    ["feliz", "🙃"],
    ["morto", "😵"],
    ["doente", "🤒"],
]);

export default function Emoji() {
    const [status, setStatus] = useState<EmojiKeys>("morto");

    function felizClick() {
        console.log("feliz?");
        setStatus("feliz");
    }

    function mortoClick() {
        console.log("morto!");
        setStatus("morto")
    }

    function doenteClick() {
        console.log("morto!");
        setStatus("doente")
    }

    return (
        <>
            <div className="emoji">{EmojiMap.get(status) || "🙃"}</div>
            <div className="acoes">
                <button onClick={felizClick}>Feliz</button>
                <button onClick={mortoClick}>Morto</button>
                <button onClick={doenteClick}>Doente</button>
            </div>
        </>
    )
}