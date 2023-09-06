import React, { useEffect, useState } from "react";
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
      style={{ maxHeight: "100vh", marginTop: "60px" }}
    >
      <h1 className="text-center display-1 py-4 mt-5 mb-3 fw-bold fs-1 text-secondary">
        Synopsis
      </h1>
      <h2 className="text-center mt-5 mb-3 fw-bold fs-1 text-secondary">
        Rick and Morty
      </h2>

      <SynopsisContext.Provider value={{ page, setPage }}>
        <CharacterList />
      </SynopsisContext.Provider>
    </div>
  );
};

export default Synopsis;
