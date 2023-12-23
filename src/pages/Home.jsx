import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

import "./Home.css";

const Home = () => {
   return (
      <div className="container">
         <Header />
         <Main />
         <Footer />
      </div>
   );
};

export default Home;