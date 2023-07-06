import React from "react";
import "./events.css";

/**
 * Componente EventThree
 * 
 * Este componente muestra información detallada sobre el Juego Real de Ur,
 * un antiguo juego de mesa jugado en la cultura sumeria. 
 * Pertenece a la historia de usuario PI1-13.
 */
function EventThree() {
  return (
    <div className="container_events">
      <div className="lateral">
        <img
          className="img_lateral"
          loading="lazy"
          src="http://jphurtadoc.com/wp-content/uploads/2023/05/lateral11.jpg"
          alt="Img lateral"
        />
      </div>

      <div className="contenido">

      
      <div className="descripcion">
      <div className="Imagen_desc">
        <img
          className="imagenes"
          loading="lazy"
          src="https://consolaytablero.com/wp-content/uploads/2016/04/juego-real-de-ur.jpg"
          alt="Escritura"
        />
        </div>
        <h4>
          Ejemplar del Juego Real de Ur (2600-2.400 a.C.), en el Museo
          Británico.
        </h4>
        <p>
          En la década de 1920, el arqueólogo británico Leonard Woolley
          descubrió una serie de tumbas en las ruinas de la antigua ciudad
          sumeria de Ur, en el actual Irak. Las sepulturas más ornamentadas del
          hallazgo, que pasarían a conocerse como las Tumbas Reales de Ur,
          contenían toda clase de joyas, vestimenta, armas, cuerpos de
          sirvientes… y hasta un juego de mesa.
          <br />
          <br /> El bautizado como Juego Real de Ur, datado antes del 2600 a.C.,
          es uno de los juegos de mesa más antiguos de la historia junto con el
          senet egipcio. Finalmente quedó eclipsado por el auge del backgammon,
          pero para los sumerios fue un pasatiempo habitual. La presencia de
          tableros en tumbas tendría como fin entretener a los difuntos en el
          más allá.
        </p>
        <h2>Un milenario cruce de caminos</h2>
        <p>
          Como suele suceder en estos casos, las reglas originales de hace más
          de 4.500 años se desconocen. Sí que se ha logrado, gracias a una
          tablilla del siglo II a.C., reconstruir el juego tal y como era dos
          milenios atrás. El objetivo del Juego Real de Ur es introducir siete
          fichas en el tablero, hacer un recorrido por el interior del mismo
          (ver gráfico) y sacar las piezas antes que el rival. El trayecto de
          blancas y negras atraviesa prácticamente las mismas casillas pero en
          sentido opuesto.
        </p>
        <img
        className="imagenes"
          src="https://consolaytablero.com/wp-content/uploads/2016/04/juego-real-de-ur-tablero.jpg"
          loading="lazy"
          alt="ejemplo"
        />
        <p>
          A la izquierda, las casillas especiales; a la derecha, el recorrido de
          las piezas.
          <br />
          <br />
          El tablero consiste en dos plataformas de 4×3 y 2×3 casillas unidas
          por un puente central de dos espacios. Los ejemplares hallados
          presentan una serie de casillas decoradas que tienen una función
          especial:
          <br />
          <br /> <b>- Casilla inicial: </b> Blancas y negras introducen sus
          fichas en el juego desde su respectiva posición. En el tablero puede
          haber al mismo tiempo el número de piezas que se quiera. <br />
          <br /> <b>- Puente:</b> El puente protege de las capturas pero, como
          en las casillas normales, sólo se admite una ficha por casilla.
          <br />
          <br /> <b>- Seguro:</b> A diferencia de las casillas normales, en los
          seguros ni se puede capturar ni hay límite de capacidad. Puede
          albergar un número indeterminado de fichas.
          <br />
          <br /> Las fichas avanzan en función de la tirada de dados, y capturan
          si la tirada les permite caer en una casilla ocupada por el rival.
          Como en el parchís, las piezas capturadas salen del tablero y tendrán
          que volver a comenzar su recorrido partiendo de cero. <br />
          <br />
          Ahora bien, lo que caracteriza al Juego Real de Ur es la presencia de
          tres dados piramidales de base triangular que se lanzan en cada turno.
          Dos de los vértices de cada dado están pintados de rojo, y los otros
          dos de blanco, teniéndose en cuenta el que quede en la parte superior.
          Esto ofrece las siguientes posibilidades:
          <br />
          <br />
          <b>- Tres vértices rojos: </b> equivale a un 5, y proporciona un turno
          extra. Puede utilizarse para introducir una ficha en la casilla
          inicial. <br />
          <br />
          <b>- Tres vértices blancos:</b> equivale a un 4, y proporciona un
          turno extra. Puede utilizarse para introducir una ficha en la casilla
          inicial. <br />
          <br />
          <b> - Dos vértices blancos:</b> supone perder el turno.
          <br />
          <br />
          <b> - Un vértice blanco: </b> equivale a un 1, pero no proporciona
          turno extra. <br />
          <br />
          Las piezas van avanzando hasta llegar a la última casilla, no
          necesariamente con la tirada exacta. A partir de ese momento, cada
          ficha ‘finalista’ permanece ahí hasta que una tirada de 4 o de 5 sea
          canjeada para sacarla del juego. Gana el jugador que extraiga de este
          modo a sus siete unidades.
        </p>
        <h2>Componentes del Juego Real de Ur</h2>
        <p>
          - 14 fichas (7 blancas y 7 negras)
          <br />
          <br />
          - 3 Dados piramidales
          <br />
          <br />- Tablero
        </p>
        <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iagUz430-eQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        </div>
      </div>
      </div>
    </div>
  );
}

export default EventThree;
