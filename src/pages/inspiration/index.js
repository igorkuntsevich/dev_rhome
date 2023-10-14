import React, { Fragment } from "react";
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { BreadcrumbsAbout } from "../../subitems/breadcrumbs/about"
import { InspirationArticle } from "../../subitems/inspiration/inspiration-articles"
import { InspirationPhoto } from "../../subitems/inspiration/inspiration-photos"
import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"


import * as styles from "../../components/styles/about/inspiration.module.scss"
import { INSPIRATION_CONFIG } from "./config";
import useSWR from "swr";
import { fetcher } from "../../api/fetcher";
import { API } from "../../api/api";

const Inspiration = () => {
  const { data,  isLoading } = useSWR(API.getAllViews, fetcher)
  const safetyViewsList = data||[]
  return(

  <Layout>
    <Seo
      title={"Полезные статьи и лучшие интерьеры для вдохновения - RHOME"} description={"Посмотрите проекты, которыми мы вдохновляемся, почитайте полезные советы и идеи по обустройству дома"}
      location={"https://rhome.by/inspiration/"}
      image={"https://rhome.by/images/inspiration/photos/vintovaya-lestnitsa/01_vintovaya-lestnitsa.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro + " " + styles.inspiration_intro_index}>
        <div>
          <BreadcrumbsAbout />
          <h1 className={styles.inspiration_intro_title}>Вдохновение</h1>
        </div>
        <div className={styles.inspiration_intro_list}>
          <Link to="/inspiration" className={styles.inspiration_intro_link} activeClassName={styles.inspiration_intro_active_link}>Все сразу
          <div className={styles.animline}></div>
          </Link>
          <Link to="/inspiration/articles" className={styles.inspiration_intro_link}>Статьи</Link>
          <Link to="/inspiration/photos" className={styles.inspiration_intro_link}>Фотографии</Link>
        </div>
      </div>
      <div className={styles.inspiration_content}>
        {INSPIRATION_CONFIG.map((item , i)=>{

            const views = safetyViewsList?.[item.url]?.count||1
            const loadedViews  =isLoading?0 :views
          if(item.type==="photo"){
            return <InspirationPhoto  {...item} key={i} number={loadedViews}/>
          }
          if(item.type==="article"){
            return <InspirationArticle  {...item} key={i} number={loadedViews} />
          }else {
            return <Fragment key={i}></Fragment>
          }
        })}
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)}

export default Inspiration
