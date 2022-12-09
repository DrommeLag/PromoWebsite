import React from "react";
import "./Intro.css";
import "../Styles.css";

function Intro (){
    return(
        <>
        <div className="intro">
            <div className="intro_text">
                <h1 className="h-text">Вивчай Україну з UApp!</h1>
                <p className="p_landing_about" id="intro_p">Занурся в історичне минуле своїх предків, досліджуй пам’ятки та неймовірну природу України, тренуй свою мову у вигляді гри, купуй стильні речі в сучасних українських брендів. І все це в одному додатку! </p>
                <button className="button_landing_about" id="play_button">
                    <a href="https://play.google.com"><span><img id="play_btn" alt="icon" src='images/main_page/play_btn.png'/></span>Download on Google Play</a>
                </button>
            </div>
            <img id="intro_app" src='images/main_page/intro_app.png'  alt="Application"/>
        </div>
        <img id="intro_bubbles" alt="bubles" src='images/main_page/intro_bubles.svg'/>
        </>
    );

}

export default Intro;