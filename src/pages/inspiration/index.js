import React from 'react'
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { BreadcrumbsAbout } from "../../subitems/breadcrumbs/about"
import { InspirationArticle } from "../../subitems/inspiration/inspiration-articles"
import { InspirationPhoto } from "../../subitems/inspiration/inspiration-photos"
import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"


import * as styles from "../../components/styles/about/inspiration.module.scss"

const Articles = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/inspiration/"}
      image={"https://rhome.by/images/inspiration/photos/vintovaya-lestnitsa/01_vintovaya-lestnitsa.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsAbout />
        <h1 className={styles.inspiration_intro_title}>Вдохновение</h1>
      </div>
      <div className={styles.inspiration_content}>
        <InspirationArticle
          url="/1"
          backgroundColor="#B1C8DD"
          title="Новый тренд в&nbsp;интерьере кухни-гостиной"
          chapter="Технологии"
        />
        <InspirationPhoto
          url="/1"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/vintovaya-lestnitsa/03_vintovaya-lestnitsa.jpg"
          title="Резиденция площадью 157 кв.м.&nbsp;в&nbsp;Москве"
        />
        {/* <Link to="/1" className={styles.inspiration_item + " " + styles.inspiration_item_article} style={{"backgroundColor" : "#B1C8DD"}}>
          <div className={styles.inspiration_item_article_text}>
            <h2 className={styles.inspiration_item_article_title}>Новый тренд в&nbsp;интерьере кухни-гостиной</h2>
            <div className={styles.inspiration_item_article_caption}>
              <p className={styles.inspiration_item_article_p}>Технологии</p>
              <p className={styles.inspiration_item_article_number}>693</p>
            </div>
          </div>
        </Link> */}
        {/* <Link to="/1" className={styles.inspiration_item + " " + styles.inspiration_item_photo} style={{"backgroundImage" : `url("https://rhome.by/images/inspiration/photos/vintovaya-lestnitsa/03_vintovaya-lestnitsa.jpg")`}}>
          <div className={styles.inspiration_item_photo_text}>
            <h2 className={styles.inspiration_item_photo_title}>Резиденция площадью 157 кв.м.&nbsp;в&nbsp;Москве</h2>
            <div className={styles.inspiration_item_photo_caption}>
              <p className={styles.inspiration_item_photo_number}>693</p>
            </div>
          </div>
        </Link> */}
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default Articles