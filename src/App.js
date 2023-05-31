import Menu from "./Components/Menu";
import AboutAlfred from "./Components/AboutAlfred";
import Laboratory from "./Components/Laboratory";
import Help from "./Components/Help";
import Footer from "./Components/Footer";
import School from "./Components/School";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header/>
      <AboutAlfred />
      <Laboratory />
      <School />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
