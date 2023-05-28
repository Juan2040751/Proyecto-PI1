import React from "react";
import "./events.css";
import { Html } from "@react-three/drei";

function EventOne() {
  return (
    <Html fullscreen style={{ overflow: "auto", maxHeight: "100vh" }}>
      <div className="container">
        <div className="lateral">
          <img
            className="img_lateral"
            src="http://jphurtadoc.com/wp-content/uploads/2023/05/lateral11.jpg"
            alt="Img lateral"
          />
        </div>

        <div className="titulo">
          <h1>Ciudades Sumerias</h1>
        </div>
        <div className="descripcion">
          <img
            className="imagenes"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Early_Dynastic-es.svg/220px-Early_Dynastic-es.svg.png"
            alt="Principales ciudades sumerios"
          />
          <h4>
            Situación de las principales ciudades sumerias y alcance de esta
            cultura durante el período dinástico arcaico.
          </h4>
          <p>
            Sobre el cuarto milenio a.C. se produjo en la Antigua Mesopotamia el
            tránsito de los asentamientos neolíticos a la aparición de las
            primeras ciudades de la Historia. Las ciudades comenzaron a ser el
            centro de actividad principal y sus habitantes comenzaron una
            intensa especialización en el trabajo, de forma que cada persona
            únicamente sabía realizar una actividad. En Mesopotamia las ciudades
            se asentaron en el entorno de los dos grandes ríos Tigris y
            Éufrates. Se crearon cultivos con canales de irrigación, y había
            pequeñas aldeas alrededor de cada gran ciudad. Las ciudades eran
            frecuentemente rivales entre si, y estaban separadas por un terreno
            de nadie, estepario, semiárido, pantanoso o desértico... que era
            aprovechado por los pueblos nómadas para el pastoreo.
          </p>
          <h2>Como se vivía en las ciudades sumerias</h2>
          <p>
            La vida de las ciudades sumerias discurría en torno al templo, ya
            que dominaba la política, la economía y por supuesto la religión de
            la ciudad. El templo poseía tierras, ganado, comerciaba y ofrecía
            trabajo a cambio de tierras o salarios. El sumo sacerdote era
            denominado "En" o "Señor" y se trataba al mismo tiempo de la máxima
            autoridad religiosa y el líder político de la ciudad hasta que en el
            tercer milenio a.C. fue sustituido por el "Ensi" o "Lugal" que
            ostentaba el poder militar y que ya dispone de las características
            de un rey. Las ciudades sumerias se hacían la guerra frecuentemente
            por el dominio de las tierras cultivables lo que hizo surgir una
            nueva organización: el ejército. La distribución del trabajo se
            concretó en la aparición de cuatro grandes grupos sociales que
            vivían en las ciudades: los artesanos, los agricultores, los
            sacerdotes y los soldados.
          </p>
          <h2>Principales ciudades de Mesopotamia</h2>
          <p>
            Algunas de las principales ciudades de la Antigua Mesopotamia
            fueron:
          </p>
          <li>Babilonia</li>
          <li>Sippar</li>
          <li>Ur</li>
          <li>Uruk</li>
          <li>Akshak</li>
          <li>Kish</li>
          <li>Marad</li>
          <li>Isin</li>
          <li>Nippur</li>
          <li>Zabalan</li>
          <li>Shuruppak</li>
          <li>Umma</li>
          <li>Girsu</li>
          <li>Lagash</li>
          <li>Nina</li>
          <li>Bab-Tibira</li>
          <li>Larsa</li>
          <li>Eridu</li>
          <p></p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TQeP8tWtT48"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Html>
  );
}

export default EventOne;
