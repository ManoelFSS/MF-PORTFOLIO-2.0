"use client";

import { useState, useEffect } from 'react';

const TextAnimation = () => {
    const [displayText, setDisplayText] = useState<string>("");
    const [displayName, setDisplayName] = useState<string>("");
    const [displayDev, setDisplayDev] = useState<string>("");
    const [cursorVisibleText1, setCursorVisibleText1] = useState<boolean>(false); // Cursor para o primeiro texto
    const [cursorVisibleText2, setCursorVisibleText2] = useState<boolean>(false); // Cursor para o segundo texto
    const [cursorVisibleText3, setCursorVisibleText3] = useState<boolean>(false); // Cursor para o terceiro texto
    const speed = 100; // Velocidade da animação em milissegundos

    useEffect(() => {
        const text01 = "OLÁ, SOU O";
        const text02 = "MANOEL FERNANDO :)";
        const text03 = "DESENVOLVEDOR FRONT-END";

        // Função que anima o texto
        const animateText = (
            text: string,
            setDisplay: React.Dispatch<React.SetStateAction<string>>,
            setCursorVisible: React.Dispatch<React.SetStateAction<boolean>>,
            delay: number
        ) => {
            let index = 0;
            setCursorVisible(true); // Exibe o cursor ao iniciar a animação

            const interval = setInterval(() => {
                if (index <= text.length) {
                    setDisplay((prev) => text.slice(0, index + 1)); // Atualiza o estado com um pedaço da string
                    index++;
                } else {
                    clearInterval(interval);
                    setCursorVisible(false); // Remove o cursor após terminar a animação
                }
            }, speed);

            return interval;
        };

        // Começar a animação com delays
        const text1Interval = setTimeout(() => animateText(text01, setDisplayText, setCursorVisibleText1, 500), 500);
        const text2Interval = setTimeout(() => animateText(text02, setDisplayName, setCursorVisibleText2, 2300), 2300);
        const text3Interval = setTimeout(() => animateText(text03, setDisplayDev, setCursorVisibleText3, 5000), 5000);

        // Limpeza ao desmontar
        return () => {
            clearTimeout(text1Interval);
            clearTimeout(text2Interval);
            clearTimeout(text3Interval);
        };
    }, []);

    return (
        <div className=' border-[0.4vh]  h-[25vh]  max-2xl:h-[16vh] max-1xl:h-[22vh] landscape:h-[46vh]   min-w-[55vh] landscape:min-w-full max-4xl:min-w-[48vh] max-3xl:min-w-[45vh] max-2xl:min-w-[44vh] max-1xl:min-w-[60vh]  border-[var(--text-color-primary)] flex flex-col pt-1 pb-1  bg-[var(--background)] '>
            <p className="text-[var(--text) font-extrabold] text-[1.5rem] max-3xl:min-text-[1.2rem]  max-2xl:text-[1.1rem] ">
                {displayText}
                {cursorVisibleText1 && <span className="cursor text-[var(--text-color-primary)]">|</span>} {/* Barra piscante para o texto 1 */}
            </p>
            <h2 className="text-[var(--text) font-extrabold] text-[2rem] max-3xl:text-[1.7rem]  max-2xl:text-[1.6rem]   text-[var(--text-color-primary)] font-extrabold">
                {displayName}
                {cursorVisibleText2 && <span className="cursor text-[var(--text-color-primary)">|</span>} {/* Barra piscante para o texto 2 */}
            </h2>
            <p className="text-[var(--text) font-extrabold] text-[1.5rem] max-3xl:text-[1.3rem] max-2xl:text-[1.1rem]  ">
                {displayDev}
                {cursorVisibleText3 && <span className="cursor text-[var(--text-color-primary)]">|</span>} {/* Barra piscante para o texto 3 */}
            </p>

            <style jsx>{`
                .cursor {
                    display: inline-block;
                    animation: blink 0.8s step-end infinite;
                }

                @keyframes blink {
                    50% {
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default TextAnimation;
