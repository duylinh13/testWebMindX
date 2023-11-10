import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  return (
    <div>
      <h3>Made by MindX 🔥</h3>
      <div>
        <span>Available on:</span>
        <span className="languague-picker">🇻🇳</span>
        <span className="languague-picker selected">🇺🇸</span>
      </div>
      <LanguageSwitcher />
    </div>
  );
};

export default Footer;
