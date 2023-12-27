import { ThemeProvider } from "../components/ThemeContext";

import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

import "./Home.css";

const Home = () => {
   return (
      <ThemeProvider>
         <div className="container">
            <Header />
            <div>
               <Main />
               <Footer />
            </div>
         </div>
      </ThemeProvider>
   );
};

export default Home;