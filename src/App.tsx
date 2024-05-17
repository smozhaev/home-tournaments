import Footer from "./components/Footer";
import Header from "./components/Header";
import MainRouter from "./components/MainRouter";
import "./App.scss";
import AuthProvider from "./Providers";
function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <section className="main">
          <MainRouter />
        </section>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
