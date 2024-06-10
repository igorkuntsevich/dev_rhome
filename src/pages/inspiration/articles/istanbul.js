import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"



const ArticleIstanbul = () => (
  <Layout>
    <Seo 
      title={"Архитектурный тур в Стамбул - RHOME"} description={"Расскажем про архитуктуру "}
      location={"https://rhome.by/articles/istanbul"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Архитектурный тур в Стамбул команды Rhome</h1>
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/000_istanbul.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/00_istanbul.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>
        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Еще 20-30 лет назад архитекторы развивали свою насмотренность в библиотеках. Листая журналы, они размышляли над визуальными решениями и приемами. Сегодня архитекторы и дизайнеры смотрят ленту Pinterest, читают профильные интернет-журналы и путешествуют по разным странам для формирования эстетического интеллекта и методической базы.</p>
          <p className={styles.articles_intro_p}>Так, для поддержания навыка замечать прекрасное команда Rhome отправилась в Стамбул — город, который расположен одновременно и в Европе, и в Азии. Делимся своими впечатлениями о том, как мы вдохновлялись и даже не потерялись в этом 15-миллионном мегаполисе.</p>
        </div>
        <div className={styles.articles__three_inline}>
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/01_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/02_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/03_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
        </div>
        <p className={styles.articles__p + " " + styles.articles__p_lonely}>Стамбул впечатляет своими масштабами: огромный город, который постоянно развивается и представляет огромный потенциал для исследования. В современных архитектурных проектах используются нестандартные формы и геометрические решения, которые делают здания запоминающимся. При этом прослеживается уважение к культурному наследию. А это ценно — сохранить и продвигать архитектурную идентичность города.</p>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Чем мы занимались в Стамбуле</h2>
          <div>
            <p className={styles.articles__p}>День 1<br />По прилету отправились на «разминочную» пешеходную экскурсию по главному городу Турции. Причем попали в самое сердце Стамбула и увидели Площадь Султанахмет, Ипподром, Айя-Софию, цистерны Базилика и Шерефие, Голубую мечеть.</p>
            <p className={styles.articles__p}>День 2<br />На следующий день мы посетили территорию порта Галатапорт — настоящий рай для туристов-урбанистов. Это круизный порт, который объединяет места для развлечений, отреставрированные исторические объекты, творческие пространства, Музей современного искусства, магазины известных мировых брендов, кафе, рестораны и многое другое. Настоящий «город в городе»!</p>
            <p className={styles.articles__p}>День 3<br />Напоследок мы прогулялись по одной из самых популярных пешеходных улиц Стамбула — Истикляль, которая никогда не спит. Именно здесь можно почувствовать безумный ритм города. После прогулки мы решили изучить водный транспорт и отправились на прогулку по Босфору на кораблике. С воды открываются роскошные виды!</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__mirror}>
          <div>
            <div className={styles.articles__mirror_text_item}>
              <h2 className={styles.articles__mirror_text__title}>Аэропорт</h2>
              <div>
                <p className={styles.articles__p}>Новый аэропорт Стамбула (IST) был спроектирован британской архитектурной компанией  Grimshaw. Именно сюда прилетает большинство внутренних и международных рейсов: главные ворота в страну.</p>
                <p className={styles.articles__p}>Дизайн основан на архитектурном характере Стамбула — города, богатого цветами, узорами и историей со времен его византийского происхождения. Сводчатые потолки, «пронизанные» мансардными окнами, дают рассеянный дневной свет и создают открытый высокий объем с четкими линиями обора.  Также привлекает внимание башня управления воздушным движением в виде тюльпана. Этот цветок, напоминающий восточный тюрбан  — символ страны.</p>
              </div>
            </div>
          </div>
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/04_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Метро Стамбула</h2>
          <div>
            <p className={styles.articles__p}>Стамбульский метрополитен охватывает как центральные, так и удаленные районы города. Особое внимание хочется уделить линии Мармарай: она проходит под проливом Босфор, соединяющую европейскую и азиатскую части города. Так, Мармарай — это самый быстрый способ попасть из Европы в Азию. А еще это настоящее чудо инженерной мысли. Туннельная часть, выполненная с применением технологии иммерсионных труб, способна выдерживать экстремальные землетрясения. С точки зрения архитектуры станции сочетают в себе модернизм и элементы османского наследия.</p>
            <p className={styles.articles__p}>Мармарай имеет не только практическое значение «отвезти горожан на другой берег», это еще и вдохновляющий пример использования инноваций для преодоления таких сложных градостроительных задач. Проект сокращает углеродный след, продвигает эко инициативы, повышает общую доступность транспорта в мегаполисе.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/05_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Холмистый Стамбул</h2>
          <div>
            <p className={styles.articles__p}>В холмистом Стамбуле диагональные строения домов и нет попыток хоть как-то выправить здание за счет фундаментов. Так, с одного конца дома может быть первый этаж, с противоположного — третий, а при входе в помещение — крутая лестница вниз, которая ведет во двор церкви.</p>
            <p className={styles.articles__p}>Похоже, турецкие архитекторы видят в неровностях рельефа возможность для креативного подхода к проектированию. Такие решения подчеркивают важность гармоничного взаимодействия зданий с местным рельефом.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Мечеть Долмбахче</h2>
          <div>
            <p className={styles.articles__p}>На протяжении большей части истории Стамбул был космополитичен. Турки составляли лишь относительное большинство. Поэтому здесь запросто можно встретить храмы, которые переделаны в мечети или кафе. Даже одно из самых впечатляющих мест в Стамбуле — мечеть Айя-София, было и православным собором, и даже музеем.</p>
            <p className={styles.articles__p}>Особое внимание у нас вызвала мечеть Долмбахче. В Википедии пишут о том, что мечеть была построена в 1853-1855 гг. Но очень сомнительно, что всего за два года можно возвести такое здание. Тем более, на табличке указан 1851 год. Или если убрать минареты, мечеть становится похожей на храм? Об этом нигде не пишут, но если всмотреться, можно заметить, как окна переделываются в двери, а огромные залы для молитвы «подаются» в комнаты султанов.</p>
          </div>
        </div>
        <div className={styles.articles__three_inline}>
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/06_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/07_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/08_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
        </div>
        <p className={styles.articles__p + " " + styles.articles__p_lonely}>Для нас как архитекторов и дизайнеров интересна сама идея создания пространств, которые могут эффективно служить потребностям общества на протяжении долгого времени.</p>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Порт Галатапорт</h2>
          <div>
            <p className={styles.articles__p}>Впечатляющий пример того, как промышленные зоны могут быть переделаны в центры культуры, развлечений и общественной активности. Порт находится на берегу Босфора, в районе Галата. Кстати, порт прошел сертификацию LEED — это второй по величине проект устойчивой архитектуры в Европе.</p>
            <p className={styles.articles__p}>Интересно, что с точки зрения дизайна, Галатапорт — это здоровая и безопасная среда для искусства, работы, шопинга и др.</p>
            <p className={styles.articles__p}>Так, в Galataport Istanbul имеются гибкие офисные помещения, архитектура и декор которых были разработаны с учетом социального дистанцирования. Благодаря стеклянному фасаду в этих помещениях много естественного света, что создает воздушную среду для повышения мотивации сотрудников. Также в здании есть террасы — согласитесь, свежий воздух никому не повредит!</p> 
          </div>
        </div>
        <div className={styles.articles__three_inline}>
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/09_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/10_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/11_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
        </div>
        <p className={styles.articles__p + " " + styles.articles__p_lonely}>Офисные помещения занимают 43 000 кв.м., спроектированных с учетом рабочих условий нового поколения. В центре каждого здания располагается аварийная лестница, которая позволяет сотрудникам добраться до своего рабочего места без тесных контактов.</p>
        <div className="line"></div>
        <div className={styles.articles__mirror}>
          <div>
            <div className={styles.articles__mirror_text_item}>
              <h2 className={styles.articles__mirror_text__title}>Почтовое отделение</h2>
              <div>
                <p className={styles.articles__p}>Нам очень понравилось здание бывшего почтового отделения — одно из старейших сооружений портового района. Отличный пример того, как современные технологии «дружат» с идеей сохранения культурного наследия. Здание отреставрировано и там располагаются бутики.</p>
                <p className={styles.articles__p}>Мы узнали, что купол, кровля, балки и стеновые плиты была тщательно разобраны и перевезены в мастерскую в Тузле. Были удалены слои краски и коррозии, а также восстановлены поврежденные участки. Кровлю усилили сталью, а реконструированные элементы защитили антикоррозийным покрытием. Главный купол собрали на арендованном участке, обследовали с помощью лазерного сканирования и установили на специально спроектированное основание.</p>
              </div>
            </div>
          </div>
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/12_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
        </div>
        <div className="line"></div>
        <div className={styles.articles__mirror}>
          <div>
            <div className={styles.articles__mirror_text_item}>
              <h2 className={styles.articles__mirror_text__title}>Музей Arter</h2>
              <div>
                <p className={styles.articles__p}>Всем ценителям современного искусства настоятельно рекомендуем к посещению музей Arter! Одно из лучших мест для арт-погружения в Стамбуле: здесь постоянно проходят разнообразные выставки и программы.  В музее представлена и живопись, и скульптура, и фотографии, и современные мультимедийные инсталляции. Музей был открыт в 2010 г., а в 2019 г. переехал в новое здание, спроектированное британской компанией Grimshaw Architects.</p>
                <p className={styles.articles__p}>Фасад музея Arter представляет собой трехмерные ромбовидные панели. Днем эти панели отражают солнечные лучи, а их структура напоминает типичные исторические мозаичные фасады Стамбула. Панорамные окна здания создают непрерывную связь между выставочными пространствами и улицей.</p>
              </div>
            </div>
          </div>
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/13_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Пешеходная улица Истикляль</h2>
          <div>
            <p className={styles.articles__p}>Именно здесь можно почувствовать безумный ритм Стамбула, потому что в любое время суток полным-полно людей. Истикляль — мозаика архитектурных стилей и эпох. Здания, которые когда-то служили особняками и торговыми домами, «превратились» в магазины, кафе и арт-пространства. В целом, интересно исследовать возможности адаптивного повторного использования в архитектуре.</p>
            <p className={styles.articles__p}>Улица начинается неподалеку от Галатской башни, с вершины которой открывается панорамный вид на величественный Стамбул: Золотой Рог, Босфор и даже дальний азиатский берег города.</p>
            <p className={styles.articles__p}>Конечно, на Стамбул просто необходимо взглянуть с воды: прокатиться на кораблике по Босфору! Прекрасный ракурс, чтобы подробно рассмотреть архитектурное многообразие города: от великолепных дворцов и старинных особняков до современных зданий и мостов.</p> 
          </div>
        </div>
        <div className={styles.articles__three_inline}>
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/14_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/15_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
          <StaticImage
            src="../../../images/inspiration/articles/istanbul/16_istanbul.jpg"
            alt=""
            className={styles.articles__one_image}
          />
        </div>
        <p className={styles.articles__p + " " + styles.articles__p_lonely}>Мосты в Стамбуле — отдельный вид искусства. Так, длина Босфорского моста составляет 1560 метров, моста Галлиполи — 995 метров, Галатского моста — 490 метров. Это действительно впечатляет: распределение нагрузок, геометрические параметры, прочность материалов. Как вы понимаете, у нас было много тем для разговоров.</p>
        <p className={styles.articles__p + " " + styles.articles__p_lonely}>Вот такой получился рассказ о нашем архитектурном туре в Стамбул! А вы хотели бы присоединиться к нашей команде в следующих поездках?</p>



      </div>
    </div>
    <div className="wrapper">
      <div className={styles.last_articles}>
        <h2 className={styles.last_articles_title}>Последние статьи</h2>
        <div className={styles.inspiration_content}>
          <InspirationArticle
            url="/inspiration/articles/trend-kuhni/"
            backgroundColor="#FAF0BC"
            title="Новый тренд в интерьере кухни-гостиной"
            chapter="Тенденции"
          />
          <InspirationArticle
            url="/inspiration/articles/d3-i-olimpik-park-v-minske/"
            backgroundColor="#B1C8DD"
            title="5 дизайн-проектов интерьера квартир в ЖК D3 и Олимпик Парк"
            chapter="Дизайн интерьера"
          />
          <InspirationArticle
            url="/inspiration/articles/zhk-mayak-minska/"
            backgroundColor="#FFD7C8"
            title="Дизайн интерьера квартир в ЖК “Маяк Минска”"
            chapter="Дизайн интерьера"
          />
          <InspirationArticle
            url="/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/"
            backgroundColor="#FAF0BC"
            title="Дизайн интерьера квартир в Новой Боровой, Пирсе и Зеленой Гавани"
            chapter="Дизайн интерьера"
          />
        </div>
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ArticleIstanbul