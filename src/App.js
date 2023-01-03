import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </SnackbarProvider>
  );
}

export default App;
