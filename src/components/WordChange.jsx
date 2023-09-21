import React, { useEffect } from "react";

export default function WordChange() {

    useEffect(() => {
        const text = document.querySelector(".word");

        const textload = () => {
            setTimeout(() => {
                text.textContent = "Passioneret";
            }, 0);
            setTimeout(() => {
                text.textContent = "Kreativ";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Fleksibel";
            }, 8000);
            setTimeout(() => {
                text.textContent = "Team Player";
            }, 12000);
        }

        textload();
        setInterval(textload, 16000);
    }, []);

    return (
        <div className="word-change">
            <span className="word">Passioneret</span>
        </div>
    )
}