import { useEffect, useState } from "react";
import CharacterList, {
  SynopsisContext,
} from "../components/characterlist/CharacterList";

const Synopsis = () => {
  const [page, setPage] = useState(() => {
    const storedPage = localStorage.getItem("page");
    return storedPage ? parseInt(storedPage) : 1;
  });

  useEffect(() => {
    localStorage.setItem("page", page.toString());
  }, [page]);

  return (
    <div
      className="container-fluid"
      style={{ maxHeight: "100vh", marginTop: "100px" }}
    >
      {/* <h1 className="text-center display-1 py-4 mt-5 mb-3 fw-bold fs-1 text-secondary">
        Synopsis
      </h1>
      <h2 className="text-center mt-5 mb-3 fw-bold fs-1 text-secondary">
        Rick and Morty
      </h2> */}

      <div className="favorites">
        <div className="container">
          <h1 className="text-white">
            ¡Bienvenido a la serie animada Rick and Morty!
          </h1>
          <p className="text-white">
            Si aún no has visto esta increíble serie, te estás perdiendo una
            aventura llena de ciencia, humor y locura. Prepárate para sumergirte
            en el multiverso con Rick y Morty.
          </p>

          <h2 className="text-white">Personajes Principales</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://th.bing.com/th/id/R.764feb0a6478735f83aa8431095fd0c8?rik=0waN%2b3wdiC24pQ&riu=http%3a%2f%2fpm1.narvii.com%2f7418%2f895d08dc1f712c19875aa5a81bba101508762c1br1-623-618v2_00.jpg&ehk=g4cRLrUaxMI9%2fBG9eeDm5cF7tzrRCmKddJh5RlqdoVU%3d&risl=&pid=ImgRaw&r=0"
                style={{ width: "50%" }}
                alt="Imagen de Rick"
                className="img-fluid"
              />
              <h3 className="text-white">Rick Sanchez</h3>
              <p className="text-white">
                El científico alcohólico y genio inventor que arrastra a su
                nieto Morty en peligrosas aventuras por todo el multiverso.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://vignette.wikia.nocookie.net/rickandmorty/images/c/c3/Morty_Smith_(dimensione_sostitutiva).png/revision/latest?cb=20170711201806&path-prefix=it"
                style={{ width: "50%" }}
                alt="Imagen de Morty"
                className="img-fluid"
              />
              <h3 className="text-white">Morty Smith</h3>
              <p className="text-white">
                El tímido y aprensivo nieto de Rick, que se encuentra atrapado
                en las locuras de su abuelo y trata de sobrevivir a ellas.
              </p>
            </div>
          </div>

          <h2 className="text-white">Información de la Serie</h2>
          <p className="text-white">
            Rick and Morty es una serie de animación creada por Dan Harmon y
            Justin Roiland. Se estrenó en el año XXXX y se ha convertido en un
            fenómeno de la cultura pop.
          </p>

          <h2 className="text-white">Transmisión</h2>
          <p className="text-white">
            La serie es transmitida en varias cadenas televisivas, incluyendo
            [lista de cadenas]. Además, puedes encontrarla en plataformas de
            streaming como Netflix, Hulu, y [otras plataformas].
          </p>

          <h2 className="text-white">Más sobre la Serie</h2>
          <p className="text-white">
            Rick and Morty es conocida por su humor irreverente, su exploración
            de temas científicos y filosóficos, y su narrativa multidimensional.
            Cada episodio es una aventura única que te mantendrá entretenido y
            haciendo preguntas.
          </p>

          <p className="text-white">
            ¡No esperes más para unirte a Rick y Morty en sus extravagantes
            aventuras! Prepárate para explorar el multiverso y reírte a
            carcajadas con esta serie revolucionaria.
          </p>
        </div>
      </div>

      <SynopsisContext.Provider value={{ page, setPage }}>
        <CharacterList />
      </SynopsisContext.Provider>
    </div>
  );
};

export default Synopsis;
