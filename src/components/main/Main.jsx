import "./Main.css";

import { User2 } from "lucide-react";
import { Bot } from "lucide-react";

const Main = () => {
   return (
      <main>
         <div className="user-container">
               <User2 className="icon"/>
               <p className="user-message">Olá, você poderia me dizer qual o cardápio do R.U</p>
         </div>
         <div className="bot-container">
               <Bot className="icon"/>
               <p className="bot-message">Olá, como</p>
         </div>
      </main>
   );
};

export default Main;