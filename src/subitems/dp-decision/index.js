import React, { useState } from 'react'
import * as styles from "./decision.module.scss"

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


export const DesignProektDecision = () => {
  const [openDecisionList , setOpenDecisionList] = useState(false);
  const toggleDecisionList =()=>{
    setOpenDecisionList(!openDecisionList);
  };
  return (
    <div className={styles.decision}>
      <div className={styles.decision_head + " " + (openDecisionList? `${styles.open}` : "")} onClick={toggleDecisionList}>
        <h2 className={styles.decision_head_title}>Решения, которые гарантирует дизайн‑проект</h2>
      </div>
      <SimpleBar forceVisible="y" autoHide={false}>
        <div className={styles.decision_body + " " + (openDecisionList? `${styles.open}` : "")}>
          <div className={styles.decision_body_item}>
            <h3 className={styles.decision_body_item_title}>Художественное оформление</h3>
            <p className={styles.decision_body_item_p}>Дизайнер делает грамотное зонирование и&nbsp;создаёт общую планировку помещения. Делит его на&nbsp;жилые зоны по&nbsp;вашим предпочтениям.</p>
          </div>
          <div className={styles.decision_body_item}>
            <h3 className={styles.decision_body_item_title}>Идея интерьера и&nbsp;3d-визуализация</h3>
            <p className={styles.decision_body_item_p}>Дизайнер продумывает идею интерьера и&nbsp;делает 3d-визуализацию. На&nbsp;нём видно размещение всех предметов интерьера, мебели и&nbsp;аксессуаров.</p>
          </div>
          <div className={styles.decision_body_item}>
            <h3 className={styles.decision_body_item_title}>Монтаж и&nbsp;демонтаж конструкций</h3>
            <p className={styles.decision_body_item_p}>Чертежи показывают, в&nbsp;каких местах возводить перегородки для зонирования, а&nbsp;где&nbsp;&mdash; сносить конструкции ради пространства.</p>
          </div>
          <div className={styles.decision_body_item}>
            <h3 className={styles.decision_body_item_title}>Установка сантех. оборудования</h3>
            <p className={styles.decision_body_item_p}>План показывает строителям, куда и&nbsp;как устанавливать раковину, унитаз, бойлер. Прописаны артикулы, наименования, размеры оборудования.</p>
          </div>
          <div className={styles.decision_body_item}>
            <h3 className={styles.decision_body_item_title}>Монтаж светильников и&nbsp;выключателей</h3>
            <p className={styles.decision_body_item_p}>На&nbsp;чертежах отмечены места установки всех светильников, а&nbsp;также выключателей, описаны схемы управления группами включения.</p>
          </div>
          <div className={styles.decision_body_item}>
            <h3 className={styles.decision_body_item_title}>Размещение розеток и&nbsp;слаботочных сетей</h3>
            <p className={styles.decision_body_item_p}>Схемы из&nbsp;дизайн-проекта подробно описывают места размещения розеток, проводов под кондиционер или подсветку мебели.</p>
          </div>
          <div className={styles.decision_body_item}>
            <h3 className={styles.decision_body_item_title + " " + styles.decision_body_item_title_width}>Внедрение автоматизации</h3>
            <p className={styles.decision_body_item_p}>Указываем какие будут системы автоматизации и&nbsp;алгоритмы их&nbsp;работы по&nbsp;всем помещениям, готовим&nbsp;ТЗ и&nbsp;чертежи для установщиков.</p>
          </div>
          <div className={styles.decision_body_item}>
            <h3 className={styles.decision_body_item_title}>Укладка напольных покрытий</h3>
            <p className={styles.decision_body_item_p}>На&nbsp;схеме детально расписано, как делать полы. Перечислены все необходимые материалы, их&nbsp;тип, количество, производитель.</p>
          </div>
          <div className={styles.decision_body_item}>
            <h3 className={styles.decision_body_item_title}>Отделка потолочных покрытий</h3>
            <p className={styles.decision_body_item_p}>Планы иллюстрируют сложные конструкции потолков, показывают их&nbsp;в&nbsp;разрезе. Указаны материалы для отделки, их&nbsp;точное количество.</p>
          </div>
          <div className={styles.decision_body_item}>
            <h3 className={styles.decision_body_item_title}>Раскладка настенной плитки</h3>
            <p className={styles.decision_body_item_p}>Инструкция объясняет принцип, по&nbsp;которому стоит укладывать плитку. Посчитано и&nbsp;указано точное количество материалов, бренд.</p>
          </div>
          <div className={styles.decision_body_item}>
            <h3 className={styles.decision_body_item_title}>Список товаров для ремонта</h3>
            <p className={styles.decision_body_item_p}>В&nbsp;ведомостях перечислены все предметы из&nbsp;дизайна вместе с&nbsp;артикулами, количеством. Указано, у&nbsp;каких поставщиков какие товары заказывать.</p>
          </div>
          <div className={styles.decision_body_item}>
            <h3 className={styles.decision_body_item_title + " " + styles.decision_body_item_title_width}>Детальный бюджет</h3>
            <p className={styles.decision_body_item_p}>Калькулирует стоимость ремонта, по&nbsp;пунктам расписывает траты. Специалист вычисляет сумму на&nbsp;основе актуальных цен.</p>
          </div>
        </div>
      </SimpleBar>
    </div>
  )
}