import React, { useState, useEffect } from "react";
import preguntas from "./bancoPreguntas";
import "./test.css"

function Test() {
    const [presguntaActual, setPreguntaActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isAnsweSelected, setIsAnswerSelected] = useState(false);
    const [answerShown, setAnswerShown] = useState(false);

    function handleAnswerSubmit(isCorrect, e) {
        console.log(isCorrect, e);
        if (isCorrect) {
            setPuntuacion(puntuacion + 1);
        }
        e.target.classList.add(isCorrect ? "correct" : "incorrect");
        setIsAnswerSelected(true);
    }

    function handlerNextQuestion() {
        if (presguntaActual === preguntas.length - 1) {
            setIsFinished(true);
        } else {
            setPreguntaActual(presguntaActual + 1);
            setIsAnswerSelected(false);
        }
    }

    function handleCloseButton(){
        window.location.href = "/";
    }

    if (answerShown) {
        return (
            <div className="test">
                <button className="close-button" onClick={handleCloseButton}>
                    X
                </button>
                <div className="lado-izquierdo">
                    <div className="numero-pregunta">
                        <span> Pregunta {presguntaActual + 1} de </span> {preguntas.length}
                    </div>
                    <div className="titulo-pregunta">
                        {preguntas[presguntaActual].titulo}
                    </div>
                    <div>
                        {preguntas[presguntaActual].opciones.filter(
                            (opt) => opt.isCorrect
                            )[0].textoRespuesta
                        }
                    </div>
                    <div>
                        <button className="btn btn-outline-primary w-30 mb-3" onClick={() => {
                            if (presguntaActual === preguntas.length - 1) {
                                window.location.href = "/test";
                            } else {
                                setPreguntaActual(presguntaActual + 1);
                            }
                        }}>
                            {presguntaActual === preguntas.length -1 ? "Volver a jugar" : "Siguiente"}
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    if (isFinished) {
        return (
            <div className="test">
                <div className="juego-terminado">
                    <span>
                        {" "}
                        Obtuviste {puntuacion} de {preguntas.length}{" "}
                    </span>
                    <button-test onClick={() => (window.location.href = "/test")}>
                        {" "}
                        Intentar de nuevo
                    </button-test>
                    <button-test onClick={() => {
                        setIsFinished(false);
                        setAnswerShown(true);
                        setPreguntaActual(0);
                    }}
                    >
                        {" "}
                        Ver respuestas
                    </button-test>
                </div>
            </div>
        );
    }

    return (
        <div className="test">
            <div className="lado-izquierdo">
                <div className="numero-pregunta">
                    <span> Pregunta {presguntaActual + 1} de </span> {preguntas.length}
                </div>
                <div className="titulo-pregunta">
                    {preguntas[presguntaActual].titulo}
                </div>
                <div>
                    {!isAnsweSelected ? (
                        <span className="pista">
                            Pista
                        </span>
                    ) : (
                        <button type="primary" className="btn btn-outline-primary w-30 mb-3" onClick={handlerNextQuestion}
                        >
                            Siguiente
                        </button>

                    )}
                </div>
            </div>
            <div className="lado-derecho">
                {preguntas[presguntaActual].opciones.map((response) => (
                    <button-test
                        key={response.textoRespuesta}
                        onClick={(e) => handleAnswerSubmit(response.isCorrect, e)}
                        //disabled
                    >
                        {response.textoRespuesta}
                    </button-test>
                ))}
            </div>
        </div>
    );
}

export default Test;