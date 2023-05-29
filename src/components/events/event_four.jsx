import React from "react";
import "./events.css";

function EventFour() {
  return (
    <div className="container">
      <div className="lateral">
        <img
          className="img_lateral"
          src="http://jphurtadoc.com/wp-content/uploads/2023/05/lateral11.jpg"
          alt="Img lateral"
        />
      </div>

      <div className="titulo">
        <h1>Sistema Númerico</h1>
      </div>
      <div className="descripcion">
        {/* <img
          className="imagenes"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Clay_cone_Telloh_Louvre_AO13239.jpg/399px-Clay_cone_Telloh_Louvre_AO13239.jpg"
          alt="Escritura"
        /> */}
        <p>
          Uruk fue una antigua ciudad sumeria. Se encontraba en la orilla del
          río Éufrates y vivió su máximo esplendor en el tercer milenio antes de
          Cristo. Una de sus características más llamativas era su muralla, que
          rodeaba una zona de unos siete kilómetros cuadrados donde vivían
          ochenta mil personas. Es decir, era la mayor ciudad que el mundo había
          conocido hasta entonces. <br />
          <br />
          Se considera que en Uruk nació el cálculo y la contabilidad, y no solo
          eso, sino que también apareció por primera vez la rueda y la escritura
          en torno al año 3 300 a. C. De hecho, allí se escribió el Poema de
          Gilgamesh, que es una de las primeras obras literarias que se
          conservan. <br />
          <br />
          El Imperio Babilonio que se estableció siglos después en la zona fue
          el heredero cultural de la civilización sumeria, y se extendió por
          toda la región central de Mesopotamia. La historia que voy a contar
          ocurrió allí y comienza con un número al cual también se enfrentarían
          siglos después los hindúes, el cero.
        </p>
        <h2>Sesenta números diferentes</h2>
        <p>
          Los sumerios fueron el primer pueblo conocido en inventar un sistema
          numeral posicional, el cual heredarían a su vez los babilonios. No
          obstante, su sistema era diferente al nuestro y no se basaba en diez
          números, sino en sesenta. Es decir, los sumerios utilizaban cincuenta
          y nueve símbolos para formar los primeros números, pero a partir del
          sesenta utilizaban repeticiones de símbolos anteriores, siendo la
          posición de las cifras la que definía la cantidad exacta.
        </p>
        <img
          className="imagenes"
          src="https://ulum.es/wp-content/uploads/2014/10/sumerios.png"
          alt="Numeros Sumerios"
        />
        <h4>
          Figura 1. Números del uno al 60 en el sistema numeral sumerio. El
          número 60, como se puede observar, reinicia el ciclo de generación de
          números a partir de los 59 caracteres básicos. Ilustración hecha por
          @marianocollante
        </h4>

        <p>
          Viendo esto, uno podría preguntarse por qué utilizar sesenta números.
          Los hindúes y los chinos usaban diez por los dedos de las manos, pero
          ¿por qué sesenta? La respuesta también está en nuestras extremidades,
          que parecen haber inspirado el surgimiento de la numeración en casi
          todas las culturas. <br />
          <br /> Los sumerios utilizaban el dedo gordo para señalar las
          diferentes falanges de los cuatro dedos restantes de esa mano,
          empezando por el meñique. Cuando habían contado todas las falanges
          levantaban un dedo de la otra mano y volvían a empezar. Los sumerios
          contaban doce falanges por cada mano, y en la otra solo tenían cinco
          dedos para levantar. Así obtenemos la clave del origen de su sistema
          sexagesimal, ya que doce falanges por cinco dedos levantados son igual
          a sesenta.
        </p>
        <img
          className="imagenes"
          src="https://ulum.es/wp-content/uploads/2014/10/tmano-sumeria.jpg"
          alt="Sistema de conteo con la mano"
        />
        <h4>
          Figura 2. Esquematización de cómo contaban los sumerios utilizando las
          falanges de una mano. Ilustración hecha por @marianocollante
        </h4>
        <h2>Algunos ejemplos de construcciones numéricas</h2>
        <p>
          El sistema sumerio presentaba problemas, ya que algunos números podían
          escribirse igual al cambiar de un grupo de sesenta números al
          siguiente, algo parecido a lo que les pasaría a los hindúes más de dos
          milenios después. <br />
          <br /> En la historia de la humanidad, algunas civilizaciones han
          encontrado soluciones parecidas a los mismos problemas, así que los
          escribas sumerios se dieron cuenta —al igual que lo harían los
          hindúes— de que había que dejar un espacio vacío entre algunos números
          para diferenciarlos, del mismo modo que nosotros diferenciamos el 68
          del 608 utilizando un cero. <br />
          <br /> Los sumerios solucionaron su problema dejando un hueco entre
          los números, pero cada uno dejaba una distancia diferente, y lo que
          era un hueco podía confundirse fácilmente con dos. Cuando se dieron
          cuenta de que no se podía utilizar un espacio vacío, se inventó un
          apóstrofe para mostrar la ausencia de número. Ese símbolo era una
          aproximación a una de las dos funciones que tiene nuestro cero, en
          concreto la función posicional. Pongamos un ejemplo.
        </p>
        <img
          src="https://ulum.es/wp-content/uploads/2014/10/tabla.jpg"
          alt=""
        />
        <p>
          La primera posición está ocupada por el símbolo que significaría tres
          en nuestro sistema numérico. La primera posición indica que no hay que
          multiplicar ese número, es decir, 3 = 3. La segunda posición está
          ocupada por un apóstrofe, lo cual significa que no existe ningún
          número, aunque de haber habido alguna cantidad tendríamos que
          multiplicarla por sesenta. La tercera posición del número está ocupada
          por un dos, así que habría que multiplicar ese valor dos veces por
          sesenta, es decir, 2 x 3 600 = 7 200. Si sumamos todas las posiciones
          obtenemos el número en cuestión, que es el 7 203. <br />
          <br /> Puede que el lector piense que es una forma muy extraña de
          representar números, pero tal cual vimos anteriormente nosotros lo
          hacemos exactamente igual. Observemos el proceso lógico que usaríamos
          nosotros para escribir el mismo número.
        </p>
        <img
          src="https://ulum.es/wp-content/uploads/2014/10/1-copia.jpg"
          alt=""
        />
        <p>
          En este caso, la primera posición indicaría que no hay que multiplicar
          esa cifra, es decir, <b>3 = 3</b>. La segunda posición está ocupada
          por un cero, esto indicaría que no hay ningún número, aunque de
          haberlo tendríamos que multiplicarlo por diez. La tercera posición la
          ocupa un dos, eso significaría <b>2 x 100 = 200</b>. Y la cuarta
          posición es un siete, lo que es equivalente a <b>7 x 1 000 = 7 000</b>
          . Si lo sumamos todo obtenemos <b>7 203</b> . Nuestra forma de
          construir números, como podemos observar, es muy parecida a la de los
          sumerios.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YsmXGHxhbhw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default EventFour;
