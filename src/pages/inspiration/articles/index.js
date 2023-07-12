import React from 'react'
import { Link } from "gatsby"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { BreadcrumbsAbout } from "../../../subitems/breadcrumbs/about"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const Articles = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/inspiration/"}
      image={"https://rhome.by/images/inspiration/photos/vintovaya-lestnitsa/01_vintovaya-lestnitsa.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <div>
          <BreadcrumbsAbout />
          <h1 className={styles.inspiration_intro_title}>Вдохновение</h1>
        </div>
        <div className={styles.inspiration_intro_list}>
          <Link to="/inspiration" className={styles.inspiration_intro_link} activeClassName={styles.inspiration_intro_active_link}>Все сразу</Link>
          <Link to="/inspiration/articles" className={styles.inspiration_intro_link} activeClassName={styles.inspiration_intro_active_link}>Статьи</Link>
          <Link to="/inspiration/photos" className={styles.inspiration_intro_link} activeClassName={styles.inspiration_intro_active_link}>Фотографии</Link>
        </div>
      </div>
      <div className={styles.inspiration_content}>
        <InspirationArticle
          url="/1"
          backgroundColor="#B1C8DD"
          title="Новый тренд в&nbsp;интерьере кухни-гостиной"
          chapter="Технологии"
        />
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)
export default Articles