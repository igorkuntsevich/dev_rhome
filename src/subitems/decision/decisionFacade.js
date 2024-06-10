import * as React from "react"
import * as styles from "./decision.module.scss"
import ConsultationBlock from "./index.js"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


export const DecisionFacade = () => {
  return (
    <div className={styles.services_decision}>
      <div>
        <h2 className={styles.services_decision_text_title}>Создадим дизайн ландшафта и&nbsp;фасада</h2>
        <div>
          <p className={styles.services_decision_text_p}>Наши архитекторы оформляют фасады с&nbsp;учетом ландшафта и&nbsp;особенностей местности. Также мы&nbsp;можем разработать ландшафтный дизайн для вашего участка. Сэкономим ваше время, нервы и&nbsp;деньги. Проведём полный комплекс работ от&nbsp;дизайн-проекта до&nbsp;сдачи.</p>
        </div>
      </div>
      <ConsultationBlock />
      <div className={styles.services_decision_simplebar}>
        <SimpleBar forceVisible="y" autoHide={false}>
          <div className={styles.services_decision_items}>
            <div className={styles.services_decision_item + " " + styles.services_decision_item2}>
              <p className={styles.services_decision_item_title}>Дизайн фасада</p>
              <p className={styles.services_decision_item_p}>Оформим фасад вашего дома с&nbsp;учетом ваших пожеланий, особенностей местности и&nbsp;ландшафта.</p>
            </div>
            <div className={styles.services_decision_item + " " + styles.services_decision_item7}>
              <p className={styles.services_decision_item_title}>Реконструируем</p>
              <p className={styles.services_decision_item_p}>Спроектируем террасу, входную группу, хозяйственный постройки и&nbsp;МАФ. Подготовим подробную техническую документацию.</p>
            </div>
            <div className={styles.services_decision_item + " " + styles.services_decision_item8}>
              <p className={styles.services_decision_item_title}>Подробный бюджет</p>
              <p className={styles.services_decision_item_p}>Рассчитаем точную стоимость воплощения дизайн-проекта и&nbsp;подробно распишем материалы, которые потребуются для реализации идеи.</p>
            </div>
            <div className={styles.services_decision_item + " " + styles.services_decision_item9}>
              <p className={styles.services_decision_item_title}>Озеленим</p>
              <p className={styles.services_decision_item_p}>Предложим решение по&nbsp;ландшафту. Подберем растения, проведем работы по&nbsp;благоустройству.</p>
            </div>
          </div>
        </SimpleBar>
      </div>
    </div>
  )
}