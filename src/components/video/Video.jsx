import { createSignal } from "solid-js";
import styles from "../Components.module.css";
import { videosApi } from "./videoapi";
import { Images } from "../images/Images";

function VideoProjects({ obj }) {
  return (
    <div class={styles.container}>
      <div class={styles.pc}>
        <h4 class={styles.title}>{obj.title}</h4>
        <p>
          <span class={styles.bold}>Fecha:</span> {obj.fecha}
        </p>
        <p>
          <span class={styles.bold}>Lugar:</span> {obj.lugar}
        </p>
        <p>
          <span class={styles.bold}>Cargo desempeñado:</span> {obj.cargo}
        </p>
        {obj.equipo && (
          <>
            <p>
              <span class={styles.bold}>Equipo:</span>
            </p>
            <ul class={styles.ul}>
              {obj.equipo.map(({ id, nombre, cargo }) => (
                <li key={id} class={styles.list}>
                  {cargo}: {nombre}
                </li>
              ))}
            </ul>
          </>
        )}
        <p>
          <span class={styles.bold}>Concepto:</span> {obj.concepto}
        </p>
        {obj.misiones && (
          <p>
            <span class={styles.bold}>Misiones:</span> {obj.misiones}
          </p>
        )}
        {obj.duracion && (
          <p>
            <span class={styles.bold}>Duración:</span> {obj.duracion}
          </p>
        )}
        {obj.aforo && (
          <p>
            <span class={styles.bold}>Asistencia:</span> {obj.aforo}
          </p>
        )}
        {obj.reconocimientos && (
          <p>
            <span class={styles.bold}>Reconocimientos:</span>{" "}
            {obj.reconocimientos}
          </p>
        )}
        {obj.apoyo && (
          <p>
            <span class={styles.bold}>Con el apoyo de:</span> {obj.apoyo}
          </p>
        )}
        {obj.enlaces && (
          <>
            <p class={styles.bold}>Enlaces:</p>
            <ul class={styles.ul}>
              {obj.enlaces.map(({ id, enlace, text }) => (
                <li key={id}>
                  <a href={enlace} target="_blank">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
        {obj.video && <div innerHTML={obj.video}></div>}
        {obj.images && <Images obj={obj} />}
      </div>
    </div>
  );
}

export function Video() {
  const [showRioRadio, setShowRioRadio] = createSignal(false);
  const [showPinkParadize, setShowPinkParadize] = createSignal(false);
  const [showDerKirchgarten, setShowDerKirchgarten] = createSignal(false);
  const [showDieOriginale, setShowDieOriginale] = createSignal(false);
  const [showLPM, setShowLPM] = createSignal(false);
  const [showStreetPack, setShowStreetPack] = createSignal(false);
  const [showNuitMusees, setShowNuitMusees] = createSignal(false);
  const [showEcosCol, setShowEcosCol] = createSignal(false);
  const [showAvInstall, setShowAvInstall] = createSignal(false);
  const [showVjPanthera, setShowVjPanthera] = createSignal(false);
  const [showGuayaBros, setShowGuayaBros] = createSignal(false);
  const [showCaliwood, setShowCaliwood] = createSignal(false);
  const [showEsteroPicnic, setShowEstereoPicnic] = createSignal(false);
  const [showImputaciones, setShowImputaciones] = createSignal(false);
  const [showFamiaSuto, setShowFamiaSuto] = createSignal(false);
  const [showAtusombra, setShowAtusombra] = createSignal(false);
  const [showEncarnacion, setShowEncarnacion] = createSignal(false);

  function smoothScroll(targetId) {
    const target = document.querySelector(targetId);

    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset - 13,
        behavior: "smooth",
      });
    }
  }

  const open_RioRadio = () => {
    setShowRioRadio((prev) => !prev);
    smoothScroll("#rioradio");
  };

  const open_PinkParadize = () => {
    setShowPinkParadize((prev) => !prev);
    smoothScroll("#pinkparadize");
  };

  const open_DerKirchgarten = () => {
    setShowDerKirchgarten((prev) => !prev);
    smoothScroll("#derkirschgarten");
  };

  const open_DieOriginale = () => {
    setShowDieOriginale((prev) => !prev);
    smoothScroll("#dieoriginale");
  };

  const open_lpm = () => {
    setShowLPM((prev) => !prev);
    smoothScroll("#lpm");
  };

  const open_StreetPack = () => {
    setShowStreetPack((prev) => !prev);
    smoothScroll("#streetpack");
  };

  const open_NuitMusees = () => {
    setShowNuitMusees((prev) => !prev);
    smoothScroll("#nuitdesmusees");
  };

  const open_EcosCol = () => {
    setShowEcosCol((prev) => !prev);
    smoothScroll("#ecosdecolombia");
  };

  const open_AvInstall = () => {
    setShowAvInstall((prev) => !prev);
    smoothScroll("#avinstall");
  };

  const open_VjPanthera = () => {
    setShowVjPanthera((prev) => !prev);
    smoothScroll("#vjpanthera");
  };

  const open_GuayaBros = () => {
    setShowGuayaBros((prev) => !prev);
    smoothScroll("#guayabobros");
  };

  const open_Caliwood = () => {
    setShowCaliwood((prev) => !prev);
    smoothScroll("#caliwoodrmx");
  };

  const open_EsteroPicnic = () => {
    setShowEstereoPicnic((prev) => !prev);
    smoothScroll("#esteropicnic");
  };

  const open_Imputaciones = () => {
    setShowImputaciones((prev) => !prev);
    smoothScroll("#imputaciones");
  };

  const open_FamiaSuto = () => {
    setShowFamiaSuto((prev) => !prev);
    smoothScroll("#famiasuto");
  };

  const open_Encarnacion = () => {
    setShowEncarnacion((prev) => !prev);
    smoothScroll("#atusombra");
  };

  const open_Atusombra = () => {
    setShowAtusombra((prev) => !prev);
    smoothScroll("#encarnacion");
  };

  return (
    <div class={styles.container}>
      <ul>
        <li id="rioradio" class={styles.proyecto} onclick={open_RioRadio}>
          Río/Radio: Correspondencia anfibia{" "}
          <span class={styles.type}>AV Performance</span> 2021
        </li>
        {showRioRadio() && <VideoProjects obj={videosApi.la_magdalena} />}

        <li
          id="pinkparadize"
          class={styles.proyecto}
          onclick={open_PinkParadize}
        >
          Pink Paradize Festival{" "}
          <span class={styles.type}>Video Performance</span> 2019
        </li>
        {showPinkParadize() && <VideoProjects obj={videosApi.pink_paradize} />}

        <li
          id="derkirschgarten"
          class={styles.proyecto}
          onclick={open_DerKirchgarten}
        >
          Der Kirschgarten <span class={styles.type}>Teatro Contemporaneo</span>{" "}
          2018
        </li>
        {showDerKirchgarten() && (
          <VideoProjects obj={videosApi.der_kirchgarten} />
        )}

        <li
          id="dieoriginale"
          class={styles.proyecto}
          onclick={open_DieOriginale}
        >
          Die Originale <span class={styles.type}>Circo Contemporaneo</span>{" "}
          2018
        </li>
        {showDieOriginale() && <VideoProjects obj={videosApi.die_originale} />}

        <li id="lpm" class={styles.proyecto} onclick={open_lpm}>
          LPM Live Mapping Contest{" "}
          <span class={styles.type}>Video-Mapping</span> 2018
        </li>
        {showLPM() && <VideoProjects obj={videosApi.lpm2018} />}

        <li id="streetpack" class={styles.proyecto} onclick={open_StreetPack}>
          Street Pack Festival <span class={styles.type}>Video-Mapping</span>{" "}
          2017-2018-2019
        </li>
        {showStreetPack() && <VideoProjects obj={videosApi.street_pack} />}

        <li
          id="nuitdesmusees"
          class={styles.proyecto}
          onclick={open_NuitMusees}
        >
          La Nuit Européenne des Musées{" "}
          <span class={styles.type}>Video-Mapping</span> 2018-2019
        </li>
        {showNuitMusees() && <VideoProjects obj={videosApi.lanuiteedm2019} />}

        <li id="ecosdecolombia" class={styles.proyecto} onclick={open_EcosCol}>
          Ecos de Colombia <span class={styles.type}>AV Performance</span> 2018
        </li>
        {showEcosCol() && <VideoProjects obj={videosApi.ecos_col} />}

        <li id="avinstall" class={styles.proyecto} onclick={open_AvInstall}>
          AV Instalation{" "}
          <span class={styles.type}>Instalación Interactiva</span> 2017
        </li>
        {showAvInstall() && <VideoProjects obj={videosApi.avinstalation} />}

        <li id="vjpanthera" class={styles.proyecto} onclick={open_VjPanthera}>
          VJ Panthera <span class={styles.type}>VJing</span> 2013-2018
        </li>
        {showVjPanthera() && <VideoProjects obj={videosApi.vjpanthera} />}

        <li id="guayabobros" class={styles.proyecto} onclick={open_GuayaBros}>
          Guayabo Borthers <span class={styles.type}>VJing</span> 2017-2018
        </li>
        {showGuayaBros() && <VideoProjects obj={videosApi.guayabobros} />}

        <li id="caliwoodrmx" class={styles.proyecto} onclick={open_Caliwood}>
          Caliwood Remixed <span class={styles.type}>VJing</span> 2017
        </li>
        {showCaliwood() && <VideoProjects obj={videosApi.caliwood} />}

        <li
          id="imputaciones"
          class={styles.proyecto}
          onclick={open_Imputaciones}
        >
          Imputaciones{" "}
          <span class={styles.type}>Cabaret Político Multimedia</span> 2016
        </li>
        {showImputaciones() && <VideoProjects obj={videosApi.imputaciones} />}

        <li
          id="esteropicnic"
          class={styles.proyecto}
          onclick={open_EsteroPicnic}
        >
          Electric Mistakes: Estero Picnic{" "}
          <span class={styles.type}>VJing</span> 2016
        </li>
        {showEsteroPicnic() && <VideoProjects obj={videosApi.esteropicnic} />}

        <li id="famiasuto" class={styles.proyecto} onclick={open_FamiaSuto}>
          Famia Suto: Hip-Hop al Parque <span class={styles.type}>VJing</span>{" "}
          2015
        </li>
        {showFamiaSuto() && <VideoProjects obj={videosApi.famiasuto} />}

        <li id="encarnacion" class={styles.proyecto} onclick={open_Encarnacion}>
          Encarnación de un tambor alegre{" "}
          <span class={styles.type}>Live Cinema</span> 2014
        </li>
        {showEncarnacion() && <VideoProjects obj={videosApi.encarnacion} />}

        <li id="atusombra" class={styles.proyecto} onclick={open_Atusombra}>
          A tu sombra <span class={styles.type}>Teatro Multimedia</span> 2012
        </li>
        {showAtusombra() && <VideoProjects obj={videosApi.atusombra} />}
      </ul>
    </div>
  );
}
