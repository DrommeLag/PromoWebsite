import React from "react";
import "./AboutUs.css";

function Questions(){
    return (
        <>
        <div className="qs">
            <div className="text-q">
                <h1>Що ти отримуєш ?</h1>
                <span id="line"><img alt="line" src='images/main_page/line_score.svg'/></span>
                <p id="q-p">Вся країна у твоєму телефоні. Єдиний в Україні додаток, з подібним функціоналом, зручний інтерфейс та інтерактивність. </p>
            </div>
            <img  id="bubbles1" src="images/about_page/bubbles1.svg" alt="icon"/>
        </div>
        <div className="qs">
            <img  id="bubbles2" src="images/about_page/bubbles2.svg" alt="icon"/>
            <div className="text-q">
                <h1>Чому ми ?</h1>
                <span id="line"><img alt="line" src='images/main_page/line_score.svg'/></span>
                <p id="q-p">Ми команда студентів програми Internet of Things із Lviv Polytechnic National University.
                    Наша мета популяризувати та розвивати українське.
                    Ми вирішили створити нашу державу у телефоні, щоб кожен зміг побачити всю красу України.  Також завдяки UApp ми допомагаємо людям із східних регіонів позбутись мовного бар’єру.</p>
            </div>
        </div>
        <div id="team-text">
            <h1>Команда розробників</h1>
            <span id="line"><img alt="line" src='images/main_page/line_score.svg'/></span>
        </div>
        <div className="team">
            <div className="mate" id="left">
                <img id="person" alt="person" src="images/about_page/sasha.png" />
                <div className="mate-text">
                    <h2 className="name">Oleksandr Teliuk</h2>
                    <p className="person-text">Team Lead, Developer</p>
                </div>
            </div>
            <div className="mate" id="right">
                <div className="mate-text">
                    <h2 className="name">Victoria Starynchuk</h2>
                    <p className="person-text">Product Owner, Designer</p>
                </div>
                <img id="person" alt="person" src="images/about_page/vika.png" />
            </div>
            <div className="mate" id="left">
                <img id="person" alt="person" src="images/about_page/igor.png" />
                <div className="mate-text">
                    <h2 className="name">Igor Boklach</h2>
                    <p  className="person-text">Scrum Master, Developer</p>
                </div>
            </div>
            <div className="mate" id="right">
                <div className="mate-text">
                    <h2 className="name">Roksolana Mazurak</h2>
                    <p className="person-text">Designer</p>
                </div>
                <img id="person" alt="person" src="images/about_page/roksa.png" />
            </div>
            <div className="mate" id="left">
                <img id="person" alt="person" src="images/about_page/nazar.png" />
                <div className="mate-text">
                    <h2 className="name">Nazar Dufanets</h2>
                    <p className="person-text">Developer</p>
                </div>
            </div>
        </div>
        <div className="cooperation">
            <h1>Хочеш співпрацювати?</h1>
            <p id="coop-p">Ми відкриті до рекламних пропозицій від українських брендів, для розміщення продуктів на нашому маркетплейсі. </p>
            <div id="coop-btn">
                <button className="button">
                    <a href="drommelag@gmail.com">Підтримати команду</a>
                </button>
            </div>
        </div>
        <div className="ask_form">
            <h1>Маєш якісь запитання?</h1>
            <span id="line"><img alt="line" src='images/main_page/line_score.svg'/></span>
            <div className="input_form">
                <div className="boxes">
                    <input type="text" placeholder="Введи своє ім’я" id="input" required />
                </div>
                <div className="boxes">
                    <input type="text" placeholder="Введи свою пошту" id="input" required />
                </div>
                <div className="boxes">
                    <input type="your-text" placeholder="Твоє повідомлення" id="input-ypur-text" required />
                </div>
                <div id="coop-btn">
                <button className="button">
                    <a href="drommelag@gmail.com">Напиши нам</a>
                </button>
            </div>
            </div>
        </div>
        <div className="QandA">
            <h2 id="qatext">Q and A </h2>
            <div className="blue-boxes">
                <div className="box">
                    <h5 id="box-question">Додаток безкоштовний ?</h5>
                    <p id="box-answer">Так, кожен може користуватись додатком просто скачавши його.</p>
                </div>
                <div className="box">
                    <h5 id="box-question">Чи доступна версія для IOS ?</h5>
                    <p id="box-answer"> Поки що додаток доступний лише для користувачів Android.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Questions;