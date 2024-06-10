import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"



const KrupnoformatnayaPlitka = () => (
  <Layout>
    <Seo 
      title={"Идеи для оформления детской - RHOME"} description={"Рассмотрим особенности в выборе цвета и отделки поверхностей"}
      location={"https://rhome.by/articles/oformleniya-detskoj"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Идеи для оформления детской</h1>
          <StaticImage
            src="../../../images/inspiration/articles/oformleniya-detskoj/15_oformleniya-detskoj.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/oformleniya-detskoj/00_oformleniya-detskoj.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Примеры дизайнов детских комнат не так часто встретишь в публикациях, посвященных дизайну интерьеров, и мы решили заполнить этот пробел. В детской проходит значительная часть жизни ребенка, поэтому стоит постараться, чтобы она не только была красивая и удобная, но и «помогала» в воспитании ребенка. Мы сделали подборку советов, как помочь поддержать креативность и интеллектуальное развитие ребенка, а также соблюсти принципы экологичности.</p>
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Креативность</h2>
          <div>
            <p className={styles.articles__p}>Для развития вкуса и креативности очень важна насмотренность. Создайте для своего ребенка красивое и нестандартное окружение с самого детства, чтобы поощрить раскрытие творческого потенциала. Можно начать с пренебрежения канонами: белый потолок — это так тривиально! К тому же потолок с узором куда интереснее рассматривать, засыпая или слушая сказку. Рисунки — традиционные аттрибуты детской комнаты. Впрочем, совершенно необязательно «населять» стены детской персонажами мультиков и чужими произведениями — ваш ребенок сам может быть главным художником-декоратором своей комнаты. Одну из стенок можно покрыть краской для меловых досок. Стена не обязательна должна быть целиком выкрашена под меловую доску — вы можете отвести для рисования только часть стены.</p>
          </div>
        </div>
        <StaticImage
          src="../../../images/inspiration/articles/oformleniya-detskoj/07_oformleniya-detskoj.jpg"
          alt=""
          className={styles.articles__one_image}
        />
            <div className={styles.articles__two_inline + " " + styles.articles__bigmargin}>
                <StaticImage
                  src="../../../images/inspiration/articles/oformleniya-detskoj/03_oformleniya-detskoj.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/oformleniya-detskoj/05_oformleniya-detskoj.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
            </div>
        <div className={styles.articles__lefttitle_righttext}>
        <div>
            <p className={styles.articles__p}>Или даже обойтись небольшой меловой доской, вписанной в интерьер детской комнаты. Наконец-то в доме появится стена, на которой можно «легально» рисовать!</p>
          </div>
        </div>

            <StaticImage
          src="../../../images/inspiration/articles/oformleniya-detskoj/01_oformleniya-detskoj.jpg"
          alt=""
          className={styles.articles__one_image}
        />


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Когнитивные навыки</h2>
          <div>
            <p className={styles.articles__p}>Пространство тоже может обучать. Новый тренд в оформлении детских — совмещение когнитивной психологии и дизайна интерьера. Психологи-дизайнеры советуют устанавливать полки с книгами на уровне глаз малыша, чтобы он самостоятельно мог брать их в любой момент — так чтение станет естественной частью его повседневности. Кстати, карты — это не просто оригинальное украшение интерьера, но еще и методический материал. Так без специальных усилий можно узнать название и расположение стран и других топографических объектов.</p>
          </div>
        </div>


        <StaticImage
          src="../../../images/inspiration/articles/oformleniya-detskoj/08_oformleniya-detskoj.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        <StaticImage
          src="../../../images/inspiration/articles/oformleniya-detskoj/06_oformleniya-detskoj.jpg"
          alt=""
          className={styles.articles__one_image}
        />

        <div className={styles.articles__lefttitle_righttext}>
        <div>
            <p className={styles.articles__p}>Могут оказаться полезными корзины для игрушек и прочих мелочей. Они помогут не только приучиться к порядку и ответственности, но и развивать когнитивные способности. Во время сортировки можно ненавязчиво, в игровой форме запоминать названия цветов и учиться считать.</p>
          </div>
        </div>


        <StaticImage
          src="../../../images/inspiration/articles/oformleniya-detskoj/12_oformleniya-detskoj.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        <div className={styles.articles__lefttitle_righttext}>
        <div>
            <p className={styles.articles__p}>Добавьте в детскую комнату аксессуары или игрушки с историей. Старые игрушки и милые семейные реликвии не просто разбавят новый интерьер, но и станут поводом рассказать о своем прошлом и истории семьи. Такой подход не просто укрепляет связи с предками — он еще развивает воображение и обогащает словарный запас ребенка, что особенно важно в эпоху мультиков без слов.</p>
          </div>
        </div>


        <StaticImage
          src="../../../images/inspiration/articles/oformleniya-detskoj/09_oformleniya-detskoj.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        <div className={styles.articles__lefttitle_righttext}>
        <div>
            <p className={styles.articles__p}>Тексты и надписи нанесенные на стены или помещенные в рамы в пределах видимости ребенка станут поводом рассматривать буквы, а потом и практиковаться в чтении. Позаботьтесь о том, чтобы у ребенка был собственный стол. Это приучает малыша к тому, что для всего есть свое время и место. За столом дети могут рисовать, обучаться чтению и письму или же просто устраивать чаепития с игрушками. Наличие собственного детского столика в комнате вырабатывает усидчивость, которая позже так пригодиться в школе.</p>
          </div>
        </div>

        <StaticImage
          src="../../../images/inspiration/articles/oformleniya-detskoj/11_oformleniya-detskoj.jpg"
          alt=""
          className={styles.articles__one_image}
        />


        <StaticImage
          src="../../../images/inspiration/articles/oformleniya-detskoj/02_oformleniya-detskoj.jpg"
          alt=""
          className={styles.articles__one_image}
        />

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Экологичность</h2>
          <div>
            <p className={styles.articles__p}>О важности химической безопасности строительных материалов, краски и мебели сейчас не писал только ленивый. Мы тоже не ленивые и напоминаем, что нужно обращать внимание на этот аспект. Впрочем, это касается не только детских комнат. Помимо безопасности, понятие экологичности включает интегрирование природных текстур в интерьер детской. Это не только дерево, но и камень, плетенные элементы. Их наличие не только разнообразит интерьер, но и послужит напоминанием ребенка, что он часть большого мира природы, о чем легко забыть, живя в городе. Природные материалы не только интересно рассматривать, вглядываясь в причудливые узоры — это еще и тактильная стимуляция, которая благотворно влияет на творческое и умственное развитие ребенка.</p>
          </div>
        </div>

        <StaticImage
          src="../../../images/inspiration/articles/oformleniya-detskoj/14_oformleniya-detskoj.jpg"
          alt=""
          className={styles.articles__one_image}
        />

        <StaticImage
          src="../../../images/inspiration/articles/oformleniya-detskoj/10_oformleniya-detskoj.jpg"
          alt=""
          className={styles.articles__one_image}
        />

        <StaticImage
          src="../../../images/inspiration/articles/oformleniya-detskoj/04_oformleniya-detskoj.jpg"
          alt=""
          className={styles.articles__one_image}
        />


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

export default KrupnoformatnayaPlitka