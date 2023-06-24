import React from "react";
import "./events.css";

/**
 * Componente Characters
 *
 * Este componente muestra información detallada sobre la escritura cuneiforme,
 * uno de los logros más destacados de la cultura sumeria. Incluye una descripción,
 * imágenes, videos y ejemplos de escritura cuneiforme.
 * Pertenece a la historia de usuario PI1-13.
 */
function Characters() {
  return (
    <div className="container_events">
      <div className="lateral">
        <img className="img_lateral" loading="lazy" alt="lateral" />
      </div>

      <div className="contenido">
        <div className="descripcion">
          <h1 className="titulo">Tabla de contenido</h1>
          <nav id="NavegacionPersonajes">
            <ul>
              <li>
                <a className="a-class" href="#Gilgamesh">
                  Gilgamesh
                </a>
              </li>
              <li>
                <a className="a-class" href="#Adapa">
                  Adapa
                </a>
              </li>
              <li>
                <a className="a-class" href="#Enkidu">
                  Enkidu
                </a>
              </li>
              <li>
                <a className="a-class" href="#Inanna">
                  Inanna
                </a>
              </li>
            </ul>
          </nav>
          <section id="Gilgamesh">
            {/* Información Gilgamesh */}
            <h1 className="titulo">Gilgamesh</h1>
            <div className="Imagen_desc">
              <img
                className="imagenes"
                src="https://historia.nationalgeographic.com.es/medio/2018/02/28/figura-de-gilgamesh-en-el-museo-del-louvre__1280x2987.jpg"
                alt="Escritura"
                loading="lazy"
              />
            </div>
            <p>
              Gilgamesh perteneció a la dinastía I de Uruk: fue su quinto
              soberano, reinó 126 años y le sucedió su hijo Ur-lugal. A
              Gilgamesh se le atribuía la construcción de las poderosas murallas
              de la ciudad, según menciona una inscripción del rey Anam de Uruk,
              datada hacia 1825 a.C., y según recuerda también el Poema. Dichas
              murallas eran de estructura doble: una exterior, de la que tan
              sólo restan trazas en el suelo, y otra interior, de unos 9,5
              kilómetros de longitud y cinco metros de espesor, reforzada con
              más de 900 torres semicirculares. Sin-leqi-unnini organizó el
              Poema en once cantos o tablillas.
            </p>
          </section>
          <section id="Adapa">
            {/* Información Adapa */}
            <h1 className="titulo">Adapa</h1>
            <div className="Imagen_desc">
              <img
                className="imagenes"
                src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/19437228_542865415884230_4933526254045809215_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=106&ccb=1-7&_nc_sid=2d5d41&_nc_ohc=wia7plgRLyUAX93j7gp&_nc_ht=scontent-lga3-1.xx&oh=00_AfBJtlmllqxw_1QveWtctVB4Snh62o8tlQFNm8y8Je142w&oe=64B80EF8"
                alt="Escritura"
                loading="lazy"
              />
            </div>
            <p>
              Adapa, el primero de los Siete Sabios mesopotámicos, fue una
              figura mítica que, sin saberlo, se negó a recibir el don de la
              inmortalidad. La historia, comúnmente conocida como "Adapa y el
              Viento del Sur" está atestiguada por primera vez en el período
              casita (siglo XIV a. C.) en tablillas fragmentarias de Tell
              el-Amarna, así como en la biblioteca de Asurbanipal, en la Asiria
              del siglo VII a.C. El mito mesopotámico habla de siete sabios
              antediluvianos que fueron enviados por Enki, el sabio dios de
              Eridu, para traer las artes de la civilización a la humanidad. El
              primero de ellos, Adapa (Adán), también conocido como Uan, llamado
              Oannes por Beroso, introdujo la práctica de los correctos ritos
              religiosos como sacerdote del templo del Apsu en Eridu. <br /> Los
              sabios se describen en la literatura mesopotámica como
              peces-parādu, probablemente la carpa, cuyas espinas se han
              encontrado asociadas con la primera capilla de Eridu. Adapa como
              pescador fue retratado después iconográficamente como un hombre
              pez. La palabra Abgallu, sabio (Ab = agua, Gal = grande, Lu =
              hombre, en sumerio) sobrevivió hasta tiempos nabateos, alrededor
              del siglo i, como apkallum, utilizada para describir un cierto
              tipo de sacerdote exorcista.1​
            </p>
          </section>
          <section id="Enkidu">
            {/* Información Enkidu */}
            <h1 className="titulo">Enkidu</h1>
            <div className="Imagen_desc">
              <img
                className="imagenes"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Enkidu%2C_Gilgamesh%27s_friend._From_Ur%2C_Iraq%2C_2027-1763_BCE._Iraq_Museum.jpg/220px-Enkidu%2C_Gilgamesh%27s_friend._From_Ur%2C_Iraq%2C_2027-1763_BCE._Iraq_Museum.jpg"
                alt="Escritura"
                loading="lazy"
              />
            </div>
            <p>
              Enkidu fue un personaje principal del Poema de Gilgamesh. La
              historia dice que Gilgamesh era un rey muy severo. Los habitantes
              de la ciudad piden a los dioses ayuda con esto, entonces
              Ninhursag, crea a Enkidu. <br /> Enkidu es un hombre salvaje, vive
              entre bestias y libera a los animales de sus trampas, esto molesta
              a los cazadores de Uruk y pronto Gilgamesh sabe sobre este hombre
              salvaje. El rey, envía a Shamhat, la prostituta del templo, a que
              se encargue de él. Shamhat se acuesta con él y luego lo civiliza,
              le enseña las costumbres humanas y lo viste como ciudadano. <br />{" "}
              Sin embargo, Enkidu no olvida su propósito y va al palacio a
              luchar contra Gilgamesh, pero el rey es más fuerte y gana la
              batalla. Aun así, ambos se transforman en buenos amigos. La
              amistad es tanta, que incluso la madre de Gilgamesh, Ninsun, lo
              adopta. <br /> Ambos van en busca de la gloria y deciden asesinar
              al gigante Humbaba, lo cual logran con la ayuda del Dios Shamash.
              De vuelta en Uruk, luego de que Gilgamesh rechazara a la Diosa
              Ishtar, los dos héroes deben enfrentarse a Gugalanna, el toro de
              los cielos, al cual asesinan y ofrecen como tributo al Dios Sol.{" "}
              <br /> Por el asesinato de Humbaba y Gugalanna, y por las ofensas
              a Ishtar, los Dioses deciden que uno de los dos debe morir, el
              elegido es Enkidu. En su lecho de muerte, Enkidu maldice a
              Shamhat, por haberlo civilizado, pero Shamash le dice que no
              desprecie su ayuda, por lo que Enkidu se retracta de sus palabras
              y muere en paz. <br /> Gilgamesh está devastado por la muerte de
              su amigo y le rinde grandes honores en la ciudad. <br /> Según
              otra extraña tablilla, Enkidu debe bajar al inframundo en busca de
              las armas de Gilgamesh, pero está tablilla no parece tener
              relación con el resto del Poema.
            </p>
          </section>

          <section id="Inanna">
            {/* Información Inanna */}
            <h1 className="titulo">Inanna</h1>
            <div className="Imagen_desc">
              <img
                className="imagenes"
                src="https://www.worldhistory.org/img/r/p/1000x1200/2636.gif.webp?v=1661653689"
                alt="Escritura"
                loading="lazy"
              />
            </div>
            <p>
              Inanna es la antigua diosa sumeria del amor, la sensualidad, la
              fertilidad, la procreación y también de la guerra. Más tarde, los
              acadios y los asirios la identificaron como la diosa Ishtar, y
              también con la hitita Sauska, la fenicia Astarté y la griega
              Afrodita, entre muchas otras. <br /> También se la veía como la
              estrella brillante de la mañana y la tarde, Venus, y se la
              identificaba con la diosa romana. Inanna es una de las candidatas
              citadas como sujeto del Relieve de Burney (más conocido como La
              Reina de la Noche), un relieve de terracota que data del reinado
              de Hammurabi de Babilonia (que reinó de 1792 a 1750 a.C.), aunque
              es más probable que sea su hermana Ereshkigal la diosa
              representada. <br /> En algunos mitos es hija de Enki, el dios de
              la sabiduría, el agua dulce, la magia y otros elementos y aspectos
              de la vida, mientras que en otros aparece como hija de Nanna, dios
              de la luna y la sabiduría, pero la mayoría de las veces se la
              representa como nieta de Enlil y sobrina de Enki. Como hija de
              Nanna, era la hermana gemela del dios del sol Utu/Shamash. Su
              poder y provocación es casi siempre una característica que la
              define en cualquiera de las historias que se cuentan de ella.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Characters;
