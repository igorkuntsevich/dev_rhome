import * as React from "react"
import * as styles from "./decision.module.scss"
import ConsultationBlockZNDP from "./index-zndp.js"

export const DecisionZNDP = () => {
  return (

    <div className={styles.zndp_decision}>
      <div className={styles.zndp_decision_text}>
        <h2 className={styles.zndp_decision_text_title}>Вы получаете</h2>
        <div className={styles.zndp_decision_text_items}>
          <p className={styles.zndp_decision_text_p + " " + styles.zndp_decision_text_p1}>Экономию вашего времени и&nbsp;нервов</p>
          <p className={styles.zndp_decision_text_p + " " + styles.zndp_decision_text_p2}>Отсутствие проблем с&nbsp;поиском и&nbsp;закупкой материалов, мебели и&nbsp;прочего</p>
          <p className={styles.zndp_decision_text_p + " " + styles.zndp_decision_text_p3}>Отсутствие конфликтов со&nbsp;строителями</p>
        </div>
      </div>
      <div className={styles.zndp_decision_right}>
        <ConsultationBlockZNDP />
      </div>

    </div>
    // <div className={styles.services_decision}>

    //   <ConsultationBlock />
    //   <div className={styles.services_decision_simplebar}>
    //       <div className={styles.services_decision_items}>
    //         <div className={styles.services_decision_item + " " + styles.services_decision_item1}>
    //           <p className={styles.services_decision_item_title}>Сделаем ремонт за&nbsp;вас</p>
    //           <p className={styles.services_decision_item_p}>Сэкономим ваше время, нервы и&nbsp;деньги. Проведём полный комплекс работ от&nbsp;дизайн-проекта до&nbsp;сдачи.</p>
    //         </div>
    //         <div className={styles.services_decision_item + " " + styles.services_decision_item2}>
    //           <p className={styles.services_decision_item_title}>Разработаем</p>
    //           <p className={styles.services_decision_item_p}>Учтём ваши предпочтения, предложим несколько оригинальных решений.</p>
    //         </div>
    //         <div className={styles.services_decision_item + " " + styles.services_decision_item3}>
    //           <p className={styles.services_decision_item_title}>Согласуем</p>
    //           <p className={styles.services_decision_item_p}>Предоставим юриста, подготовим документы и&nbsp;согласуем перепланировку.</p>
    //         </div>
    //         <div className={styles.services_decision_item + " " + styles.services_decision_item4}>
    //           <p className={styles.services_decision_item_title}>Построим</p>
    //           <p className={styles.services_decision_item_p}>Наша команда выполнит отделочные работы любой сложности. Гарантия 5&nbsp;лет.</p>
    //         </div>
    //         <div className={styles.services_decision_item + " " + styles.services_decision_item5}>
    //           <p className={styles.services_decision_item_title}>Проконтролируем</p>
    //           <p className={styles.services_decision_item_p}>Проконтролируем ремонт на&nbsp;каждом этапе. Представим ваши интересы у&nbsp;поставщиков.</p>
    //         </div>
    //       </div>
    //   </div>
    // </div>
  )
}