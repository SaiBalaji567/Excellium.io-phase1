import { useEffect, useState } from "react";

function TypingText({
    text,
    speed = 15,
    onComplete,
    className = "",
}) {

    const [displayed, setDisplayed] = useState("");

    useEffect(() => {

        let index = 0;

        const interval = setInterval(() => {

            index++;

            setDisplayed(text.slice(0, index));

            if (index >= text.length) {

                clearInterval(interval);

                onComplete?.();

            }

        }, speed);

        return () => clearInterval(interval);

    }, [text]);

    return (

        <p className={className}>

            {displayed}

        </p>

    );

}

export default TypingText;