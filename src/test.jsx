import React, { useState, useEffect } from "react";
import preguntas from "./bancoPreguntas";
import "./test.css"

function Test() {
    const [presguntaActual, setPreguntaActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isAnsweSelected, setIsAnswerSelected] = useState(false);

    function handleAnswerSubmit(isCorrect, e) {
        console.log(isCorrect, e);
        if (isCorrect) {
            setPuntuacion(puntuacion + 1);
        }
        e.target.classList.add(isCorrect ? "correct" : "incorrect");
        setIsAnswerSelected(true);
    }

    function handlerNextQuestion(){
        if(presguntaActual === preguntas.length - 1){
            setIsFinished(true);
        } else {
            setPreguntaActual(presguntaActual + 1);
            setIsAnswerSelected(false);
        }
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
                     <span className="tiempo-restante">
                            Pista
                        </span>
                    ) : (
                        <button-test onClick={handlerNextQuestion}
                        >
                            Siguiente
                        </button-test>
                        
                    )}
                </div>
            </div>
            <div className="lado-derecho">
                {preguntas[presguntaActual].opciones.map((response) => (
                    <button-test
                        key={response.textoRespuesta}
                        onClick={(e) => handleAnswerSubmit(response.isCorrect, e)}
                        //disabled={isAnsweSelected}
                    >
                        {response.textoRespuesta}
                    </button-test>
                ))}
            </div>
        </div>
    );
}

export default Test;