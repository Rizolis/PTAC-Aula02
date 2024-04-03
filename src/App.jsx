import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./globals.css"

export default function app() {

  return(
    <main>
      <Header/>
      <br></br>
      <br></br>
      <Main/>
      <Footer/>
    </main>
  );
}
