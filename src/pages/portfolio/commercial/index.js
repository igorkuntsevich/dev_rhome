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
      title={""} description={""}
      location={"https://rhome.by/portfolio/commercial"}
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
          <Link to="/portfolio/commercial" className={styles.portfolio_intro_link} activeClassName={styles.portfolio_intro_active_link}>Коммерческие объекты</Link>
          <Link to="/portfolio/facade" className={styles.portfolio_intro_link}>Фасады</Link>
        </div>
      </div>
      <div className={styles.portfolio_content}>
        <PortfolioItem
          url="/portfolio/apartment/zhk-farforovyj"
          title="ЖК&nbsp;Фарфоровый"
          metr="85"
          building="6 месяцев"
          budget={styles.portfolio_item_cost1}
          image={
            <StaticImage
              src="../../../images/portfolio/zhk-farforovyj/00_zhk-farforovyj.jpg"
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