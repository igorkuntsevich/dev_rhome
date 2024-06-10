import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { BreadcrumbsAbout } from "../../subitems/breadcrumbs/about"
import * as styles from "../../components/styles/about/reviews.module.scss"
import { ReviewAlexandr } from "../../subitems/reviews/reviewAlexandr"
import { ReviewAlla } from "../../subitems/reviews/reviewAlla"
import { ReviewBelinskogo } from "../../subitems/reviews/reviewBelinskogo"
import { ReviewBelomorskaya } from "../../subitems/reviews/reviewBelomorskaya"
import { ReviewBerezovayaRoshcha } from "../../subitems/reviews/reviewBerezovayaRoshcha"
import { ReviewBorovliani } from "../../subitems/reviews/reviewBorovliani"
import { ReviewDiana } from "../../subitems/reviews/reviewDiana"
import { ReviewGalina } from "../../subitems/reviews/reviewGalina"
import { ReviewMarina } from "../../subitems/reviews/reviewMarina"
import { ReviewMstislavtsa } from "../../subitems/reviews/reviewMstislavtsa"
import { ReviewProvans } from "../../subitems/reviews/reviewProvans"
import { ReviewSilvano } from "../../subitems/reviews/reviewSilvano"
import { ReviewVeronika } from "../../subitems/reviews/reviewVeronika"
import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"


const Reviews = () => (
  <Layout>
    <Seo 
      title={"Отзывы о работе дизайн студии «Rhome» | 200+ проектов"} description={"Отзывы о работе дизайн студии Rhome – качественная работа, прозрачные условия, цены, фото портфолио, более 200 успешных проектов."}
      location={"https://rhome.by/about/reviews"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.reviews_intro}>
        <div>
          <BreadcrumbsAbout />
          <h1 className={styles.reviews_intro_title}>Отзывы</h1>
        </div>
      </div>
      <div className={styles.reviews_grid}>
        <div className={styles.reviews_flex}>
          <ReviewMstislavtsa />
          <ReviewProvans />
          <ReviewSilvano />
          <ReviewAlexandr />
          <ReviewBelinskogo />
          <ReviewDiana />
          <ReviewMarina />
        </div>
        <div className={styles.reviews_flex}>
          <ReviewAlla />
          <ReviewBelomorskaya />
          <ReviewBerezovayaRoshcha />
          <ReviewBorovliani />
          <ReviewGalina />
          <ReviewVeronika />
        </div>
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default Reviews