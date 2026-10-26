
import { useEffect, useState } from "react";

export default function VoiceGreeting() {
    const [canPlay, setCanPlay] = useState(false);

    useEffect(() => {
        const hour = new Date().getHours();

        let greeting;

        if (hour >= 5 && hour < 12) {
            greeting = "Good morning!";
        } else if (hour >= 12 && hour < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }

        const message = `Hey! ${greeting} Welcome to my portfolio. Have a great day!`;

        const speak = () => {
            if (!("speechSynthesis" in window)) return;

            window.speechSynthesis.cancel();

            const speech = new SpeechSynthesisUtterance(message);
            speech.lang = "en-US";
            speech.rate = 0.95;
            speech.pitch = 1.05;
            speech.volume = 1;

            window.speechSynthesis.speak(speech);

            setCanPlay(false);
            window.removeEventListener("pointerdown", speak);
        };

        // Try greeting automatically when the page loads.
        speak();

        return () => {
            window.speechSynthesis?.cancel();
            window.removeEventListener("pointerdown", speak);
        };
    }, []);

    return null;
}
