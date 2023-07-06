import { Alert, Button, Skeleton, Snackbar } from "@mui/material";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./events/events.css";
import axios from "axios";
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
  const [loading, setLoading] = useState(false);
  const [openFeedback, setOpenFeedback] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [answerShown, setAnswerShown] = useState(false);
  const { width } = useThree((state) => state.viewport);
  const [feedback, setFeedback] = useState({ message: "", state: "info" });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenFeedback(false);
  };
  const button = document.getElementById(
    session?.answers["answer" + (lastCard + 1)]
  );
  useEffect(() => {
    if (lastCard && !isAnswerSelected && !loading) {
      setPreguntaActual(lastCard);

      if (lastCard < 5) {
        setOpenFeedback(true);
        const isCorrect =
          session?.questions[lastCard].answer ===
          session?.answers["answer" + (lastCard + 1)];
        if (button) {
          button.classList.add(isCorrect ? "correct" : "incorrect");
          setIsAnswerSelected(true);
          if (isCorrect) {
            setFeedback({
              ...feedback,
              message: "¡Respuesta correcta!",
              state: "success",
            });
          } else {
            setFeedback({
              ...feedback,
              message:
                "La respuesta es incorrecta. La opción correcta era: " +
                session?.questions[lastCard].options[
                  session?.questions[lastCard].answer
                ],
              state: "error",
            });
          }
        }
      }
    }
  }, [lastCard, button]);
  function handleAnswerSubmit(isCorrect, e, optionSelected, index, correctOpt) {
    setOpenFeedback(true);
    if (isCorrect) {
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
      Evaluacion: session.Evaluacion < 4 ? session.Evaluacion + 1 : 4,
      lastPage: "Evaluacion",
      answers: { ...session.answers, [`answer${index}`]: optionSelected },
    });

    setIsAnswerSelected(true);
  }

  function handlerNextQuestion() {
    setOpenFeedback(false);
    if (presguntaActual === questions?.length - 1) {
      let correctAnswersCount = 0;
      for (let i = 0; i < 5; i++) {
        if (
          session?.questions[i].answer === session?.answers["answer" + (i + 1)]
        )
          correctAnswersCount++;
      }
      setPuntuacion(correctAnswersCount);
      setIsFinished(true);
    } else {
      setPreguntaActual(presguntaActual + 1);
      setIsAnswerSelected(false);
    }
  }

  async function handleRestartTest() {
    setLoading(true);
    const previous = answerShown ? "answer" : "finish";
    setAnswerShown(false);
    setIsFinished(false);
    setPreguntaActual(0);
    setIsAnswerSelected(false);
    setOpenFeedback(false);
    await axios
      .put("http://localhost:8000/usuarios/sesion", {
        ...session,
        Evaluacion: 5,
        lastPage: "Evaluacion",
      })
      .then(({ data }) => {
        const { session } = data;
        localStorage.setItem("session", JSON.stringify(session));
        setSession(session);
      })
      .catch((error) => {
        console.log(error);
        console.log("heyyyyy");
        if (previous === "answer") {
          setAnswerShown(true);
          setPreguntaActual(4);
        } else {
          setIsFinished(true);
        }
      });
    setLoading(false);
  }

  if (answerShown) {
    return (
      <Html
        fullscreen
        style={{
          top: width > 13.2 ? "500vh" : width > 7.92 ? "600vh" : "650vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="titulo" ref={reference} id="Evaluacion">
          <h1>Evaluacion</h1>
        </div>
        <div className="test" style={{ position: "relative" }}>
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
              {presguntaActual === questions?.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ReplayIcon />}
                  onClick={handleRestartTest}
                >
                  Volver a jugar
                </Button>
              ) : (
                <button
                  className="btn btn-outline-primary w-30 mb-3"
                  onClick={() => {
                    setPreguntaActual(presguntaActual + 1);
                  }}
                >
                  Siguiente
                </button>
              )}
            </div>
          </div>
        </div>
      </Html>
    );
  }

  if (isFinished) {
    return (
      <Html
        fullscreen
        style={{
          top: width > 13.2 ? "500vh" : width > 7.92 ? "600vh" : "650vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="titulo" ref={reference} id="Evaluacion">
          <h1>Evaluacion</h1>
        </div>
        <div className="test" style={{ position: "relative" }}>
          <div className="juego-terminado">
            <span>
              {" "}
              Obtuviste {puntuacion} de {questions?.length}{" "}
            </span>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ReplayIcon />}
              onClick={handleRestartTest}
            >
              Volver a jugar
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<VisibilityIcon />}
              onClick={() => {
                setIsFinished(false);
                setAnswerShown(true);
                setPreguntaActual(0);
              }}
            >
              Ver respuestas
            </Button>
          </div>
        </div>
      </Html>
    );
  }
  return (
    <Html
      fullscreen
      style={{
        top: width > 13.2 ? "500vh" : width > 7.92 ? "600vh" : "650vh",
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
            {loading ? (
              <Skeleton
                animation="wave"
                width={305}
                height={70}
                variant="text"
                sx={{ fontSize: "1rem" }}
              />
            ) : (
              questions[presguntaActual]?.utterance
            )}
          </div>
          <div>
            {!isAnswerSelected ? (
              <span className="pista">
                Pista:{" "}
                {loading ? (
                  <Skeleton
                    width={100}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                ) : (
                  questions[presguntaActual]?.feedback
                )}
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
                ([opt, option], index) =>
                  loading ? (
                    <Skeleton
                      key={option}
                      variant="rounded"
                      width={300}
                      height={40}
                    />
                  ) : (
                    <button
                      className="button-test"
                      key={option}
                      id={"opt" + (index + 1)}
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
