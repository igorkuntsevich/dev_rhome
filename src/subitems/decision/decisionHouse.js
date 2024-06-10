import * as React from "react"
import * as styles from "./decision.module.scss"
import ConsultationBlock from "./index.js"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


export const DecisionHouse = () => {
  return (
    <div className={styles.services_decision + " " + styles.services_decision_house}>
      <div>
        <h2 className={styles.services_decision_text_title}>Построим коттедж за&nbsp;вас</h2>
        <div>
          <p className={styles.services_decision_text_p}>Выполним весь комплекс работ по&nbsp;строительству дома и&nbsp;облагораживанию участка. Наши специалисты несут ответственность за&nbsp;каждый этап работ проекта и&nbsp;гарантируют результат.</p>
          <p className={styles.services_decision_text_p}>Возьмем на&nbsp;себя все вопросы, связанные с&nbsp;реализацией проекта. Проконтролируем ход ремонтно-отделочных работ и&nbsp;представим ваши интересы в&nbsp;салонах поставщиков. Мы&nbsp;сэкономим ваше время, нервы и&nbsp;усилия.</p>
        </div>
      </div>
      <ConsultationBlock />
      <div className={styles.services_decision_simplebar}>
        <SimpleBar forceVisible="y" autoHide={false}>
          <div className={styles.services_decision_items}>
            <div className={styles.services_decision_item + " " + styles.services_decision_item2}>
              <p className={styles.services_decision_item_title}>Спроектируем</p>
              <p className={styles.services_decision_item_p}>Дизайнер проработает с&nbsp;вами расположение комнат в&nbsp;доме и&nbsp;дизайн фасада.</p>
            </div>
            <div className={styles.services_decision_item + " " + styles.services_decision_item3}>
              <p className={styles.services_decision_item_title}>Согласуем</p>
              <p className={styles.services_decision_item_p}>Закрепим за&nbsp;проектом юриста, который подготовит и&nbsp;согласует документы для строительства.</p>
            </div>
            <div className={styles.services_decision_item + " " + styles.services_decision_item6}>
              <p className={styles.services_decision_item_title}>Проработаем интерьер</p>
              <p className={styles.services_decision_item_p}>С&nbsp;учётом вашим пожеланий по&nbsp;стилю, дизайнер создаст макеты интерьера всего дома.</p>
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