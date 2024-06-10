import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"



const TendentsiiOboev = () => (
  <Layout>
    <Seo 
      title={"Модные тенденции обоев 2018 года - RHOME"} description={"Обои могут быть не только практичными но и современными"}
      location={"https://rhome.by/articles/tendentsii-oboev"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Модные тенденции обоев 2018 года</h1>
          <StaticImage
            src="../../../images/inspiration/articles/tendentsii-oboev/19_tendentsii-oboev.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/tendentsii-oboev/00_tendentsii-oboev.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Патрисия Уркиола, дизайнер с мировым именем, на днях представила миру результат своей работы с известным испанским брендом Tres Tintas. Была разработана новая коллекция обоев, отражающая все главные тенденции 2018 года.</p>
        </div>



        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Tres Tintas 2018</h2>
          <div>
          <p className={styles.articles__p}>В основе коллекции — разнообразная цветовая палитра и модные принты. Тут органично сочетаются окружности и прямые линии, броские и спокойные тона, полосы и асимметричные орнаменты. Выходя за рамки исключительно авангардных проектов, такие обои отлично будут смотреться в самых разных интерьерах, привнося в них индивидуальность и элегантность.</p>
          
          </div>
        </div>

        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/01_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/02_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
        </div>
      
        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/03_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/04_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
        </div>
      
        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/05_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/06_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
        </div>
        <div className={styles.articles__three_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/07_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/08_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/09_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
            </div>
            <div className={styles.articles__three_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/10_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/11_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/12_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
            </div>

            <div className={styles.articles__three_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/13_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/14_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/15_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
            </div>
            <div className={styles.articles__three_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/16_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/17_tendentsii-oboev.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/tendentsii-oboev/18_tendentsii-oboev.jpg"
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

export default TendentsiiOboev