import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { Link } from "gatsby"
import { PortfolioItem } from "../../../subitems/portfolio"

import * as styles from "../../../components/styles/portfolio/portfolio.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { StaticImage } from 'gatsby-plugin-image'

const PortfolioHouse = () => (
  <Layout>
    <Seo 
      title={"Портфолио проектов частных домов и коттеджей от RHome"} description={"Примеры реализованных интерьеров, фото было/стало, чертежи, 3D проекты"}
      location={"https://rhome.by/portfolio/house"}
      image={"https://rhome.by/images/portfolio/photos/170-kv-metrov/01_170-kv-metrov.jpg"}
    />
    <div className="wrapper">
      <div className={styles.portfolio_intro}>
        <div>
          <h1 className={styles.portfolio_intro_title}>Портфолио</h1>
        </div>
        <div className={styles.portfolio_intro_list}>
          <Link to="/portfolio" className={styles.portfolio_intro_link}>Все проекты</Link>
          <Link to="/portfolio/house" className={styles.portfolio_intro_link} activeClassName={styles.portfolio_intro_active_link}>Дома
          <div className={styles.animline}></div>
          </Link>
          <Link to="/portfolio/apartment" className={styles.portfolio_intro_link}>Квартиры</Link>
          <Link to="/portfolio/commercial" className={styles.portfolio_intro_link}>Коммерческие объекты</Link>
          <Link to="/portfolio/facade" className={styles.portfolio_intro_link}>Фасады</Link>
        </div>
      </div>
      <div className={styles.portfolio_content}>
        <PortfolioItem
          url="/portfolio/house/dom-ptich"
          title="Дом в&nbsp;поселке Птичь"
          metr="260"
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
          url="/portfolio/house/barnhaus-gorani"
          title="Горани Барнхаус"
          metr="250"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/barnhaus-gorani/00_barnhaus-gorani.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/dom-leskovka"
          title="Дом в Лесковке"
          metr="220"
          building="18 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/dom-leskovka/00_dom-leskovka.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/interior-borovlyany"
          title="Интерьер дома в Боровлянах"
          metr="255"
          building="16 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/interior-borovlyany/00_interior-borovlyany.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/dom-berezino"
          title="Дом на Березине"
          metr="260"
          building="18 месяцев"
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/dom-berezino/00_dom-berezino.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/monohrom-zelenaya-gavan"
          title="Монохромный интерьер дома в Зеленой Гавани"
          metr="182"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/monohrom-zelenaya-gavan/00_monohrom-zelenaya-gavan.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/dom-maryalivo"
          title="Дом в Марьяливо"
          metr="450"
          building="18 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/dom-maryalivo/00_dom-maryalivo.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/dom-mozyr"
          title="Современный интерьер дома в Мозыре"
          metr="250"
          building="14 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/dom-mozyr/00_dom-mozyr.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/dom-berezovaya-roshha"
          title="Дом в Березовой роще"
          metr="250"
          building="14 месяцев"
          budget={styles.portfolio_item_cost3}
          image={
            <StaticImage
              src="../../../images/portfolio/dom-berezovaya-roshha/00_dom-berezovaya-roshha.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/interer-zelenoja-gavan"
          title="Интерьер дома в Зеленой Гавани"
          metr="189"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/interer-zelenoja-gavan/00_interer-zelenoja-gavan.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/dom-zhdanovichi"
          title="Элегантный дом в Ждановичах"
          metr="310"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/dom-zhdanovichi/00_dom-zhdanovichi.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/dom-raubichy"
          title="Дом в Раубичах"
          metr="500"
          building="18 месяцев"
          budget={styles.portfolio_item_cost3}
          image={
            <StaticImage
              src="../../../images/portfolio/dom-raubichy/00_dom-raubichy.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/dom-skandinavsk-shale"
          title="Загородный дом по мотивам скандинавских шале"
          metr="180"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/dom-skandinavsk-shale/00_dom-skandinavsk-shale.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/malesuada-fames"
          title="Дом в скандинавском стиле"
          metr="600"
          building="24 месяцев"
          budget={styles.portfolio_item_cost3}
          image={
            <StaticImage
              src="../../../images/portfolio/malesuada-fames/00_malesuada-fames.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/interer-sovremenni"
          title="Светлый интерьер в современном стиле"
          metr="91"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/interer-sovremenni/00_interer-sovremenni.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/interer-gomel"
          title="Интерьер дома в Гомеле"
          metr="450"
          building=""
          budget={styles.portfolio_item_cost3}
          image={
            <StaticImage
              src="../../../images/portfolio/interer-gomel/00_interer-gomel.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/dom-provans"
          title="Современный дом с элементами прованса"
          metr="130"
          building=""
          budget={styles.portfolio_item_cost1}
          image={
            <StaticImage
              src="../../../images/portfolio/dom-provans/00_dom-provans.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/kottedzh-zatsen"
          title="Коттедж в Зацени"
          metr="180"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kottedzh-zatsen/00_kottedzh-zatsen.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/house/dom-alpshale"
          title="Интерьер дома с мотивами шале"
          metr="401"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/dom-alpshale/00_dom-alpshale.jpg"
              alt=""
            />
          }
        />
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)
export default PortfolioHouse