import * as React from "react"
import * as styles from "./decision.module.scss"
import ScrollContainer from 'react-indiana-drag-scroll'
import ConsultationBlock from "./index.js"

export const DecisionApart = () => {
  return (
    <div className={styles.services_decision}>
      <div>
        <h2 className={styles.services_decision_text_title}>Дизайн интерьера и&nbsp;ремонт под ключ</h2>
        <div>
          <p className={styles.services_decision_text_p}>Мы&nbsp;делаем дизайн и&nbsp;ремонт под ключ&nbsp;&mdash; сопровождаем ремонт на&nbsp;всех этапах от&nbsp;создания дизайн-проекта интерьера квартиры до&nbsp;согласования и&nbsp;выполнения ремонтных работ. При этом ваше включение может быть минимальным.</p>
          <p className={styles.services_decision_text_p}>Для ведения всех этапов проекта требуется наличие проверенной команды строителей, грамотных прорабов и&nbsp;лицензий на&nbsp;разные виды ремонтно-строительных работ. У&nbsp;нас все это есть!</p>
        </div>
      </div>
      <ConsultationBlock />
      <div className={styles.services_decision_simplebar}>
        <ScrollContainer className="scroll-container">
          <div className={styles.services_decision_items}>
            <div className={styles.services_decision_item + " " + styles.services_decision_item1}>
              <p className={styles.services_decision_item_title}>Сделаем ремонт за&nbsp;вас</p>
              <p className={styles.services_decision_item_p}>Сэкономим ваше время, нервы и&nbsp;деньги. Проведём полный комплекс работ от&nbsp;дизайн-проекта до&nbsp;сдачи.</p>
            </div>
            <div className={styles.services_decision_item + " " + styles.services_decision_item2}>
              <p className={styles.services_decision_item_title}>Разработаем</p>
              <p className={styles.services_decision_item_p}>Учтём ваши предпочтения, предложим несколько оригинальных решений.</p>
            </div>
            <div className={styles.services_decision_item + " " + styles.services_decision_item3}>
              <p className={styles.services_decision_item_title}>Согласуем</p>
              <p className={styles.services_decision_item_p}>Предоставим юриста, подготовим документы и&nbsp;согласуем перепланировку.</p>
            </div>
            <div className={styles.services_decision_item + " " + styles.services_decision_item4}>
              <p className={styles.services_decision_item_title}>Построим</p>
              <p className={styles.services_decision_item_p}>Наша команда выполнит отделочные работы любой сложности. Гарантия 5&nbsp;лет.</p>
            </div>
            <div className={styles.services_decision_item + " " + styles.services_decision_item5}>
              <p className={styles.services_decision_item_title}>Проконтролируем</p>
              <p className={styles.services_decision_item_p}>Проконтролируем ремонт на&nbsp;каждом этапе. Представим ваши интересы у&nbsp;поставщиков.</p>
            </div>
          </div>
        </ScrollContainer>
      </div>
    </div>
  )
}