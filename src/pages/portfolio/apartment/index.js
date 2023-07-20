import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { Link } from "gatsby"
import { PortfolioItem } from "../../../subitems/portfolio"

import * as styles from "../../../components/styles/portfolio/portfolio.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { StaticImage } from 'gatsby-plugin-image'

const PortfolioApartment = () => (
  <Layout>
    <Seo 
      title={"Портфолио дизайн проектов квартир от RHome"} description={"Фото реализованных интерьеров до и после, чертежи, 3D-проекты."}
      location={"https://rhome.by/portfolio/apartment"}
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
          <Link to="/portfolio/apartment" className={styles.portfolio_intro_link} activeClassName={styles.portfolio_intro_active_link}>Квартиры</Link>
          <Link to="/portfolio/commercial" className={styles.portfolio_intro_link}>Коммерческие объекты</Link>
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

        <PortfolioItem
          url="/portfolio/apartment/kvartira-dlya-dvoih"
          title="Квартира в ЖК «D3»"
          metr="109"
          building="10 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-dlya-dvoih/00_kvartira-dlya-dvoih.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-myastrovskaya"
          title="Квартира на Мястровской"
          metr="150"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-myastrovskaya/00_kvartira-myastrovskaya.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-dzerzhinskogo"
          title="Квартира на Дзержинского 19"
          metr="87"
          building="8 месяцев"
          budget={styles.portfolio_item_cost3}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-dzerzhinskogo/00_kvartira-dzerzhinskogo.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/stalinka-nezavisimosti"
          title="Сталинка в Минске"
          metr="74"
          building="8 месяцев"
          budget={styles.portfolio_item_cost1}
          image={
            <StaticImage
              src="../../../images/portfolio/stalinka-nezavisimosti/00_stalinka-nezavisimosti.jpg"
              alt=""
            />
          }
        />

         <PortfolioItem
          url="/portfolio/apartment/apartamenty-bryussel"
          title="Неоклассика в Брюсселе"
          metr="96"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/apartamenty-bryussel/00_apartamenty-bryussel.jpg"
              alt=""
            />
          }
        />

        <PortfolioItem
          url="/portfolio/apartment/kvartira-dvuhurovnevaya"
          title="Двухуровневая квартира на Васнецова"
          metr="152"
          building="11 месяцев"
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-dvuhurovnevaya/00_kvartira-dvuhurovnevaya.jpg"
              alt=""
            />
          }
        />

          <PortfolioItem
          url="/portfolio/apartment/kvartira-novojaborovoja"
          title="Современная квартира в ЖК «Новая Боровая»"
          metr="75"
          building="7 месяцев"
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-novojaborovoja/00_kvartira-novojaborovoja.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/interer-bryussel-sovremennyj"
          title="Современный интерьер в Брюсселе"
          metr="98"
          building="6 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/interer-bryussel-sovremennyj/00_interer-bryussel-sovremennyj.jpg"
              alt=""
            />
          }
        />

          <PortfolioItem
          url="/portfolio/apartment/kvartira-prestigino"
          title="Квартира в ЖК «Престижино»"
          metr="96"
          building="7 месяцев"
          budget={styles.portfolio_item_cost1}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-prestigino/00_kvartira-prestigino.jpg"
              alt=""
            />
          }
        />
         <PortfolioItem
          url="/portfolio/apartment/kvartira-parus"
          title="Квартира на ул. Сторожевская"
          metr="116"
          building="10 месяцев"
          budget={styles.portfolio_item_cost3}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-parus/00_kvartira-parus.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-dlya-semi"
          title="Интерьер квартиры для семьи"
          metr="80"
          building="10 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-dlya-semi/00_kvartira-dlya-semi.jpg"
              alt=""
            />
          }
        />
         <PortfolioItem
          url="/portfolio/apartment/kvartira-promenad"
          title="Квартира в ЖК “Променад”"
          metr="122"
          building="8 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-promenad/00_kvartira-promenad.jpg"
              alt=""
            />
          }
        />
         <PortfolioItem
          url="/portfolio/apartment/kvartira-mstislavtsa"
          title="Монохромная квартира на ул. Мстиславца"
          metr="48"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-mstislavtsa/00_kvartira-mstislavtsa.jpg"
              alt=""
            />
          }
        />
       <PortfolioItem
          url="/portfolio/apartment/kvartira-skandinavsk"
          title="Современная квартира с нотками скандинавского стиля"
          metr="113"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-skandinavsk/00_kvartira-skandinavsk.jpg"
              alt=""
            />
          }
        />
         <PortfolioItem
          url="/portfolio/apartment/kvartira-timiryazeva"
          title="Квартира с камином на Тимирязева"
          metr="89"
          building="7 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-timiryazeva/00_kvartira-timiryazeva.jpg"
              alt=""
            />
          }
        />
         <PortfolioItem
          url="/portfolio/apartment/kvartira-storozhevskaya"
          title="Квартира на ул. Сторожевская"
          metr="270"
          building="13 месяцев"
          budget={styles.portfolio_item_cost3}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-storozhevskaya/00_kvartira-storozhevskaya.jpg"
              alt=""
            />
          }
        />
          <PortfolioItem
          url="/portfolio/apartment/neoklassika-d3"
          title="Неоклассика в ЖК D3"
          metr="80"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/neoklassika-d3/00_neoklassika-d3.jpg"
              alt=""
            />
          }
        />
          <PortfolioItem
          url="/portfolio/apartment/kvartira-pirs"
          title="Квартира в ЖК “Пирс”"
          metr="160"
          building="12 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-pirs/00_kvartira-pirs.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartiry-dve"
          title="Две квартиры для одной семьи"
          metr="100"
          building="10 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartiry-dve/00_kvartiry-dve.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-vostochnaya"
          title="Квартира по ул. Восточная"
          metr="95"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-vostochnaya/00_kvartira-vostochnaya.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-moskva"
          title="Квартира в Москве"
          metr="200"
          building="14 месяцев"
          budget={styles.portfolio_item_cost3}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-moskva/00_kvartira-moskva.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-aviatsionnaya"
          title="Квартира на Авиационной"
          metr="80"
          building="6 месяцев"
          budget={styles.portfolio_item_cost1}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-aviatsionnaya/00_kvartira-aviatsionnaya.jpg"
              alt=""
            />
          }
        />
         <PortfolioItem
          url="/portfolio/apartment/kvartira-traditsionnaya"
          title="Квартира в традиционном стиле"
          metr="70"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-traditsionnaya/00_kvartira-traditsionnaya.jpg"
              alt=""
            />
          }
        />
         <PortfolioItem
          url="/portfolio/apartment/kvartira-minsk-mira"
          title="Трехкомнатная квартира в ЖК Минск Мир"
          metr="90"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-minsk-mir/00_kvartira-minsk-mir.jpg"
              alt=""
            />
          }
        />
         <PortfolioItem
          url="/portfolio/apartment/bitva-dizajnerov-onliner"
          title="«Битва дизайнеров» для Onliner"
          metr="52"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/bitva-dizajnerov-onliner/00_bitva-dizajnerov-onliner.jpg"
              alt=""
            />
          }
        />
         <PortfolioItem
          url="/portfolio/apartment/kvartira-marina4"
          title="Квартира в жилом доме Марина-4"
          metr="68"
          building=""
          budget={styles.portfolio_item_cost1}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-marina4/00_kvartira-marina4.jpg"
              alt=""
            />
          }
        />
         <PortfolioItem
          url="/portfolio/apartment/kvartira-svetlyd3"
          title="Светлый интерьер квартиры в ЖК D3"
          metr="86"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-svetlyd3/00_kvartira-svetlyd3.jpg"
              alt=""
            />
          }
        />
          <PortfolioItem
          url="/portfolio/apartment/kvartira-belinskogo"
          title="Квартира на ул. Белинского"
          metr="72"
          building=""
          budget={styles.portfolio_item_cost1}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-belinskogo/00_kvartira-belinskogo.jpg"
              alt=""
            />
          }
        />
         <PortfolioItem
          url="/portfolio/apartment/kvartira-trehkomnatnaya-d3"
          title="Трехкомнатная квартира в ЖК D3"
          metr="87"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-trehkomnatnaya-d3/00_kvartira-trehkomnatnaya-d3.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-olimpik-park"
          title="Квартира в ЖК «Олимпик Парк»"
          metr="116"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-olimpik-park/00_kvartira-olimpik-park.jpg"
              alt=""
            />
          }
        />
          <PortfolioItem
          url="/portfolio/apartment/kvartira-chajkovskij"
          title="Квартира с контрастными элементами в ЖК «Чайковский»"
          metr="70"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-chajkovskij/00_kvartira-chajkovskij.jpg"
              alt=""
            />
          }
        />
          <PortfolioItem
          url="/portfolio/apartment/kvartira-uyutnaya"
          title="Квартира в стиле «уютный минимализм»"
          metr="114"
          building="10 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-uyutnaya/00_kvartira-uyutnaya.jpg"
              alt=""
            />
          }
        />
       <PortfolioItem
          url="/portfolio/apartment/kvartira-borovlyani"
          title="Квартира в Боровлянах"
          metr="70"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-borovlyani/00_kvartira-borovlyani.jpg"
              alt=""
            />
          }
        />
               <PortfolioItem
          url="/portfolio/apartment/kvartira-studiya"
          title="Квартира-студия на Аэродромной"
          metr="58"
          building="5 месяцев"
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-studiya/00_kvartira-studiya.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-semenyako"
          title="Трехкомнатная квартира на Семеняко 15"
          metr="76,8"
          building="6 месяцев"
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-semenyako/00_kvartira-semenyako.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-slavyanskom"
          title="Трехкомнатная квартира в Славянском Квартале"
          metr="117"
          building="10 месяцев"
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-slavyanskom/00_kvartira-slavyanskom.jpg"
              alt=""
            />
          }
        />
          <PortfolioItem
          url="/portfolio/apartment/kvartira-natural"
          title="Квартира на проспекте Дзержинского"
          metr="108"
          building="9 месяцев"
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-natural/00_kvartira-natural.jpg"
              alt=""
            />
          }
        />
         <PortfolioItem
          url="/portfolio/apartment/kvartira-borisov"
          title="Квартира в Борисове в темных тонах"
          metr="146"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-borisov/00_kvartira-borisov.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-megapolis"
          title="Квартира в светлых тонах в ЖК «Мегаполис»"
          metr="120"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-megapolis/00_kvartira-megapolis.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-belomorskaya"
          title="Квартира на ул. Беломорская"
          metr="104"
          building=""
          budget={styles.portfolio_item_cost2}
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-belomorskaya/00_kvartira-belomorskaya.jpg"
              alt=""
            />
          }
        />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-braslavskij"
          title="Квартира в ЖК «Браславский»"
          metr="120"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-braslavskij/00_kvartira-braslavskij.jpg"
              alt=""
            />
          }
        />
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)
export default PortfolioApartment