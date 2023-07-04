import React, { useState } from "react";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import "./events/events.css";
import { useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";
/**
 * Componente Test
 *
 * Realiza una evaluación basada en un test de conocimientos sobre el contenido presentado
 * en las diferentes secciones de la página.
 *
 * @param {object} references - Referencias a los elementos HTML de cada sección.
 * @param {object} lastCard - Registra la ultima tarjeta leída por el usuario.
 * @param {object} setSession - Actualiza la información de la sesión (i.e. avances de lectura)
 * @param {object} session - Información sobre la sesión
 * @returns {JSX.Element} - Elemento JSX que muestra 5 preguntas al azar, tambienn las opciones de
 *                          ver las respuestas y reintentar el test (con nuevas preguntas).
 */
function Test({ reference, lastCard, setSession, session }) {
  const questions = session?.questions || [];
  const [presguntaActual, setPreguntaActual] = useState(0);
  const [openFeedback, setOpenFeedback] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenFeedback(false);
  };

  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [answerShown, setAnswerShown] = useState(false);
  const { width } = useThree((state) => state.viewport);
  const [feedback, setFeedback] = useState({ message: "", state: "info" });
  useEffect(() => {
    if (lastCard && !isAnswerSelected) setPreguntaActual(lastCard);
  });
  function handleAnswerSubmit(isCorrect, e, optionSelected, index, correctOpt) {
    setOpenFeedback(true);
    if (isCorrect) {
      setPuntuacion(puntuacion + 1);
      setFeedback({
        ...feedback,
        message: "¡Respuesta correcta!",
        state: "success",
      });
    } else {
      setFeedback({
        ...feedback,
        message:
          "La respuesta es incorrecta. La opción correcta era: " + correctOpt,
        state: "error",
      });
    }
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    setSession({
      ...session,
      Evaluacion: session.Evaluacion + 1,
      lastPage: "Evaluacion",
      answers: { ...session.answers, [`answer${index}`]: optionSelected },
    });

    setIsAnswerSelected(true);
  }

  function handlerNextQuestion() {
    setOpenFeedback(false);
    if (presguntaActual === questions?.length - 1) {
      setIsFinished(true);
    } else {
      setPreguntaActual(presguntaActual + 1);
      setIsAnswerSelected(false);
    }
  }

  function handleCloseButton() {
    window.location.href = "/"; //CAMBIAR PARA QUE SÓLO SE CIERRE LA VENTANA
  }

  function handleRestartTest() {
    window.location.href = "/"; //CAMBIAR PARA QUE SE REINICIE EL TEST
  }

  if (answerShown) {
    return (
      <Html
        ref={reference}
        fullscreen
        style={{
          top: "500vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="test" style={{ position: "relative" }}>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            onClick={handleCloseButton}
            style={{ position: "absolute", top: "10px", right: "10px" }}
          />
          <div className="lado-izquierdo">
            <div className="numero-pregunta">
              <span> Pregunta {presguntaActual + 1} de </span>{" "}
              {questions?.length}
            </div>
            <div className="pregunta-titulo">
              {questions[presguntaActual]?.utterance}
            </div>
            <div>
              {
                questions[presguntaActual]?.options[
                  questions[presguntaActual]?.answer
                ]
              }
            </div>
            <div>
              <button
                className="btn btn-outline-primary w-30 mb-3"
                onClick={() => {
                  if (presguntaActual === questions?.length - 1) {
                    handleRestartTest();
                  } else {
                    setPreguntaActual(presguntaActual + 1);
                  }
                }}
              >
                {" "}
                {presguntaActual === questions?.length - 1
                  ? "Volver a jugar"
                  : "Siguiente"}
              </button>
            </div>
          </div>
        </div>
      </Html>
    );
  }

  if (isFinished) {
    return (
      <Html
        ref={reference}
        fullscreen
        style={{
          top: "500vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="test" style={{ position: "relative" }}>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            onClick={handleCloseButton}
            style={{ position: "absolute", top: "10px", right: "10px" }}
          />
          <div className="juego-terminado">
            <span>
              {" "}
              Obtuviste {puntuacion} de {questions?.length}{" "}
            </span>
            <button
              type="primary"
              className="btn btn-outline-primary w-30 mb-3"
              onClick={handleRestartTest}
            >
              {" "}
              Intentar de nuevo
            </button>
            <button
              type="primary"
              className="btn btn-outline-primary w-30 mb-3"
              onClick={() => {
                setIsFinished(false);
                setAnswerShown(true);
                setPreguntaActual(0);
              }}
            >
              {" "}
              Ver respuestas
            </button>
          </div>
        </div>
      </Html>
    );
  }
  return (
    <Html
      //ref={reference}
      fullscreen
      style={{
        top: width > 13.2 ? "500vh" : width > 7.92 ? "600vh" : "650vh",
        //backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="titulo" ref={reference} id="Evaluacion">
        <h1>Evaluacion</h1>
      </div>
      <div className="test">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span> Pregunta {presguntaActual + 1} de </span> {questions?.length}
          </div>
          <div className="pregunta-titulo">
            {questions[presguntaActual]?.utterance}
          </div>
          <div>
            {!isAnswerSelected ? (
              <span className="pista">
                Pista: {questions[presguntaActual]?.feedback}
              </span>
            ) : (
              <button
                type="primary"
                className="btn btn-outline-primary w-30 mb-3"
                onClick={handlerNextQuestion}
              >
                {" "}
                Siguiente
              </button>
            )}
          </div>
        </div>
        <div className="lado-derecho">
          {questions[presguntaActual]?.options && (
            <>
              {Object.entries(questions[presguntaActual]?.options).map(
                ([opt, option]) => (
                  <button
                    className="button-test"
                    key={option}
                    onClick={(e) =>
                      handleAnswerSubmit(
                        questions[presguntaActual]?.options[
                          questions[presguntaActual]?.answer
                        ] === option,
                        e,
                        opt,
                        presguntaActual + 1,
                        questions[presguntaActual]?.options[
                          questions[presguntaActual]?.answer
                        ]
                      )
                    }
                    disabled={isAnswerSelected}
                  >
                    {option}
                  </button>
                )
              )}
            </>
          )}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "0vh", left: "0vh" }}>
        <Snackbar
          open={openFeedback}
          autoHideDuration={60000}
          onClose={handleClose}
          style={{ position: "relative" }}
        >
          <Alert
            onClose={handleClose}
            severity={feedback.state}
            sx={{ width: "100%" }}
          >
            {feedback.message}
          </Alert>
        </Snackbar>
      </div>
    </Html>
  );
}

export default Test;
