import CV from "./components/CV";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Laura Chávez Arana - Currículum Vitae</title>
        <meta
          name="description"
          content="Currículum Vitae de Laura Chávez Arana, mostrando experiencia, educación y habilidades."
        />
        <meta
          name="keywords"
          content="Laura Chávez Arana, CV, Currículum Vitae, Hoja de vida, Experiencia, Educación, Habilidades"
        />
        <meta name="author" content="Laura Chávez Arana" />
        <meta
          property="og:title"
          content="Laura Chávez Arana - Currículum Vitae"
        />
        <meta
          property="og:description"
          content="Currículum Vitae de Laura Chávez Arana, mostrando experiencia, educación y habilidades."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cv-laura-chavez.vercel.app/" />
        <meta
          property="og:image"
          content="https://cv-laura-chavez.vercel.app/LauraChavez.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Laura Chávez Arana - Currículum Vitae"
        />
        <meta
          name="twitter:description"
          content="Currículum Vitae de Laura Chávez Arana, mostrando experiencia, educación y habilidades."
        />
        <meta
          name="twitter:image"
          content="https://cv-laura-chavez.vercel.app/LauraChavez.png"
        />
        <link rel="canonical" href="https://cv-laura-chavez.vercel.app/" />
        {/* Agrega más meta etiquetas si es necesario */}
      </Helmet>
      <CV />
    </>
  );
};

export default App;
