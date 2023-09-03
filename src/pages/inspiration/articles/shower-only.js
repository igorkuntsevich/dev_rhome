import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

import * as styles from "../../../components/styles/about/inspiration.module.scss"




const DvaVarianta = () => (
  <Layout>
    <Seo 
      title={"Душевая вместо ванной – кому подойдет? - RHOME"} description={"Сравнили достоинста обоих решений для больших и малых санузлов."}
      location={"https://rhome.by/articles/shower-only"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Душевая вместо ванной – кому подойдет?</h1>
          <StaticImage
            src="../../../images/inspiration/articles/shower-only/05_shower-only.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/shower-only/00_shower-only.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Показываем несколько проектов ванных комнат без, собственно, ванной. Сперва такое решение может показаться эксцентричным – руководитель RHome Сергей Рассеко рассказывает, в чем плюсы.</p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Иногда заказчики поддерживают идею избавиться от ванны, заменив ее душевой кабиной. Такой вариант хорош, если:</h2>
          <div>
            <ul>
              <li className={styles.articles__li}>Ванная небольшая. В дизайне ценятся удобные, практичные и красивые решения, и в маленькой ванной таковым будет душевая кабина. Так можно более рационально обустроить санузел, сделать пространство максимально функциональным и чуть более свободным.</li>
              <li className={styles.articles__li}>Квартира – временное пристанище. Чаще всего душевую предпочитают молодые люди, которые рассматривают квартиру как временное жилье.</li>
              <li className={styles.articles__li}>В доме нет маленьких детей. Взрослые люди, чьи дети уже выросли, тоже иногда склоняются к такому варианту.</li>
              <li className={styles.articles__li}>Хочется видеть более чистое и современное дизайнерское решение своей ванной комнаты.</li>
            </ul>
          </div>
        </div>


        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/shower-only/01_shower-only.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/shower-only/02_shower-only.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
            </div>
            <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/shower-only/03_shower-only.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/shower-only/04_shower-only.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
            </div>

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

export default DvaVarianta