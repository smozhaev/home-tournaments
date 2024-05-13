import Footer from "./components/Footer";
import Header from "./components/Header";
import MainRouter from "./components/MainRouter";
import "./App.scss";
import { AppProvider } from "./components/AppContext/AppContext.tsx";
function App() {
  return (
    <AppProvider>
      <Header />
      <section className="main">
        <MainRouter />
      </section>
      <Footer />
    </AppProvider>
  );
}

export default App;
