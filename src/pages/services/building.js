import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { BreadcrumbsServices } from "../../subitems/breadcrumbs/services"
import { ApprovalOtherServices } from "../../subitems/other-services/approval"
import { SupervisionOtherServices } from "../../subitems/other-services/supervision"
import { FacadeOtherServices } from "../../subitems/other-services/facade"
import { BuildingGallery } from "../../subitems/gallery/building-gallery"
import { ServicesInterests } from "../../subitems/services-cost/services-interests"
import { TermTabs } from "../../subitems/building-tabs"
import * as styles from "../../components/styles/services.module.scss"
import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"


const ServicesBuilding = () => (
  <Layout>
    <Seo 
      title={"Дизайн интерьера офиса в Минске и Беларуси под ключ. Студия дизайна RHome"} description={"Успешно создаем и реализуем дизайн-проекты коммерческих зданий и офисов по всей Беларуси уже более 12 лет. ✅  Полное сопровождение проекта от замера до ввода в эксплуатацию. 👷 Собственная команда профессиональных строителей и мастеров ремонтных работ."}
      location={"https://rhome.by/services/building"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.services_intro + " " + styles.services_intro_building}>
        <BreadcrumbsServices />
        <h1 className={styles.services_intro_title}>Строительные работы</h1>
      </div>
      <div className={styles.services_intro_text + " " + styles.services_intro_building_text}>
        <p className={styles.services_intro_text_p}>Предлагаем не&nbsp;только разработку дизайн-проекта, но&nbsp;и&nbsp;сопровождаем проект на&nbsp;всех этапах строительства.</p>
        <span className={styles.services_intro_text_span}>Мы&nbsp;работаем с&nbsp;проверенной командой строителей. Вам не&nbsp;нужно искать подрядчиков и&nbsp;поставщиков&nbsp;&mdash; мы&nbsp;ведем проекты от&nbsp;идеи до&nbsp;сдачи под ключ.</span>
      </div>
      <div className={styles.services__estimate}>
        <div className={styles.services__estimate_left}>
          <h3 className={styles.services__estimate_title}>Смета</h3>
          <div>
            <p className={styles.services__estimate_p}>Мы&nbsp;разрабатываем и&nbsp;презентуем подробные сметы на&nbsp;ремонтно-отделочные работы и&nbsp;материалы. Еще до&nbsp;начала строительных работы вы&nbsp;увидите, сколько будет стоить каждый этап работы и&nbsp;общую стоимость проекта.</p>
            <p className={styles.services__estimate_p}>На&nbsp;основе готового дизайн-проекта мы&nbsp;составляем подробную смету. На&nbsp;стоимость строительных работ влияет площадь объекта, сложность работ и&nbsp;цена используемых материалов.</p>
          </div>
        </div>
        <div className={styles.services__estimate_right}>
          <div className={styles.services__estimate_right_text}>
            <p className={styles.services__estimate_right_text_p}>Стоимость квадратного метра</p>
            <p className={styles.services__estimate_right_text_cost}>&asymp; 200&nbsp;$</p>
          </div>
        </div>
      </div>
      <TermTabs />
      <div className={styles.services_schedule}>
        <h3 className={styles.services_schedule_title}>Графики работ, оплат и&nbsp;поставок</h3>
        <p className={styles.services_schedule_text}>Предоставляем графики работ, оплат и&nbsp;поставок материалов. Графики нужны для того, чтобы отладить и&nbsp;сделать прозрачными все процессы. Вы&nbsp;заранее будете знать, когда и&nbsp;кем будут выполняться работы и&nbsp;когда нужно вносить оплату. Кроме того, раннее планирование позволяет избежать простоев и&nbsp;сократить время строительных работ.</p>
      </div>
      <BuildingGallery />
      <ServicesInterests />
      <div className="line"></div>
      <div className={styles.services__lefttitle_righttext}>
        <h2 className={styles.services__lefttitle_righttext__title}>Инженер по&nbsp;качеству на&nbsp;проекте</h2>
        <div className={styles.services__lefttitle_righttext__text}>
          <div>
            <p className={styles.services__lefttitle_righttext__text_span}>Каждая стадия строительства принимается аттестованным инженером. Его задача&nbsp;&mdash; проверять, чтобы все было выполнены в&nbsp;соответствии с&nbsp;технологическими нормами. Это позволяет перейти к&nbsp;новому этапу работ, убедившись, что не&nbsp;было допущено никаких ошибок. Контроль инженера по&nbsp;качеству экономит время и&nbsp;помогает избежать переделок по&nbsp;завершении ремонта.</p>
            <p className={styles.services__lefttitle_righttext__text_span}>Наши подрядчики имеют сертификаты, мы&nbsp;официально проводим оплаты и&nbsp;даем гарантию качества. У&nbsp;нас есть все официальные документы на&nbsp;любые виды строительных работ от&nbsp;заливки фундамента до&nbsp;укладки кровли. Работаем с&nbsp;объектами разных масштабов от&nbsp;квартир до&nbsp;торговых центров. Гарантируем качество строительных работ, ведь мы&nbsp;работаем с&nbsp;аттестованными специалистами. Наши подрядчики имеют сертификаты. Официально проводим оплаты и&nbsp;даем гарантию 5&nbsp;лет.</p>
          </div>
        </div>
      </div>
      <div className={styles.other_services}>
        <h2 className={styles.other_services_title}>Дополнительные услуги</h2>
        <div className={styles.other_services_items}>
          <ApprovalOtherServices />
          <SupervisionOtherServices />
          <FacadeOtherServices />
        </div>
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ServicesBuilding