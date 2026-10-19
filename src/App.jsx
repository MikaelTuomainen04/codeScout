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

  function handleAddToCompare(repo) {

    console.log(repo);
    console.log(repo.id);
    console.log(repo.full_name);

    onclick={() => onAddToCompare(repo)}
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
            results={results} onResults={setResults} 
            />
          }
        />

        <Route path="/compare" element={<ComparePages />} />
        <Route path="/helpPage" element={<HelpPage />} /> 

      </Routes>

    </main>

    <Footer />
    </>
  );
}

export default App;
