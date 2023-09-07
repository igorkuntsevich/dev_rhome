import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { BreadcrumbsAbout } from "../../subitems/breadcrumbs/about"


import * as styles from "../../components/styles/about/reviews.module.scss"



import { ReviewMarina } from "../../subitems/reviews/reviewMarina"
import { ReviewVeronika } from "../../subitems/reviews/reviewVeronika"
import { ReviewGalina } from "../../subitems/reviews/reviewGalina"
import { ReviewDiana } from "../../subitems/reviews/reviewDiana"
import { ReviewBelinskogo } from "../../subitems/reviews/reviewBelinskogo"
import { ReviewBorovliani } from "../../subitems/reviews/reviewBorovliani"
import { ReviewAlexandr } from "../../subitems/reviews/reviewAlexandr"
import { ReviewBerezovayaRoshcha } from "../../subitems/reviews/reviewBerezovayaRoshcha"
import { ReviewSilvano } from "../../subitems/reviews/reviewSilvano"
import { ReviewBelomorskaya } from "../../subitems/reviews/reviewBelomorskaya"
import { ReviewProvans } from "../../subitems/reviews/reviewProvans"
import { ReviewAlla } from "../../subitems/reviews/reviewAlla"
import { ReviewMstislavtsa } from "../../subitems/reviews/reviewMstislavtsa"








// import * as vacancyStyles from "../../subitems/vacancy/vacancy.module.scss"

import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"


const Reviews = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/about/reviews"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.reviews_intro}>
        <div>
          <BreadcrumbsAbout />
          <h1 className={styles.reviews_intro_title}>Отзывы</h1>
        </div>
        {/* <div className={styles.inspiration_intro_list}>

        </div> */}
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