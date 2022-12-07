import React from "react";
import { Col, Row, Container, Image, Button, NavLink } from "react-bootstrap";
import CharacterModal from "../components/CharacterModal";
import operaHouse1 from "../img/opera-house1.svg";
import operaHouse2 from "../img/opera-house2.svg";
import operaHouse3 from "../img/opera-house3.svg";
import operaHouse4 from "../img/opera-house4.svg";
import operaHouse5 from "../img/opera-house5.svg";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";

const data = [
  {
    title: "концерт URIAH HEEP",
    date: "10 листопада 2022 о 19:00",
    image: "images/opera-event1.svg",
  },
  {
    title: "мюзикл ГУЦУЛКА КСЕНЯ",
    date: "14 листопада 2022 о 18:00",
    image: "images/opera-event2.svg",
  },

  {
    title: "балет ЕСМЕРАЛЬДА",
    date: "20 листопада 2022 о 18:00",
    image: "images/opera-event3.svg",
  },
];

function ViewPointSection() {
  return (
    <>
      <Container>
        <Container>
          <Button variant="warning" className="p-1">
            <NavLink href="/map">
              <img src="./images/arrow.svg" alt="arrow"></img>
            </NavLink>
          </Button>
        </Container>
        <Container className="d-flex justify-content-between my-5">
          <img src="./images/arrow2.svg" alt="arrow"></img>
          <Button variant="warning" className="">
            Львівський оперний театр
          </Button>
          <Button variant="light" className="">
            Площа ринок
          </Button>
          <Button variant="light" className="">
            Високий замок
          </Button>
          <img src="./images/arrow3.svg" alt="arrow"></img>
        </Container>
        <Row>
          <Col>
            <h1 className="p-3">
              Львівський національний академічний театр опери та балету імені
              Соломії Крушельницької{"  "}
            </h1>
            <div className="p-3">
              <p>
                Театр опери та балету називають головним символом і перлиною
                Львова. Разом з віденською та одеською операми, він входить до
                числа найкрасивіших театрів Європи. Львівська опера, яка
                прикрашає головний проспект міста, є однією з найяскравіших
                міських визначних пам'яток, обов'язкових до відвідування. Щодня
                її красою і величчю захоплюються тисячі мандрівників з різних
                куточків світу.
              </p>
              <p>
                Необхідність у великому міському театрі Львів, який перебував у
                той час під владою Австро-Угорщини, виникла наприкінці XIX
                сторіччя. Тоді ж був організований конкурс на кращий проект
                майбутнього театру, в якому переміг талановитий архітектор
                Зигмунд Горголевський, що вже встиг прославитися як автор
                кількох монументальних споруд в Німеччині та Польщі.
              </p>
              <p>
                Будівництво театру почалося в 1897 році і тривало три роки - в
                1900-м Великий міський театр, так тоді називалася опера, був
                урочисто відкритий. Будівля, виконана в класичних традиціях з
                елементами зухвалого бароко і стриманого ренесансу, вражала
                ефектністю і пишністю декору: над його дизайном і обробкою
                театру працювали кращі майстри Львова і всього Старого Світу.
                Фасад будівлі щедро прикрашений скульптурами, колонами, нішами і
                балюстрадами. Вінчають його три крилаті бронзові фігури - Генія
                драми і комедії, Генія музики і Слави з золотою пальмовою гілкою
                в руках.
              </p>
              <p>
                У 2000 році - до сторіччя Львівської опери - вона була
                відреставрована і перейменована на честь Соломії Крушельницької,
                видатної української оперної співачки, широко відомої в усьому
                світі.
              </p>
            </div>
          </Col>
          <Col>
            <Image src={operaHouse1} alt="Opera House" className="mb-5" />
            <div className="mt-5">
              <CharacterModal />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={4}>
            <Image src={operaHouse2} alt="Opera House" />
          </Col>
          <Col xs={12} md={8}>
            <div className="p-5">
              <p>
                Відкрився театр для глядача 4 жовтня 1900 р. прем'єрою
                лірико-драматичної опери «Янек» Владислава Желенського — про
                життя карпатських верховинців. Головну партію співав український
                тенор Олександр Мишуга. В урочистому відкритті взяли участь
                художник Генрик Семирадський, письменник Генрик Сенкевич,
                композитор Ігнацій Ян Падеревський та делегації з різних
                європейських театрів.
              </p>
              <p>
                У 1934 році театр був закритий через фінансову скруту. У грудні
                1939 року із входженням львівського воєводства до складу СРСР
                Великий міський театр було перейменовано на Львівський державний
                театр опери та балету з підпорядкуванням його Міністерству
                культури України. Реорганізовано оркестр, хор, балетну трупу,
                серед солістів опери появилися нові імена — випускники
                Київської, Харківської та Одеської консерваторій.
              </p>
              <p>
                У воєнні роки театр продовжував працювати, сезон 1941-42 років
                був відкритий оперою «Запорожець за Дунаєм», пізніше ставились
                опери переважно італійських та німецьких композиторів.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Image src={operaHouse3} alt="Opera House" className="" />
          </Col>
          <Col xs={6} md={4}>
            <Image src={operaHouse4} alt="Opera House" className="" />
          </Col>
          <Col xs={6} md={4}>
            <Image src={operaHouse5} alt="Opera House" className="" />
          </Col>
        </Row>
        <h2 className="text-center mt-5">Події театру</h2>

        <Row>
          {data.map(({ title, date, image }, idx) => (
            <Col className="m-5">
              <EventCard title={title} date={date} image={image} id={idx} />
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center pt-3 pb-5">
          <Button size="lg">Показати ще</Button>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default ViewPointSection;
