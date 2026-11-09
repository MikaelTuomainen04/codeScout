import { useState } from "react";
import { Routes, Route } from "react-router";
import { Header } from "./components/TempHeader.jsx";
import { Footer } from "./components/Footer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { ComparePages } from "./pages/ComparePages.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { HelpPage } from "./pages/HelpPage.jsx";
import "./App.css";


function App() {

  const [compareProjects, setComparedProjects] = useState([]);

  function handleAddtoCompare(repo) {
    console.log("Vertailuun klikattu: ", repo)
    const alreadyCompared = compareProjects.some(
    (project) => project.id === repo.id
    );

    if(alreadyCompared) {
      return;
    } else {
      setComparedProjects([...compareProjects, repo])
    }
  }

  function handleRemoveFromCompare(id) {
    setComparedProjects(
      compareProjects.filter((project) => project.id !== id)
    );
  }

  
  const [results, setResults] = useState([]);

  return (
    <>
    <Header title = "codeScout" />
    <Navbar />


    <main>

      <Routes>

        <Route
          path="/"
          element={
            <SearchPage 
            results={results} 
            onResults={setResults}
            onAddToCompare={handleAddtoCompare}
            selectedCount={compareProjects.length} 
            />
          }
        />

        <Route path="/helpPage" element={<HelpPage />} /> 
        <Route path="/compare" element={<ComparePages projects={compareProjects} onRemoveFromCompare={handleRemoveFromCompare} />} 
        />

      </Routes>

    </main>

    <Footer />
    </>
  );
}

export default App;
