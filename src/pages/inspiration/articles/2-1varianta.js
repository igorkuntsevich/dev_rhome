import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"



const DvaVarianta = () => (
  <Layout>
    <Seo 
      title={"2 варианта 1 ванной - RHOME"} description={"Текстура и расцветки плитки меняют пространство. Мы собрали для вас несколько примеров санузлов, где по дизайн-проекту подходило два варианта плитки."}
      location={"https://rhome.by/inspiration/articles/2-1varianta"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>2 варианта 1 ванной</h1>
          <StaticImage
            src="../../../images/inspiration/articles/2-1varianta/11_2-1varianta.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/2-1varianta/00_2-1varianta.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Текстура и расцветки плитки меняют пространство. Мы собрали для вас несколько примеров санузлов, где по дизайн-проекту подходило два варианта плитки. Какую выбрать? Это дело вкуса!</p>
        </div>


        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/2-1varianta/05_2-1varianta.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/2-1varianta/08_2-1varianta.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
            </div>
            <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/2-1varianta/06_2-1varianta.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/2-1varianta/07_2-1varianta.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
            </div>
            <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/2-1varianta/01_2-1varianta.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/2-1varianta/02_2-1varianta.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
            </div>
            <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/2-1varianta/03_2-1varianta.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/2-1varianta/10_2-1varianta.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
            </div>
            <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/2-1varianta/09_2-1varianta.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/2-1varianta/04_2-1varianta.jpg"
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