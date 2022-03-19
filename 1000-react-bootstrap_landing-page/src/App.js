import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Main1 from "./components/Main1";
import Main2 from "./components/Main2";
import Gallery from "./components/Gallery";
import Enquiries from "./components/Enquiries";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <Main1 />
        <Main2 />
        <Gallery />
        <Enquiries />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
