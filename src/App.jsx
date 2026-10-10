import { Header } from "./components/TempHeader.jsx";
import { SearchForm } from "./components/SearchForm.jsx";
import { SearchSummary } from "./components/SearchSummary.jsx";
import { Results } from "./components/Results.jsx";
import { Footer } from "./components/Footer.jsx";
import "./App.css";

function App() {

  return (
    <>

    <Header title = "codeScout" />

    <main>
      <SearchForm />
      <SearchSummary />
      <Results />
      <Footer />
    </main>
    </>
  );
}

export default App;
