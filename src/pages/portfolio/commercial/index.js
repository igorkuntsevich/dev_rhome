import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { Link } from "gatsby"
import { PortfolioItem } from "../../../subitems/portfolio"

import * as styles from "../../../components/styles/portfolio/portfolio.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { StaticImage } from 'gatsby-plugin-image'

const PortfolioCommercial = () => (
  <Layout>
    <Seo 
      title={"Примеры дизайна офисов, ресторанов и кафе от дизайн-студии RHome"} description={"Портфолио, фото интерьеров до и после, чертежи, 3D-проекты."}
      location={"https://rhome.by/portfolio/commercial"}
      image={"https://rhome.by/images/portfolio/photos/170-kv-metrov/01_170-kv-metrov.jpg"}
    />
    <div className="wrapper">
      <div className={styles.portfolio_intro}>
        <div>
          <h1 className={styles.portfolio_intro_title}>Портфолио</h1>
        </div>
        <div className={styles.portfolio_intro_list}>
          <Link to="/portfolio" className={styles.portfolio_intro_link}>Все проекты</Link>
          <Link to="/portfolio/house" className={styles.portfolio_intro_link}>Дома</Link>
          <Link to="/portfolio/apartment" className={styles.portfolio_intro_link}>Квартиры</Link>
          <Link to="/portfolio/commercial" className={styles.portfolio_intro_link} activeClassName={styles.portfolio_intro_active_link}>Коммерческие объекты</Link>
          <Link to="/portfolio/facade" className={styles.portfolio_intro_link}>Фасады</Link>
        </div>
      </div>
      <div className={styles.portfolio_content}>
        <PortfolioItem
          url="/portfolio/commercial/ofis-bryussel"
          title="Офис в Брюсселе"
          metr="100"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/ofis-bryussel/00_ofis-bryussel.jpg"
              alt=""
            />
          }
        />

        <PortfolioItem
          url="/portfolio/commercial/ofis-pobediteley"
          title="Офис на Победителей"
          metr="194"
          building=""
          budget={styles.portfolio_item_cost1}
          image={
            <StaticImage
              src="../../../images/portfolio/ofis-pobediteley/00_ofis-pobediteley.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/commercial/azs-gute"
          title="Дизайн интерьера АЗС в Гуте"
          metr="150"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/azs-gute/00_azs-gute.jpg"
              alt=""
            />
          }
        />

         <PortfolioItem
          url="/portfolio/commercial/ofis-logisticheskoj-kompanii"
          title="Офис логистической компании"
          metr="152"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/ofis-logisticheskoj-kompanii/00_ofis-logisticheskoj-kompanii.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/commercial/spa-krym"
          title="SPA в Крыму"
          metr="94"
          building="4 месяца"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/spa-krym/00_spa-krym.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/commercial/azs-rechitsa"
          title="Дизайн интерьера АЗС в Речице"
          metr="80"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/azs-rechitsa/00_azs-rechitsa.jpg"
              alt=""
            />
          }
        />

         <PortfolioItem
          url="/portfolio/commercial/launzh-bar"
          title="Лаунж-бар"
          metr="200"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/launzh-bar/00_launzh-bar.jpg"
              alt=""
            />
          }
        />

        <PortfolioItem
          url="/portfolio/commercial/interer-gostinitsy"
          title="Интерьер гостиницы"
          metr="450"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/interer-gostinitsy/00_interer-gostinitsy.jpg"
              alt=""
            />
          }
        />

        <PortfolioItem
          url="/portfolio/commercial/ofis-sovremenni"
          title="Интерьер офисов в современном стиле"
          metr="179"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/ofis-sovremenni/00_ofis-sovremenni.jpg"
              alt=""
            />
          }
        />

        <PortfolioItem
          url="/portfolio/commercial/ofis-silvano"
          title="Офис Silvano Fashion"
          metr="150"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/ofis-silvano/00_ofis-silvano.jpg"
              alt=""
            />
          }
        />

      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)
export default PortfolioCommercial