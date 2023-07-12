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
      title={"Полезные статьи и лучшие интерьеры для вдохновения - RHOME"} description={"Посмотрите проекты, которыми мы вдохновляемся, почитайте полезные советы и идеи по обустройству дома"}
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
          url="/inspiration/articles/trend-kuhni/"
          backgroundColor="#FAF0BC"
          title="Новый тренд в интерьере кухни-гостиной"
          chapter="Тенденции"
        />
        <InspirationArticle
          url="/inspiration/articles/gira/"
          backgroundColor="#F6F1ED"
          title="Что нового появилось на рынке розеток?"
          chapter="Технологии"
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
        <InspirationArticle
          url="/inspiration/articles/2-1varianta/"
          backgroundColor="#F6F1ED"
          title="Два варианта одной ванны"
          chapter="Дизайн интерьера"
        />
        <InspirationArticle
          url="/inspiration/articles/shower-only/"
          backgroundColor="#FFD7C8"
          title="Душевая вместо ванной – кому подойдет?"
          chapter="Полезные советы"
        />
        <InspirationArticle
          url="/inspiration/articles/krupnoformatnaya-plitka/"
          backgroundColor="#F6F1ED"
          title="Крупноформатная плитка в интерьере"
          chapter="Тенденции"
        />
       <InspirationArticle
          url="/inspiration/articles/arhitektura-helsinki/"
          backgroundColor="#B1C8DD"
          title="Современная архитектура: 5 важных зданий Хельсинки"
          chapter="Интересное"
        />
        <InspirationArticle
          url="/inspiration/articles/oformleniya-detskoj/"
          backgroundColor="#FAF0BC"
          title="Идеи для оформления детской"
          chapter="Полезные советы"
        />
        <InspirationArticle
          url="/inspiration/articles/dizajn-odnokomnatnoj-kvartiry/"
          backgroundColor="#CDDBC7"
          title="Дизайн однокомнатной квартиры"
          chapter="Дизайн интерьера"
        />
        <InspirationArticle
          url="/inspiration/articles/ar-deko/"
          backgroundColor="#F6F1ED"
          title="Ар-деко"
          chapter="Стили в интерьере"
        />
        <InspirationArticle
          url="/inspiration/articles/komnatny-rastenija/"
          backgroundColor="#FAF0BC"
          title="Топ популярных комнатных растений, которые не требуют особого ухода"
          chapter="Интересное"
        />
        <InspirationArticle
          url="/inspiration/articles/trendy-2019/"
          backgroundColor="#B1C8DD"
          title="Тренды 2019: что будет модно в дизайне интерьера в этом году"
          chapter="Тенденции"
        />
        <InspirationArticle
          url="/inspiration/articles/minimalizm/"
          backgroundColor="#FAF0BC"
          title="Минимализм"
          chapter="Стили в интерьере"
        />
        <InspirationArticle
          url="/inspiration/articles/mezhkomnatnye-dveri/"
          backgroundColor="#F6F1ED"
          title="Какие межкомнатные двери выбрать, чтобы быть в тренде"
          chapter="Полезные советы"
        />
        <InspirationArticle
          url="/inspiration/articles/botanicheskij-print/"
          backgroundColor="#CDDBC7"
          title="Ботанический принт в интерьере: как использовать"
          chapter="Тенденции"
        />
        <InspirationArticle
          url="/inspiration/articles/modern/"
          backgroundColor="#F6F1ED"
          title="Модерн"
          chapter="Стили в интерьере"
        />
        <InspirationArticle
          url="/inspiration/articles/predmetni-dizajn/"
          backgroundColor="#FAF0BC"
          title="Самые узнаваемые шедевры предметного дизайна"
          chapter="Интересное"
        />
        <InspirationArticle
          url="/inspiration/articles/skandinavskij-stil/"
          backgroundColor="#CFA78E"
          title="Скандинавский стиль"
          chapter="Стили в интерьере"
        />
        <InspirationArticle
          url="/inspiration/articles/zonirovanie/"
          backgroundColor="#B1C8DD"
          title="Зонирование пространства в интерьере: 5 самых популярных приемов"
          chapter="Полезные советы"
        />
        <InspirationArticle
          url="/inspiration/articles/modnye-tsveta/"
          backgroundColor="#FFD7C8"
          title="Модные цвета в интерьере: как их использовать"
          chapter="Тенденции"
        />
        <InspirationArticle
          url="/inspiration/articles/avtonomnye-doma/"
          backgroundColor="#CDDBC7"
          title="Лучшие автономные дома мира"
          chapter="Технологии"
        />
        <InspirationArticle
          url="/inspiration/articles/dorogoj-interer/"
          backgroundColor="#F6F1ED"
          title="Как создать «дорогой» интерьер: 5 советов от наших дизайнеров"
          chapter="Полезные советы"
        />
        <InspirationArticle
          url="/inspiration/articles/trendy-2018/"
          backgroundColor="#FFD7C8"
          title="Что актуально в дизайне интерьера в 2018"
          chapter="Тенденции"
        />
        <InspirationArticle
          url="/inspiration/articles/mebeli-ikea/"
          backgroundColor="#FAF0BC"
          title="Пять ключевых предметов мебели IKEA, не теряющих свою актуальность"
          chapter="Интересное"
        />
        <InspirationArticle
          url="/inspiration/articles/ofis-v-kvartire/"
          backgroundColor="#F6F1ED"
          title="Как организовать домашний офис в небольшой квартире"
          chapter="Полезные советы"
        />
        <InspirationArticle
          url="/inspiration/articles/clever-house/"
          backgroundColor="#CDDBC7"
          title="Все о системе «умный дом»"
          chapter="Технологии"
        />
        <InspirationArticle
          url="/inspiration/articles/endentsii-oboev/"
          backgroundColor="#CFD6D6"
          title="Модные тенденции обоев 2018 года"
          chapter="Тенденции"
        />
        <InspirationArticle
          url="/inspiration/articles/about-ventilyatsiya/"
          backgroundColor="#B1C8DD"
          title="Кому нужна вентиляция и как ее выбрать"
          chapter="Полезные советы"
        />
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)
export default Articles