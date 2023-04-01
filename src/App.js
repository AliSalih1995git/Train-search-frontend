import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="flex h-auto flex-col justify-between ">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
