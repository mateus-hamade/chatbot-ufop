import "./Header.css";

import { Bot } from "lucide-react";

const Header = () => {
   return (
      <header>
         <Bot className="icon"/>
         <div className="detail">
               <p className="bot-name">Assistente Ufopianx</p>
               <p className="status">Online</p>
         </div>
      </header>
   );
};

export default Header;