import { createSignal } from 'solid-js';
import styles from './App.module.css';
import { About } from './components/about/About';
import { Prod } from './components/prod/Prod';
import { Video } from './components/video/Video';
import { Movies } from './components/movies/Movies';
import { Espacios } from './components/espacios/Espacios';
import { Footer } from './components/footer/Footer';

function App() {
  const [showProd, setShowProd] = createSignal(false);
  const [showVideo, setShowVideo] = createSignal(false);
  const [showMovies, setShowMovies] = createSignal(false);
  const [showEspacios, setShowEspacios] = createSignal(false);

  function smoothScroll(targetId) {
    const target = document.querySelector(targetId);

    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset - 20,
        behavior: 'smooth'
      });
    }
  }


  const open_Prod = () => {
      setShowProd(prev => !prev);
      setShowVideo(false);
      setShowMovies(false);
      setShowEspacios(false);
      smoothScroll("#prod")
  }

  const open_Video = () => {
    setShowProd(false);
    setShowVideo(prev => !prev);
    setShowMovies(false);
    setShowEspacios(false);
    smoothScroll("#video")
  }

  const open_Movies = () => {
    setShowProd(false);
    setShowVideo(false);
    setShowMovies(prev => !prev);
    setShowSound(false);
    setShowWeb(false);
    setShowEspacios(false);
  }

  const open_Espacios = () => {
    setShowProd(false);
    setShowVideo(false);
    setShowMovies(false);
    setShowEspacios(prev => !prev);
    smoothScroll("#spaces")
  }


  return (
    <div class={styles.container}>
      <About />
      <main>

        <h3 id="video" onclick={open_Video}>Video</h3>
        {showVideo() && (<Video />)}

        <h3 id="spaces" onclick={open_Espacios}>Espacios & Asociaciones</h3>
        {showEspacios() && (<Espacios />)}

        <h3 id="prod" onclick={open_Prod}>Producción de eventos</h3>
        {showProd() && (<Prod />)}

        <h3 id="movies" onclick={open_Movies}>Filmografía</h3>
        {showMovies() && (<Movies />)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
