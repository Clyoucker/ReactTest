import React from "react";

import CardMovie from "./CardMovie";

const path = "../../assets/img/movies/"
const poster = "/poster.jpg"
const bg = "/bg.jpg"

import PosterFellowship from "../../assets/img/movies/Fellowship/poster.jpg";
import PosterEvergarden from "../../assets/img/movies/Evergarden/poster.jpg";
import PosterCentimeters from "../../assets/img/movies/Centimeters/poster.jpg";
import PosterBullet from "../../assets/img/movies/Faster/poster.jpg";
import PosterSlayer from "../../assets/img/movies/Slayer/poster.jpg";
import PosterDrive from "../../assets/img/movies/Drive/poster.jpg";
import PosterTitan from "../../assets/img/movies/Titan/poster.jpg";
import PosterBerserk from "../../assets/img/movies/Berserk/poster.jpg";
import PosterTanya from "../../assets/img/movies/Tanya/poster.jpg";
import PosterTour from "../../assets/img/movies/Tour/poster.jpg";
import PosterGate from "../../assets/img/movies/Gate/poster.jpg";
import PosterDemon from "../../assets/img/movies/Demon/poster.jpg";

import PosterNightCall from `'${path}/NightCall/${poster}'`;


import BgFellowship from "../../assets/img/movies/Fellowship/bg.jpg";
import BgEvergarden from "../../assets/img/movies/Evergarden/bg.jpg";
import BgCentimeters from "../../assets/img/movies/Centimeters/bg.jpg";
import BgBullet from "../../assets/img/movies/Faster/bg.jpg";
import BgSlayer from "../../assets/img/movies/Slayer/bg.jpg";
import BgDrive from "../../assets/img/movies/Drive/bg.jpg";
import BgTitan from "../../assets/img/movies/Titan/bg.jpg";
import BgBerserk from "../../assets/img/movies/Berserk/bg.jpg";
import BgTanya from "../../assets/img/movies/Tanya/bg.jpg";
import BgTour from "../../assets/img/movies/Tour/bg.jpg";
import BgGate from "../../assets/img/movies/Gate/bg.jpg";
import BgDemon from "../../assets/img/movies/Demon/bg.jpg";
import BgNightCall from `'${path}/NightCall/${bg}'`;

class ClassCardMovies extends React.Component{

    constructor(){
        super();
        this.state={
            active:false,
            movieActive:null,
            movies:[
                {
                    "id": 1,
                    "titleEng": "The Lord of the Rings: The Fellowship of the Ring",
                    "titleRus": "Властелин колец: Братство кольца",
                    "dateRelease": "31.12.2022",
                    "age": 12,
                    "genres": ["Fantasy"],
                    "poster": PosterFellowship,
                    "bg": BgFellowship,
                    "rate": 9,
                    "descriptions": "прошлое. Мир в котором он теперь находится, наполнен магией, мифическими тварями и необычными расами.Всё это и многое другое повстречается на пути главного героя и его будущих спутников.Крупнейшее проишествее в японии унесло бесчисленное количество жизней и в том числе главного героя, которому предстоит жить в новом для него мире"
                },
                {
                    "id": 2,
                    "titleEng": "Violet Evergarden",
                    "titleRus": "Вайолет Эвергарден",
                    "dateRelease": "11.01.2018",
                    "age": 16,
                    "genres": ["Drama", "Everyday Life", "Fantasy"],
                    "poster": PosterEvergarden,
                    "bg": BgEvergarden,
                    "rate": 9.3,
                    "descriptions": "Супруга ученого Орланда – талантливая писательница, выпускающая романы. Однако для того, чтобы соответствовать статусу гениального творца, не достаточно владеть безграничной фантазией, так как все свои мысли автор обязан переносить на бумагу."
                },
                {
                    "id": 3,
                    "titleEng": "5 Centimeters Per Second",
                    "titleRus": "5 сантиметров в секунду",
                    "dateRelease": "03.03.2007",
                    "age": 16,
                    "genres": ["Drama","Everyday Life","Romance"],
                    "poster":PosterCentimeters,
                    "bg": BgCentimeters,
                    "rate": 7.7,
                    "descriptions": "Такаки Тоно и Акари Синохара, два очень близких друга и одноклассника, вынуждены расстаться, когда семья Акари переезжает в маленький город Ивафуне в префектуре Тотиги из-за работы её семьи. Несмотря на разлуку, они продолжают поддерживать связь по почте. Когда Такаки узнает, что его семья переезжает на остров Танэгасима, он решает встретиться с Акари в последний раз."
                },
                {
                    "id": 4,
                    "titleEng": "Bullet Train",
                    "titleRus": "Быстрее Пули",
                    "dateRelease": "21.06.2022",
                    "age": 18,
                    "genres": ["Action","Comedy"],
                    "poster": PosterBullet,
                    "bg": BgBullet,
                    "rate": 2.2,
                    "descriptions": "Наёмник под кодовым именем Божья Коровка отправляется на новую миссию: вместо заболевшего коллеги он должен сесть в скоростной поезд Токио — Киото, выкрасть чемоданчик и сойти на промежуточной станции. Но выполнение простого задания сильно осложняется, когда выясняется, что состав просто кишит всевозможными киллерами"
                },
                {
                    "id": 5,
                    "titleEng": "Goblin Slayer",
                    "titleRus": "Убийца Гоблинов",
                    "dateRelease": "07.05.2018",
                    "age": 18,
                    "genres": ["Adventure", "Fantasy", "Action"],
                    "poster": PosterSlayer,
                    "bg": BgSlayer,
                    "cadrs": ["../../assets/image/movies/Slayer/one.jpg","../../assets/image/movies/Slayer/two.jpg","../../assets/image/movies/Slayer/three.jpg"],
                    "rate": 7.7,
                    "descriptions": "События происходят в выдуманном мире, который очень похож на рядовую компьютерную игру, где обитают разнообразные существа и персонажи, выполняющие всевозможные задания. Сообщество новичком, где состоит главная героиня в облике жрицы, принимает решение направиться на прохождение первой миссии. Ребята выбирают максимально простую задачу, созданную специально для неопытных игроков – ликвидацию гоблинов. Но, к огромному сожалению, вместо долгожданного триумфа группу встречают сплошные неприятности и трудности."
                },
                {
                    "id": 6,
                    "titleEng": "Akudama Drive",
                    "titleRus": "Акудама Драйв",
                    "dateRelease": "03.03.2007",
                    "age": 18,
                    "genres": ["Sci-Fi", "Action"],
                    "poster": PosterDrive,
                    "bg": BgDrive,
                    "rate": 8.9,
                    "descriptions": "В далекой древности между Канто и Кансаем вспыхнула война, разделившая Японию на две части. В конечном итоге Кансай проиграл и утратил самостоятельность. Постепенно его правительство и полиция стали уступать всё возрастающей преступности... Акудама — так стали называть злодеев, которые пытаются поставить мир с ног на голову."
                },
                {
                    "id": 7,
                    "titleEng": "Attack on Titan Final Season",
                    "titleRus": "Атака титанов: Финал",
                    "dateRelease": "07.12.2022",
                    "age": 18,
                    "genres": ["Military", "Detective", "Drama", "Shounen", "Super power", "Fantasy", "Action"],
                    "poster": PosterTitan,
                    "bg": BgTitan,
                    "rate": 9.4,
                    "descriptions": "За морем Марлия заканчивает длительную войну с войсками Средневосточного Альянса. Нация, всегда полагавшаяся на титанов в войне, осознает, что постепенно теряет первенство в военном противостоянии из-за наращивания другими государствами военной мощи и развития противотитанического оружия. Чтобы удержать лидирующую позицию на мировой арене, Марлии необходима сила Титана-основателя, сильнейшего из девяти изначальных титанов, способного контролировать других титанов. К несчастью для Марлии, эта сила всё ещё находится на острове Парадиз в руках Эрена Йегера. Райнеру Брауну — единственному воину, вернувшемуся после провальной операции по захвату Основателя, вновь предстоит столкнуться с бывшими товарищами."
                },
                {
                    "id": 8,
                    "titleEng": "Berserk",
                    "titleRus": "Берсерк",
                    "dateRelease": "06.02.1997",
                    "age": 18,
                    "genres": ["Military", "Demons", "Drama", "Adventure", "Romance", "Supernatural", "Seinen", "Horror", "Fantasy", "Action"],
                    "poster": PosterBerserk,
                    "bg": BgBerserk,
                    "rate": 9.4,
                    "descriptions": "Боль, кровь и слёзы. На престол восходит новый правитель. Его слуги, подручные демоны безнаказанно творят бесчинства в городе. Все меняется когда в город, скрытый темнотой ночи, попадает тяжёлый воин. С разнообразным вооружением для самых непредвиденных моментов, в броне, тело его все покрыто шрамами – черный мечник. Его меч настолько огромен, что может сравниться с его лютой злобой к королю и демонам. Эта история по сути военная драма. Происходящая в средневековье, включает в себя хоррор перемешанный с фэнтези. В центре действий Гатс, его судьба. В прошлом наёмник, а теперь он охотится за демонами. Его путь определенный свыше. Предательство, верность, магия, темные существа и эльфы."
                },
                {
                    "id": 9,
                    "titleEng": "The Saga of Tanya the Evil",
                    "titleRus": "Военная хроника маленькой девочки",
                    "dateRelease": "06.01.2017",
                    "age": 18,
                    "genres": ["Military", "Magic"],
                    "poster": PosterTanya,
                    "bg": BgTanya,
                    "rate": 8.8,
                    "descriptions": "Нужно ли верить в реинкарнацию? Есть люди, которые заверяют, что после перерождения человек утрачивает воспоминания о прежней жизни. Но данное утверждение может оспорить один японец. Ранее он трудился в фирме на должности топ-менеджера, но его путь оборвался. Мужчина точно не подозревал, что после смерти предстанет перед Творцом, так как он всегда отрицал существование Господа. Таким скептицизмом центральный персонаж сильно разгневал Бога, который решил наказать самовлюбленного землянина и отправил того в параллельный мир 1914-го года – период, когда процветала империя Великого Рейха."
                },
                {
                    "id": 10,
                    "titleEng": "Girls' Last Tour",
                    "titleRus": "Девушки в последнем путешествии",
                    "dateRelease": "03.03.2007",
                    "age": 16,
                    "genres": ["Detective", "Casual", "Adventure", "Sci-Fi"],
                    "poster": PosterTour,
                    "bg": BgTour,
                    "rate": 8.9,
                    "descriptions": "Всем событиям однажды приходит конец. Нет на Земле ничего вечного. Ежегодно появляются новые сообщения о грядущем апокалипсисе. Одни люди воспринимают странные предсказания абсолютно серьёзно, а другие просто смеются над ними, как над глупыми сказками. Но что если действительно произойдёт катастрофа? Что случится с людьми? С этими вопросами предлагает разобраться сюжетная линия анимационной картины. Наступил период, когда человеческой цивилизации приходится несладко, ведь она находится на грани полного вымирания. Огромнейшее количество людей погибло, а животная сфера потеряла свою значительную часть. Гигантские города, в которых в недалёком прошлом жили, суетились и веселились граждане, теперь изнывают от пустоты и тишины."
                },
                {
                    "id": 11,
                    "titleEng": "Gate: Thus the JSDF Fought There!",
                    "titleRus": "Врата: Там бьются наши воины",
                    "dateRelease": "12.08.2015",
                    "age": 18,
                    "genres": ["Military", "Adventure", "Fantasy", "Action"],
                    "poster": PosterGate,
                    "bg": BgGate,
                    "rate": 7.7,
                    "descriptions": "В Гиндзе неожиданно открылись пространственные врата, и толпы врагов ринулись захватывать мир. Но к большой радости, силам Японии удалось отбить атаку противника. Оказывается, что они по-настоящему сильные и могущественные войны, и так легко не были готовы сдаваться. Прекрасно понимая, что нападения не прекратятся, они решили построить собственный гарнизон. Главным героем становится тридцати трехлетний мужчина по имени Ёдзи Итами."
                },
                {
                    "id": 12,
                    "titleEng": "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
                    "titleRus": "Истребитель демонов: Поезд «Бесконечный»",
                    "dateRelease": "16.07.2020",
                    "age": 16,
                    "genres": ["Demons", "Historical", "Supernatural", "Shounen", "Action"],
                    "poster": PosterDemon,
                    "bg": BgDemon,
                    "rate": 9,
                    "descriptions": "Завершив оздоровительные тренировки в Доме бабочки, Тандзиро и его друзья отправляются выполнять новое задание. На поезде «Бесконечный» творится что-то неладное: в одночасье там исчезает более 40 человек! А значит, Тандзиро, Нэдзуко, Иноскэ и Дзэницу предстоит сразиться с могущественным демоном. Присоединившись к одному из сильнейших мечников — пламенному столпу Кёдзюро Рэнгоку, герои бросают вызов врагу, в то время как поезд «Бесконечный» мчится в долину отчаяния…"
                },
                {
                    "id": 13,
                    "titleEng": "Call of the Night",
                    "titleRus": "Песнь ночных сов",
                    "dateRelease": "08.06.2022",
                    "episodes": "13/?",
                    "status": "ongoing",
                    "age": 16,
                    "genres": ["Vampires", "Romance", "Supernatural", "Shounen"],
                    "poster": PosterNightCall,
                    "bg": BgNightCall,
                    "rate": 8.9,
                    "descriptions": "Кто совершал ночные прогулки, наверняка, скажет, что они прекрасны. Отсутствие людей, машин и прочих раздражителей, шарм тёмного времени суток и непередаваемое чувство свободы — такая атмосфера никого не оставит равнодушным. Вот и четырнадцатилетний ученик средней школы Ко Ямори, которого мучила бессонница и который поэтому решил выйти прогуляться, был обворожён. Слоняясь по пустым улицам, парень встретил загадочную девушку по имени Надзуна Нанакуса, которая показала мальцу все прелести ночной жизни. Закончились их совместные приключения тем, что вскоре Ко уже делил футон с Надзуной, которая, решив, что паренёк заснул, взяла и укусила его за шею!"
                },
            ],
        }
    }

    render(){
        console.log(this.state.movies2)
        return(
            <div className="movies">
                {this.state.movies.map(movie => <CardMovie key={movie.id} props={movie} />)}
            </div>
        )
    }

}

export default ClassCardMovies;