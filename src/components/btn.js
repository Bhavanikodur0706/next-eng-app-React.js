import React from "react";
import { useState } from "react";
function Button(){
    const [currentLang,setCurrentLang] = useState('en');
    function toggleLanguage(){
        const newLang = currentLang==='en'?'ar':'en';
        setCurrentLang(newLang);
        localStorage.setItem(lang,newLang);
        translatePage(newLang);

    }
    function translatePage(lang){
        fetch('arabic.json')
        .then (Response.Response.json())
        .then (data=> {
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                const translatedText = data[lang][key];
                element.innerHtml = translatedText;
                
            });
        });

    }
}
