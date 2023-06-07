import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Html, OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Slider from "react-slick";
import "./events/events.css";
import ObjectFour from "./objects/object_four";
import ObjectOne from "./objects/object_one";
import ObjectThree from "./objects/object_three";
import ObjectTwo from "./objects/object_two";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";


function Museum({reference}) {
  const [obj3d, setObj3d] = useState({
    uno: false,
    dos: false,
    tres: false,
    cuatro: false,
  });

  const canvasRef = useRef();

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      canvasRef.current.requestFullscreen();
    }
  };

  var settings3d = {
    dots: true,
    arrows: true, // Habilitar las flechas
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Html fullscreen style={{ top: "200vh", padding: "2%" }}>

      <div className="titulo" ref={reference}>
        <h1>MUSEO</h1>
      </div>
      <div
        style={{
          position: "relative",
          padding: "2%",
        }}
      >
        <Slider {...settings3d}>
          <Grid
            item
            xs={10}
            sm={4}
            md={2}
            sx={{ margin: "10px", maxWidth: "450px" }}
          >
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Early_Dynastic-es.svg/220px-Early_Dynastic-es.svg.png"
                height="200"
                alt="Card Image"
              />
              <CardContent
                sx={{
                  maxHeight: "200px",
                  overflow: "hidden",
                }}
              >
                <h2>Nombre del objeto</h2>
                <p>breve descripcion</p>
              </CardContent>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setObj3d({ ...obj3d, uno: true })}
                >
                  Conocer más
                </button>
              </div>
            </Card>
          </Grid>

          <Grid
            item
            xs={10}
            sm={4}
            md={2}
            sx={{ margin: "10px", maxWidth: "450px" }}
          >
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Clay_cone_Telloh_Louvre_AO13239.jpg/399px-Clay_cone_Telloh_Louvre_AO13239.jpg"
                height="200"
                alt="Escritura"
              />
              <CardContent
                sx={{
                  maxHeight: "200px",
                  overflow: "hidden",
                }}
              >
                <h2>Object 2</h2>
                <p>desc object 2</p>
              </CardContent>

              <div className="d-grid gap-2">
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setObj3d({ ...obj3d, dos: true })}
                >
                  Conocer más
                </button>
              </div>
            </Card>
          </Grid>

          <Grid
            item
            xs={10}
            sm={4}
            md={2}
            sx={{ margin: "10px", maxWidth: "450px" }}
          >
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image="https://consolaytablero.com/wp-content/uploads/2016/04/juego-real-de-ur.jpg"
                height="200"
                alt="Juego Real de Ur"
              />
              <CardContent
                sx={{
                  maxHeight: "200px",
                  overflow: "hidden",
                }}
              >
                <h2>object 3</h2>
                <p>desc object 3</p>
              </CardContent>

              <div className="d-grid gap-2">
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setObj3d({ ...obj3d, tres: true })}
                >
                  Conocer más
                </button>
              </div>
            </Card>
          </Grid>

          <Grid
            item
            xs={10}
            sm={4}
            md={2}
            sx={{ margin: "10px", maxWidth: "450px" }}
          >
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image="https://ulum.es/wp-content/uploads/2014/10/sumerios.png"
                height="200"
                alt="Numeros Sumerios"
              />
              <CardContent
                sx={{
                  maxHeight: "200px",
                  overflow: "hidden",
                }}
              >
                <h2>object 4</h2>
                <p>desct pbject 4</p>
              </CardContent>

              <div className="d-grid gap-2">
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setObj3d({ ...obj3d, cuatro: true })}
                >
                  Conocer más
                </button>
              </div>
            </Card>
          </Grid>
        </Slider>
      </div>

      <Modal
  show={obj3d.uno}
  size="xl"
  animation
  dialogClassName="modal-fullscreen"
  onHide={() =>
    setObj3d({
      uno: false,
      dos: false,
      tres: false,
      cuatro: false,
    })
  }
>
  <Modal.Header closeButton />
  <Modal.Body>
    <Canvas
      ref={canvasRef}
      className='canvas'
      shadows={true}
      camera={{ position: [-10, 15, 35], fov: 10 }}
    >
      <OrbitControls/>
      <ObjectOne />
    </Canvas>
    {/* 
    <button onClick={toggleFullscreen}>
        Alternar pantalla completa
      </button>
      */}
  </Modal.Body>
</Modal>


      <Modal
        show={obj3d.dos}
        size="xl"
        animation
        dialogClassName="modal-fullscreen"
        onHide={() =>
          setObj3d({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton />
        <Modal.Body>{
          
          <Canvas
      ref={canvasRef}
      className='canvas'
      shadows={true}
      camera={{ position: [-10, 15, 35], fov: 10 }}
    >
      <OrbitControls/>
      <ObjectTwo />
    </Canvas> 
          
          }</Modal.Body>
      </Modal>
      <Modal
        show={obj3d.tres}
        size="xl"
        animation
        dialogClassName="modal-fullscreen"
        onHide={() =>
          setObj3d({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton />
        <Modal.Body>{
          <Canvas
          ref={canvasRef}
          className='canvas'
          shadows={true}
          camera={{ position: [10, -15, 45], fov: 10 }}
        >
          <OrbitControls/>
          <ObjectThree />
        </Canvas> 
          }</Modal.Body>
      </Modal>
      <Modal
        show={obj3d.cuatro}
        size="xl"
        animation
        dialogClassName="modal-fullscreen"
        onHide={() =>
          setObj3d({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton />
        <Modal.Body>{
          <Canvas
          ref={canvasRef}
          className='canvas'
          shadows={true}
          camera={{ position: [10, -15, 45], fov: 10 }}
        >
          <OrbitControls/>
          <ObjectFour />
        </Canvas> 
          }</Modal.Body>
      </Modal>
    </Html>
  );
}

export default Museum;
