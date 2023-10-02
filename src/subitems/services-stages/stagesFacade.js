import * as React from "react"
import * as styles from "./stages.module.scss"

import ScrollContainer from 'react-indiana-drag-scroll'

export const StagesFacade = () => {
  return (
    <div className={styles.services_stages}>
      <div className={styles.services_stages_text}>
        <h2 className={styles.services_stages_text_title}>Этапы работы над фасадом дома</h2>
      </div>
      <ScrollContainer className="scroll-container">
        <div className={styles.services_stages_grid + " " + styles.services_stages_facade_grid}>
          <div className={styles.services_stages_item_title}>
            <p className={styles.services_stages_item_title_p}>Этап 1</p>
            <span className={styles.services_stages_item_title_span}>7-15 рабочих дней</span>
          </div>
          <div className={styles.services_stages_item_title}>
            <p className={styles.services_stages_item_title_p}>Этап 2</p>
            <span className={styles.services_stages_item_title_span}>7-15 рабочих дней</span>
          </div>
          <ul className={styles.services_stages_item_content}>
            <li className={styles.services_stages_item__li}>
              Знакомимся с&nbsp;объектом
              <span className={styles.services_stages_item__span}>Наши замерщики сами приедут к&nbsp;вам, сделают замеры, отметят узлы и&nbsp;основные коммуникации.</span>
            </li>
            <li className={styles.services_stages_item__li}>
              Узнаем предпочтения
              <span className={styles.services_stages_item__span}>Уточним ваши пожелания по&nbsp;дизайну фасада при личной встрече и&nbsp;через анкету.</span>
            </li>
            <li className={styles.services_stages_item__li}>
              Визуализируем в&nbsp;3D
              <span className={styles.services_stages_item__span}>Подготовим картинки, иллюстрирующие, как будет выглядеть фасад в&nbsp;будущем.</span>
            </li>
          </ul>
          <ul className={styles.services_stages_item_content}>
            <li className={styles.services_stages_item__li}>
              Презентуем материалы
              <span className={styles.services_stages_item__span}>Выбираем материалы для создания фасада и&nbsp;пристроек и&nbsp;согласовываем их&nbsp;с&nbsp;вами.</span>
            </li>
            <li className={styles.services_stages_item__li}>
              Делаем чертежи
              <span className={styles.services_stages_item__span}>Разрабатываем подробную техническую документацию для выполнения строительных работ.</span>
            </li>
            <li className={styles.services_stages_item__li}>
              Составляем ведомости
              <span className={styles.services_stages_item__span}>Перечисляем наименование и&nbsp;количество предметов интерьера и&nbsp;материалов.</span>
            </li>
          </ul>
        </div>
      </ScrollContainer>
    </div>
  )
}