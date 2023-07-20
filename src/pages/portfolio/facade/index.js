import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { Link } from "gatsby"
import { PortfolioItem } from "../../../subitems/portfolio"

import * as styles from "../../../components/styles/portfolio/portfolio.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { StaticImage } from 'gatsby-plugin-image'

const PortfolioFacade = () => (
  <Layout>
    <Seo 
      title={"Примеры дизайна фасадов частных домов и коттеджей от дизайн-студии RHome"} description={"Портфолио, фото домов до и после, чертежи, 3D-проекты."}
      location={"https://rhome.by/portfolio/facade"}
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
          <Link to="/portfolio/commercial" className={styles.portfolio_intro_link}>Коммерческие объекты</Link>
          <Link to="/portfolio/facade" className={styles.portfolio_intro_link} activeClassName={styles.portfolio_intro_active_link}>Фасады</Link>
        </div>
      </div>
      <div className={styles.portfolio_content}>
        <PortfolioItem
          url="/portfolio/facade/dom-barnhaus"
          title="Дом в стиле Барнхаус"
          metr="200"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/dom-barnhaus/00_dom-barnhaus.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/facade/dom-podmoskove"
          title="Дом в&nbsp;Подмосковье"
          metr="350"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/dom-podmoskove/00_dom-podmoskove.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/facade/dom-staroeselo"
          title="Дом в Старом селе"
          metr="350"
          building=""
          budget={styles.portfolio_item_cost1}
          image={
            <StaticImage
              src="../../../images/portfolio/dom-staroeselo/00_dom-staroeselo.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/facade/dom-avtonomnyj"
          title="Автономный дом в Литве"
          metr="206"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/dom-avtonomnyj/00_dom-avtonomnyj.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/facade/dom-terassa"
          title="Автономный дом в Литве"
          metr="450"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/dom-terassa/00_dom-terassa.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/facade/fasad-borovlyany"
          title="Фасад дома в Боровлянах"
          metr="450"
          building="3 месяца"
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/fasad-borovlyany/00_fasad-borovlyany.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/facade/polskij-proekt"
          title="Польский проект"
          metr="280"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/polskij-proekt/00_polskij-proekt.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/facade/dom-provintsialnyj"
          title="Провинциальный дом"
          metr="160"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/dom-provintsialnyj/00_dom-provintsialnyj.jpg"
              alt=""
            />
          }
        />
          <PortfolioItem
          url="/portfolio/facade/fasad-mogilev"
          title="Фасад дома в Могилеве"
          metr="300"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/fasad-mogilev/00_fasad-mogilev.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/facade/fasad-sovremennyj"
          title="Современный фасад дома"
          metr="250"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/fasad-sovremennyj/00_fasad-sovremennyj.jpg"
              alt=""
            />
          }
        />
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)
export default PortfolioFacade