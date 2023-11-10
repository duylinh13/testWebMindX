import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const toggleLanguage = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage === "en" ? "vn" : "en"));
  };

  return (
    <div className="language-switcher" onClick={toggleLanguage}>
      {currentLanguage === "en" ? "🇺🇸 English" : "🇻🇳 Tiếng Việt"}
    </div>
  );
};

export default LanguageSwitcher;
