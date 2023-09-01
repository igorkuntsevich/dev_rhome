import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import video from "../../../images/inspiration/articles/trend-kuhni/04_trend-kuhni-video.mp4"

import { PortfolioItem } from "../../../subitems/portfolio"
import * as projectStyles from "../../../components/styles/portfolio/portfolio.module.scss"
import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

import * as styles from "../../../components/styles/about/inspiration.module.scss"




const TrendKuhni = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/articles/gira"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Новый тренд в интерьере кухни-гостиной</h1>
          <StaticImage
            src="../../../images/inspiration/articles/trend-kuhni/01_trend-kuhni.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/trend-kuhni/00_trend-kuhni.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>
        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Создать уютную обстановку без лишних деталей с использованием новых технологий  - одна из основных задач в современном дизайне интерьера. Специалисты студии RHOME совместно с производителем корпусной мебели DOMANI реализуют эту задачу, внедряя инновационные  решения в местный производственный процесс. Так архитектурный и дизайнерский опыт соединяется с промышленным возможностями. Всё для того, чтобы белорусские потребители могли воплотить европейские тенденции в оформлении своих домов.</p>
        </div>
        <StaticImage
          src="../../../images/inspiration/articles/trend-kuhni/02_trend-kuhni.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Концепция единого пространства</h2>
          <div>
            <p className={styles.articles__p}>Планировка кухни как единого пространства с гостиной остаётся на пике популярности и только укрепляет позиции в современном интерьере. Перед дизайнерами стоит задача создать комфортное помещение, отвечающее современному темпу жизни людей. Это помещение, в котором хочется испытывать атмосферу уюта и спокойствия без малейшего напоминания о будничной суете. Отсюда — тенденция спрятать всё, что об этой суете напоминает. </p>
            <p className={styles.articles__p}>Кухня уже давно из функциональной территории для готовки превратилась в место коллективного действа для общения с семьёй, друзьями или уединённого отдыха после напряжённого дня. </p>
          </div>
        </div>
        <div className={styles.articles__video}>
          <video width="100%" height="100%" muted={true} playsInline={true} autoPlay={true} loop={true} type="video/mp4">
            <source src={video} type="video/mp4"/>
          </video>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Надёжные механизмы</h2>
          <div>
            <p className={styles.articles__p}>Если ранее разделение зоны готовки и гостиной было более явным, то нынешний тренд связан с идеей визуально объединить помещение. Теперь кухня словно растворяется в пространстве. Со всей своей функциональностью, продуманной эргономикой и обилием техники декор кухонной зоны становится неброским и сливается с общим интерьером. Цветовые решения фасадов выбираются идентично или максимально приближено к отделке стен и выполняются в спокойных природных оттенках.</p>
            <p className={styles.articles__p}>Появляется масса надёжных механизмов, чтобы минимизировать визуальный шум и закрыть всё, что выдаёт зону готовки и хранения. Например, панели.</p>
          </div>
        </div>







        <StaticImage
          src="../../../images/inspiration/articles/trend-kuhni/03_trend-kuhni.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Экспозиция GRANDE</h2>
          <div>
            <p className={styles.articles__p}>В новой экспозиции, представленной в интерьерном пространстве DOMANI, кухня GRANDE является продолжением отделки стен или шкафа. Конструкция представляет собой выдвижные полноростовые панели из мдф, в которых использованы механизмы немецкой компании HAFELE . Фасады выкатываются из боковых стен и полностью закрывают зону готовки длиной в 2,5 м.</p>
            <p className={styles.articles__p}>Рядом встроен механизм из двух выдвижных панелей. Он закрывает 2 колонны шириной 1,2 м с полками-витринами и встроенной бытовой техникой. В результате кухня выглядит как минималистичный объект без намёка на визуальный шум. Светлые природные тона и натуральные материалы, из которых выполнены панели и остров, сливаются в гармонии, где нет ничего лишнего. Тёмным цветовым акцентом выделяется лишь обеденная группа, как бы намекая каждому вошедшему расположиться там за чашечкой ароматного кофе.</p>
          </div>
        </div>
        <StaticImage
          src="../../../images/inspiration/articles/trend-kuhni/04_trend-kuhni.jpg"
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

export default TrendKuhni