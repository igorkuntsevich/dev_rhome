import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { BreadcrumbsServices } from "../../subitems/breadcrumbs/services"
import { BuildingOtherServices } from "../../subitems/other-services/building"
import { SupervisionOtherServices } from "../../subitems/other-services/supervision"
import { FacadeOtherServices } from "../../subitems/other-services/facade"
import * as styles from "../../components/styles/services.module.scss"
import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"


const ServicesApproval = () => (
  <Layout>
    <Seo 
      title={"Согласование перепланировки квартиры, дизайн-проекта в Минске. Студия RHome"} description={"Юридическая поддержка, оформление и регистрация всех необходимых документов, полное согласование перепланировки квартиры. 👍 12 лет успешной реализации перепланировок и дизайн-проектов квартир в Минске и других городах Беларуси"}
      location={"https://rhome.by/services/approval"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.services_intro + " " + styles.services_intro_approval}>
        <BreadcrumbsServices />
        <h1 className={styles.services_intro_title}>Согласование перепланировки</h1>
      </div>
      <div className={styles.services_intro_text}>
        <p className={styles.services_intro_text_p}>Мы&nbsp;поможем вам пройти все этапы согласования вплоть до&nbsp;получения на&nbsp;руки нового техпаспорта объекта на&nbsp;выгодных и&nbsp;удобных для вас условиях.</p>
      </div>
    </div>
    <div className="wrapper">
      <div className="line"></div>
      <div className={styles.services__lefttitle_righttext + " " + styles.services__lefttitle_righttext__bigmargin}>
        <h2 className={styles.services__lefttitle_righttext__title}>Наши специалисты помогут вам в&nbsp;следующих вопросах:</h2>
        <div className={styles.services__lefttitle_righttext__text}>
          <ul>
            <li className={styles.services__lefttitle_righttext__text_li}>Реконструкция (раздел, присоединение, слияние и&nbsp;т.п.) объектов недвижимости.</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Перепланировка и&nbsp;переустройство квартир с&nbsp;обязательной разработкой проекта.</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Перепланировка с&nbsp;затрагиванием несущих конструкций (с&nbsp;обязательным заключением Госстройэкспертизы по&nbsp;проекту).</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Узаконивание самовольной перепланировки (переустройства).</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Проектирование перепланировки, переустройства, реконструкции.</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Обследование строительных конструкций и&nbsp;инженерных систем с&nbsp;подготовкой технического заключения.</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Технический надзор при перепланировке (переустройстве).</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Согласование кондиционеров и&nbsp;спутниковых антенн.</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Сдача в&nbsp;эксплуатацию квартир и&nbsp;индивидуальных домов.</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Регистрация изменений в&nbsp;правоустанавливающих документах (техпаспорт, свидетельство о&nbsp;регистрации).</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Получение всех необходимых разрешений, согласований и&nbsp;других необходимых процедур.</li>
          </ul>
        </div>
      </div>
      <div className={styles.other_services}>
        <h2 className={styles.other_services_title}>Дополнительные услуги</h2>
        <div className={styles.other_services_items}>
          <BuildingOtherServices />
          <SupervisionOtherServices />
          <FacadeOtherServices />
        </div>
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ServicesApproval