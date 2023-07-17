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
      title={""} description={""}
      location={"https://rhome.by/portfolio/facade"}
      image={"https://rhome.by/images/portfolio/photos/170-kv-metrov/01_170-kv-metrov.jpg"}
    />
    <div className="wrapper">
      <div className={styles.portfolio_intro + " " + styles.portfolio_intro_index}>
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
          url="/portfolio/house/dom-ptich"
          title="Дом в&nbsp;поселке Птичь"
          metr=""
          building="18 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/dom-ptich/00_dom-ptich.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/shale-gorani"
          title="Шале в&nbsp;Горани"
          metr="260"
          building=""
          budget={styles.portfolio_item_cost3}
          image={
            <StaticImage
              src="../../../images/portfolio/shale-gorani/00_shale-gorani.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/dom-podmoskove"
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
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)
export default PortfolioFacade