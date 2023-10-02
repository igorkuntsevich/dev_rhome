import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "../../components/styles/services.module.scss"
import { BreadcrumbsServices } from "../../subitems/breadcrumbs/services"
import { BuildingOtherServices } from "../../subitems/other-services/building"
import { ApprovalOtherServices } from "../../subitems/other-services/approval"
import { FacadeOtherServices } from "../../subitems/other-services/facade"
import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"








const ServicesSupervision = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/services/supervision"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.services_intro + " " + styles.services_intro_supervision}>
        <BreadcrumbsServices />
        <h1 className={styles.services_intro_title}>Авторский надзор</h1>
      </div>
      <div className={styles.services_intro_text + " " + styles.services_intro_supervision_text}>
        <p className={styles.services_intro_text_p}>Услуга гарантирует, что реализованный<br />проект будет в точности соответствовать согласованному плану.</p>
        <span className={styles.services_intro_text_span}>Архитектор берёт на себя ответственность за результат<br />стройки и каждый этап процесса.</span>
      </div>

    </div>
    <div className="wrapper">
      <div className="line"></div>
      <div className={styles.services__lefttitle_righttext + " " + styles.services__lefttitle_righttext__bigmargin}>
        <h2 className={styles.services__lefttitle_righttext__title}>Что входит в&nbsp;услугу</h2>
        <div className={styles.services__lefttitle_righttext__text}>
          <ul>
            <li className={styles.services__lefttitle_righttext__text_li}>Подбор поставщиков.</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Подготовка ТЗ&nbsp;и&nbsp;консультации поставщиков и&nbsp;исполнителей для подготовки коммерческих предложений.</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Анализ коммерческих предложений и&nbsp;спецификаций от&nbsp;поставщиков и&nbsp;смежных компаний.</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Подготовка графика поставки материалов на&nbsp;объект.</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Ведение журнала авторского надзора с&nbsp;полным отображением истории объекта.</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Разработка конструктивных узлов и&nbsp;консультация специалистов по&nbsp;особенностям монтажа конструкций.</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Представление интересов заказчика на&nbsp;всех этапах строительства.</li>
            <li className={styles.services__lefttitle_righttext__text_li}>Контроль соответствия ремонтно-отделочных работ дизайн-проекту.</li>
          </ul>
        </div>
      </div>
      <div className={styles.services__estimate}>
        <div className={styles.services__estimate_left}>
          <h3 className={styles.services__estimate_title}>Стоимость</h3>
          <div>
            <p className={styles.services__estimate_p}>Стоимость авторского надзора рассчитывается индивидуально и&nbsp;зависит от&nbsp;масштаба и&nbsp;сложности дизайн-проекта. Однако с&nbsp;авторским надзором проект обычно обходится дешевле, так как не&nbsp;нужно тратить время и&nbsp;деньги на&nbsp;исправление ошибок.</p>
          </div>
        </div>
        <div className={styles.services__estimate_right}>
          <div className={styles.services__estimate_right_text}>
            <p className={styles.services__estimate_right_text_p}>Средняя стоимость в&nbsp;месяц</p>
            <p className={styles.services__estimate_right_text_cost}>&asymp; 150&nbsp;$</p>
          </div>
        </div>
      </div>
      <div className={styles.other_services}>
        <h2 className={styles.other_services_title}>Дополнительные услуги</h2>
        <div className={styles.other_services_items}>
          <BuildingOtherServices />
          <ApprovalOtherServices />
          <FacadeOtherServices />
        </div>
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ServicesSupervision