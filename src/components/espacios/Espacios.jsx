import { createSignal } from "solid-js";
import { spacesapi } from "./espaciosapi";
import styles from "../Components.module.css";
import { Images } from "../images/Images";

function Space ({obj}) {
  return(
    <div class={styles.container}>
      <h4 class={styles.title}>{obj.title}</h4>
      <p><span class={styles.bold}>Fecha:</span> {obj.fecha}</p>
      <p><span class={styles.bold}>Lugar:</span> {obj.lugar}</p>
      <p><span class={styles.bold}>Concepto:</span> {obj.concepto}</p>
      <p><span class={styles.bold}>Misiones:</span> <span innerHTML={obj.misiones}></span></p>
      <p class={styles.bold}>Enlaces:</p> 
      <ul class={styles.ul}>
        {obj.enlaces.map(({id, enlace, text}) => (
          <li key={id}><a href={enlace} target="_blank">{text}</a></li>
        ))}
      </ul>
      {obj.images && (<Images obj={obj} />)}
    </div>
  )
}


export function Espacios () {
  const [showMyrys, setShowMyrys] = createSignal(false);
  const [showLeProyectarium, setShowLeProyectarium] = createSignal(false);
  const [showSpektrum, setShowSpektrum] = createSignal(false);
  const [showGuayaboColective, setShowGuayaboColective] = createSignal(false);
  const [showGairaCafe, setShowGairaCafe] = createSignal(false);
  const [showLaRddx, setShowLaRddx] = createSignal(false);
  const [showQuince16, setShowQuince16] = createSignal(false);
  const [showLaConcha, setShowLaConcha] = createSignal(false);

  function smoothScroll(targetId) {
    const target = document.querySelector(targetId);

    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset - 13,
        behavior: 'smooth'
      });
    }
  }

  const open_Myrys = () => {
    setShowMyrys(prev => !prev);
    smoothScroll("#myrys");
  }

  const open_LeProyectarium = () => {
    setShowLeProyectarium(prev => !prev);
    smoothScroll("#leproyectarium");
  }

  const open_Spektrum = () => {
    setShowSpektrum(prev => !prev);
    smoothScroll("#spektrum");
  }

  const open_GuayaboColective = () => {
    setShowGuayaboColective(prev => !prev);
    setShowLeProyectarium(false);
    setShowSpektrum(false);
    setShowMyrys(false);
    setShowGairaCafe(false);
    setShowLaRddx(false);
    setShowQuince16(false);
    setShowLaConcha(false);
    smoothScroll("#guayabocolective");
  }

  const open_GairaCafe = () => {
    setShowGairaCafe(prev => !prev);
    setShowLeProyectarium(false);
    setShowSpektrum(false);
    setShowGuayaboColective(false);
    setShowMyrys(false);
    setShowLaRddx(false);
    setShowQuince16(false);
    setShowLaConcha(false);
    smoothScroll("#cumbiahouse");
  }

  const open_LaRddx = () => {
    setShowLaRddx(prev => !prev);
    smoothScroll("#larddx");
  }

  const open_Quince16 = () => {
    setShowQuince16(prev => !prev);
    smoothScroll("#quince16");
  }

  const open_LaConcha = () => {
    setShowLaConcha(prev => !prev);
    smoothScroll("#laconcha");
  }

  return(
    <div class={styles.container}>
      <ul>
        <li id="myrys" class={styles.proyecto} onclick={open_Myrys}>Mix'Art Myrys <span class={styles.type}>Asociación de Artistas</span> 2017-2019</li>
        {showMyrys() && (<Space obj={spacesapi.myrys} />)}

        <li id="leproyectarium" class={styles.proyecto} onclick={open_LeProyectarium}>Le Proyectarium <span class={styles.type}>Asociación de Artistas Audiovisuales</span> 2017-2019</li>
        {showLeProyectarium() && (<Space obj={spacesapi.leproyectarium} />)}

        <li id="spektrum" class={styles.proyecto} onclick={open_Spektrum}>Spektrum: art, science & community <span class={styles.type}>Escpacio Artistico</span> 2018</li>
        {showSpektrum() && (<Space obj={spacesapi.spektrum} />)}

        <li id="guayabocolective" class={styles.proyecto} onclick={open_GuayaboColective}>Guayabo Colectivo <span class={styles.type}>Asociación Cultural</span> 2017-2020</li>
        {showGuayaboColective() && (<Space obj={spacesapi.guyabaocolective} />)}

        <li id="cumbiahouse" class={styles.proyecto} onclick={open_GairaCafe}>Gaira Café & Cumbia House <span class={styles.type}>Restaurante-Auditorio</span> 2014-2016</li>
        {showGairaCafe() && (<Space obj={spacesapi.gairacafe} />)}

        <li id="larddx" class={styles.proyecto} onclick={open_LaRddx}>La Redada <span class={styles.type}>Casa Cultural</span> 2011-2016</li>
        {showLaRddx() && (<Space obj={spacesapi.larddx} />)}

        <li id="quince16" class={styles.proyecto} onclick={open_Quince16}>Quince16 <span class={styles.type}>Casa Culturual</span> 2009-2011</li>
        {showQuince16() && (<Space obj={spacesapi.quince16} />)}

        <li id="laconcha" class={styles.proyecto} onclick={open_LaConcha}>Teatro la Concha <span class={styles.type}>Teatro</span> 2023</li>
        {showLaConcha() && (<Space obj={spacesapi.teatrolaconcha} />)}

      </ul>
    </div> 
  );
}