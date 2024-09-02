import "../css/About.css";
//@ts-ignore
import demo from "../assets/ITAO-demo.wav";
import kitten from "../assets/kitten.jpg"

export default function About() {
  return (
    <div className="aboutBoxConatiner" >
      <div className="titleContainer" >
        <h2>Ruina</h2>
      </div>
      {/* <img className="kittenImage" src={kitten} alt="kitten" /> */}
      {/* <img src={kitten} alt="kitten" /> */}
      <div className="aboutBox" >
        <hr />
        <div className="infoContainer" id="about">
          <span><b>Ruina</b> es una banda de rock alternativo. También exploramos géneros como garage, post-punk, y shoegaze. Con influencias de bandas como Radiohead, The Strokes, Deftones, Sonic Youth, etc.</span>
        </div>

        <div className="infoContainer">
          <span>Nos encontramos en la etapa de grabar nuestro primer EP, el cual tenemos planeado lanzar a finales de 2024. Este EP consiste (idealmente) en 5 temas. Estamos cerrando los demos y conceptos de las canciones, estimamos terminar con la preproduccion para mediados de noviembre.</span>
          <span>Tenemos planeado lanzarlo a principios del año que viene.</span>
          <br />
          <span>Si bien ya hay varios demos armados y tenemos definida la estructura de la mayoria de los temas, <b>la banda se encuentra en proceso de formacion.</b></span>
          <br />
          <span>En terminos de sonido buscamos que suene a una combinacion de The Bends/Is This It/Saturday Night Wrist</span>
        </div>
      </div>
      <div className="backgroundBottom"></div>
      <div className="aboutBox2">
          <div className="infoContainer">
            <h3>SE BUSCA VOCALISTA!</h3>
            <span>Actualmente, la banda se encuentra en la búsqueda de un <b>vocalista</b> que quiera unirse.</span>
            <span>Unicos requisitos: Edad entre 18 y 30 años, Disponibilidad para ensayar al menos una vez por semana.</span>
            <span>Mas alla de eso, buscamos gente que se comprometa y se la banque, que le guste el genero y que tenga ganas de tocar.</span>
            <br />
            <h3>CONTACTO</h3>
            <span>Si te interesa podes contactarnos por Instagram a <a href="https://www.instagram.com/ruina.banda/" target="_blank" rel="noreferrer">@ruina.banda</a>, o podes enviarnos un mail a <i>ruinabanda2000@gmail.com</ i>. Para esto ultimo enviar en el asunto: "Vocalista - [Tu nombre]", y dejanos tu ig en el mensaje para que nos podamos contactar.</span>
            <span>La idea es que nos envies un mensaje contandonos un poco de vos: cuánto tiempo llevas tocando, tres bandas que te gusten, a qué te dedicas, etc (Lo que se te ocurra que te parezca interesante contar). Tambien  pueden enviar videos o audios ver como cantan.</span>
          </div>
          {/* <div className="infoContainer">
            <h3>BUSCAMOS MUSICOS!</h3>
            <span>Actualmente, estamos en la búsqueda de un <b>baterista</b> y un <b>bajista</b> que quieran unirse a nuestra banda.</span>
            <span>Unicos requisitos: Edad entre 18 y 30 años, Disponibilidad para ensayar al menos una vez por semana.</span>
            <span>Mas alla de eso, buscamos gente que se comprometa y se la banque, que le guste el genero y que tenga ganas de tocar.</span>
            <br />
            <h3>CONTACTO</h3>
            <span>Si te interesa podes contactarnos por Instagram a <a href="https://www.instagram.com/ruina.banda/" target="_blank" rel="noreferrer">@ruina.banda</a>, o podes enviarnos un mail a <i>ruinabanda2000@gmail.com</ i>. Para esto ultimo enviar en el asunto: "[Instrumento que tocas] - [Tu nombre]", y dejanos tu ig en el mensaje para que nos podamos contactar.</span>
            <span>La idea es que nos envies un mensaje contandonos un poco de vos: cuánto tiempo llevas tocando, tres bandas que te gusten, a qué te dedicas, etc (Lo que se te ocurra que te parezca interesante contar). Tambien  pueden enviar videos o audios ver como tocan.</span>
          </div> */}

          <div className="infoContainer">
            <h3>SONIDO</h3>
            <span>A continuación dejamos una de las pocas demos que tenemos para que puedan escuchar el sonido. Es un cover de <a href="https://www.youtube.com/watch?v=pjmaj-wtAPs" target="blank" rel="noreferrer">I'll Try Anything Once</a></span>
          </div>
          <div className="audioContainer">
            <audio controls src={demo}></audio>
          </div>
        </div> 
    </div>
  );
}