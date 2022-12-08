import React from "react";
import "./Features.css"
import "../Styles.css";


function Features (){
    return(
        <>
        <h1 className="h-text" id="feature_text">Що ми пропонуємо ?</h1>
        <span id="line"><img alt="line" src='images/main_page/line_score.svg'/></span>
        <div className="feature_icons" >
            <div className="iteam">
                <img className="icons" id="language_icon" alt="icon" src='images/main_page/language_icon.svg'/>
                <div className="iteam-text">
                    <h5 className="name">Мова</h5>
                    <p className="text">Проходь рівні щоб розмовл’яти красиво солов’їною</p>
                </div>
            </div>
            <div className="iteam">
                <img className="icons" id="culture_icon" alt="icon" src='images/main_page/culture_icon.svg'/>
                <div className="iteam-text">
                    <h5 className="name">Культура</h5>
                    <p className="text">Досліджуй минуле свого регіону</p>
                </div>
            </div>
            <div className="iteam">
                <img className="icons" id="views_icon" alt="icon" src='images/main_page/viewpoints_icon.svg'/>
                <div className="iteam-text">
                    <h5 className="name">Пам’ятки</h5>
                    <p className="text">Відвідай кожен куточок України</p>
                </div>
            </div>
            <div className="iteam">
                <img className="icons" id="news_icon" alt="icon" src='images/main_page/news_icon.svg'/>
                <div className="iteam-text">
                    <h5 className="name">Новини</h5>
                    <p className="text">Слідкуй за трендами українського ком’юніті</p>
                </div>
            </div>
        </div>
        <h1 className="h-text" id="view_text">Як це виглядає ?</h1>
        <span id="line"><img alt="line" src='images/main_page/line_score.svg'/></span>
        <img alt="features" src='images/main_page/feauters_app.svg' id="feauters_img" />

        <h1 className="h-text" id="view_text">Інтерактивна карта</h1>
        <span id="line"><img alt="line" src='images/main_page/line_score.svg'/></span>
        <p className="p_landing_about" id="map_text">тепер вся країна перед тобою, обирай місто та досліджуй </p>
        <img alt="map" id="map_img" src='images/main_page/map_bubbles.svg' />
        <div className="chapter">
            <p className="chapter_text"><span className="number">1.</span>Цікаво який одяг колись носили твої предки, де та як жили? Як виглядало твоє місто 200 років тому? Обирай місто, яке цікавить та дізнавайся про своє походження!</p>
            <span id="chapter_line_13"><img alt="line" src='images/main_page/line_score.svg'/></span>
        </div>
        <div className="chapter">
            <p id="chapter_text_2"><span className="number">2.</span>Хочеш десь відпочити, але не знаєш куди поїхати? Зібрались з друзями в поїздку,  але все цікве вже бачили? Ми зібрали всі найгарніші місця країни, тож обирай регіон і гоу в поїздку!</p>
            <span id="chapter_line_2"><img alt="line" src='images/main_page/line_score.svg'/></span>
        </div>
        <div className="chapter">
            <p className="chapter_text"><span className="number">3.</span>Любиш історію, але не подобається читати нудні книжки? Не проблема, з нашою картою ти можеш дізнатись лише цікаві історичні факти всіх міст!</p>
            <span id="chapter_line_13"><img alt="line"src='images/main_page/line_score.svg'/></span>
        </div>
        <div className="try_btn">
            <button className="button_landing_about">
                <a href="/src/pages/MapPage.js">Перейти до карти</a>
            </button>
        </div>
        </>

    );

}

export default Features;