import * as React from "react"
import * as styles from "./stages.module.scss"

import ScrollContainer from 'react-indiana-drag-scroll'

export const StagesApart = () => {
  return (
    <div className={styles.services_stages}>
      <div className={styles.services_stages_text}>
        <h2 className={styles.services_stages_text_title}>Этапы работы над дизайн-проектом</h2>
        <p className={styles.services_stages_text_p}>На&nbsp;примере квартиры 100 м<sup>2</sup>. Подробно о&nbsp;процессе работы</p>
      </div>
      <ScrollContainer className="scroll-container">
        <div className={styles.services_stages_grid}>
          <div className={styles.services_stages_item_title}>
            <p className={styles.services_stages_item_title_p}>Этап 1</p>
            <span className={styles.services_stages_item_title_span}>7-10 рабочих дней</span>
          </div>
          <div className={styles.services_stages_item_title}>
            <p className={styles.services_stages_item_title_p}>Этап 2</p>
            <span className={styles.services_stages_item_title_span}>25-30 рабочих дней</span>
          </div>
          <div className={styles.services_stages_item_title}>
            <p className={styles.services_stages_item_title_p}>Этап 3</p>
            <span className={styles.services_stages_item_title_span}>17-22 рабочих дней</span>
          </div>
          <ul className={styles.services_stages_item_content}>
            <li className={styles.services_stages_item__li}>
              Знакомимся с&nbsp;объектом
              <span className={styles.services_stages_item__span}>Наши замерщики сами приедут и&nbsp;замерят стены, отметят узлы и&nbsp;основные коммуникации.</span>
            </li>
            <li className={styles.services_stages_item__li}>
              Узнаем предпочтения
              <span className={styles.services_stages_item__span}>Уточним ваши пожелания по&nbsp;дизайну интерьера на&nbsp;встрече и&nbsp;через анкету.</span>
            </li>
            <li className={styles.services_stages_item__li}>
              Продумываем планировку
              <span className={styles.services_stages_item__span}>Дизайнер и&nbsp;архитектор проработают планировку, дадут варианты на&nbsp;выбор.</span>
            </li>
          </ul>
          <ul className={styles.services_stages_item_content}>
            <li className={styles.services_stages_item__li}>
              Создаем концепт-проект
              <span className={styles.services_stages_item__span}>Специалисты детализируют оформление помещения, покажут расстановку мебели.</span>
            </li>
            <li className={styles.services_stages_item__li}>
              Визуализируем в&nbsp;3D
              <span className={styles.services_stages_item__span}>Дизайнер готовит картинки, максимально похожие на&nbsp;будущий реальный интерьер.</span>
            </li>
            <li className={styles.services_stages_item__li}>
              Презентуем материалы
              <span className={styles.services_stages_item__span}>Выбираем элементы мебели и&nbsp;декора для интерьера. Согласовываем с&nbsp;заказчиком.</span>
            </li>
          </ul>
          <ul className={styles.services_stages_item_content}>
            <li className={styles.services_stages_item__li}>
              Делаем чертежи
              <span className={styles.services_stages_item__span}>Разрабатываем подробную техническую документацию для выполнения строительных работ.</span>
            </li>
            <li className={styles.services_stages_item__li}>
              Составляем ведомости
              <span className={styles.services_stages_item__span}>Перечисляем наименование и&nbsp;количество предметов интерьера и&nbsp;материалов.</span>
            </li>
            <li className={styles.services_stages_item__li}>
              Формируем бюджет
              <span className={styles.services_stages_item__span}>Анализируем цены мебели и&nbsp;материалов, составляем общую смету по&nbsp;проекту.</span>
            </li>
          </ul>
        </div>
      </ScrollContainer>
    </div>
  )
}