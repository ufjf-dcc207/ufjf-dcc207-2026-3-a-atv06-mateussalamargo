type EmojiKeys = "feliz" | "morto" | "doente";

const EmojiMap = new Map<EmojiKeys, string>([
    ["feliz", "🙃"],
    ["morto", "😵"],
    ["doente", "🤒"],
]);

export default function Emoji() {
    let status:EmojiKeys = "doente";

    function felizClick() {
        console.log("feliz?");
        status = "feliz";
    }

    return (
        <>
            <div className="emoji">{EmojiMap.get(status) || "🙃"}</div>
            <div className="acoes">
                <button onClick={felizClick}>Feliz</button>
            </div>
        </>
    )
}