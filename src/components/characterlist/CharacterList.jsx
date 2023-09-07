import React, { useEffect, useState, createContext } from "react";
import Character from "../character/Character";

const SynopsisContext = createContext();
const NavPage = ({ page, setPage }) => {
  const handleBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <header className="d-flex justify-content-between align-items-center">
      <button className="btn btn-secondary btn-sm" onClick={handleBack}>
        &lt; Back
      </button>
      <p>Page: {page}</p>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => setPage(page + 1)}
      >
        Next &gt;
      </button>
    </header>
  );
};

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const data = await response.json();
        setLoading(false);
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <SynopsisContext.Provider value={{ page, setPage }}>
      <div
        className="container-fluid"
        style={{ maxHeight: "100vh", marginTop: "60px" }}
      >
        <NavPage page={page} setPage={setPage} />

        {loading ? (
          <h1 className="text-center display-1 py-4 mt-5 mb-3 fw-bold fs-1 text-primary">
            Loading...
          </h1>
        ) : (
          <div className="row">
            {characters.map((character) => (
              <div className="col-md-3" key={character.id}>
                <Character character={character} />
              </div>
            ))}
          </div>
        )}

        <NavPage page={page} setPage={setPage} />
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-secondary btn-sm mt-3 mb-5"
            onClick={handleScrollToTop}
          >
            Scroll to Top
          </button>
        </div>
      </div>
    </SynopsisContext.Provider>
  );
};

export default CharacterList;
export { SynopsisContext };
