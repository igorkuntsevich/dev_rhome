import * as React from "react"
import * as styles from "./decision.module.scss"
import ConsultationBlock from "./index.js"

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


export const DecisionOffice = () => {
  return (
    <div className={styles.services_decision}>
      <div>
        <h2 className={styles.services_decision_text_title}>Сэкономим ваше время, нервы и&nbsp;деньги</h2>
        <div>
          <p className={styles.services_decision_text_p}>Наши архитекторы совместно с&nbsp;инженерами разработают грамотную перепланировку, которую без проблем согласуют уполномоченные органы, а&nbsp;дизайнеры и&nbsp;декораторы подберут нужный стиль, цветовую гамму, материалы и&nbsp;предметы и&nbsp;интерьера. Проведём полный комплекс работ от&nbsp;дизайн-проекта до&nbsp;сдачи.</p>
        </div>
      </div>
      <ConsultationBlock />
      <div className={styles.services_decision_simplebar}>
        <SimpleBar forceVisible="y" autoHide={false}>
          <div className={styles.services_decision_items}>
            <div className={styles.services_decision_item + " " + styles.services_decision_item2}>
              <p className={styles.services_decision_item_title}>Разработаем</p>
              <p className={styles.services_decision_item_p}>Сэкономим ваше время, нервы и&nbsp;деньги. Проведём полный комплекс работ от&nbsp;дизайн-проекта до&nbsp;сдачи.</p>
            </div>
            <div className={styles.services_decision_item + " " + styles.services_decision_item3}>
              <p className={styles.services_decision_item_title}>Согласуем</p>
              <p className={styles.services_decision_item_p}>Предоставим юриста, подготовим документы и&nbsp;согласуем перепланировку.</p>
            </div>
            <div className={styles.services_decision_item + " " + styles.services_decision_item4}>
              <p className={styles.services_decision_item_title}>Построим</p>
              <p className={styles.services_decision_item_p}>Наши строители возведут дом, сделают отделку внутри и&nbsp;снаружи согласно технологиям и&nbsp;ГОСТам.</p>
            </div>
            <div className={styles.services_decision_item + " " + styles.services_decision_item5}>
              <p className={styles.services_decision_item_title}>Проконтролируем</p>
              <p className={styles.services_decision_item_p}>Проконтролируем ремонт на&nbsp;каждом этапе. Представим ваши интересы у&nbsp;поставщиков.</p>
            </div>
          </div>
        </SimpleBar>
      </div>
    </div>
  )
}