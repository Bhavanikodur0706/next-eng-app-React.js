import React, { useState } from "react";

function Button(){
    const [currentLang, setCurrentLang] = useState('en');

    function toggleLanguage(){
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        setCurrentLang(newLang);
        localStorage.setItem('lang', newLang);
        translatePage(newLang);
    }

    function translatePage(lang) {
        fetch('arabic.json')
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-translate]').forEach(function (el) {
                const key = el.getAttribute('data-translate');
                const translatedText = data[lang][key];
                el.innerHTML = translatedText;
            });
        });
        if (lang === 'ar') {
            var menuBar = document.querySelector('.main_menu .navbar-expand-lg .navbar-nav');
            menuBar.style.direction = 'rtl';

        } else {
            var menuBar = document.querySelector('.main_menu .navbar-expand-lg .navbar-nav');
            menuBar.style.direction = 'ltr';

        }
    }

    return(
        <div className="en-arb-tran">
            <button type="button" className="btn-tran" onClick={toggleLanguage}><a>{currentLang === 'en' ? 'EN / عربى' : 'AR / EN'}</a></button>
        </div>
    );
}

export default Button;
