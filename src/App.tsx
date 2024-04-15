import Footer from "./components/Footer";
import Header from "./components/Header";
import MainRouter from "./components/MainRouter";
import "./App.scss";
function App() {
  return (
    <>
      <Header />
      <section className="main">
        <MainRouter />
      </section>
      <Footer />
    </>
  );
}

export default App;
