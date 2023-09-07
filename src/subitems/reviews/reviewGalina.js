import React, { useState } from 'react'
import * as styles from "./review.module.scss"

export const ReviewGalina = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div>
      <div className={styles.reviews_item_head}>
        <div className={styles.reviews_item_head_text + " " + styles.reviews_item_head_person3}>
          <p className={styles.reviews_item_head_name}>Галина</p>
          </div>
        <p className={styles.reviews_item_head_data}>10.05.2016</p>
      </div>
      <div className={styles.reviews_item_body}>
        <div className={styles.reviews_item_body_text}>
          <div className={styles.reviews_item_body_text_wrap + " " + styles.reviews_item_body_text_wrap2 + " " + (openProcessList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>&mdash;&nbsp;После первой&nbsp;же консультации и&nbsp;знакомства без колебаний было принято решение доверить проектирование интерьера нашего жилища студии RHOME.</p>
            <p className={styles.reviews_item_body_text_p}>О&nbsp;команде по&nbsp;нашему проекту&nbsp;&mdash; Дмитрий Разумейчик, Сергей Рассеко, Екатерина Щетко&nbsp;&mdash; компетентность и&nbsp;внимательность к&nbsp;клиенту с&nbsp;самого первого дня работы и&nbsp;до&nbsp;окончания проекта. Очень важная деталь в&nbsp;их&nbsp;работе&nbsp;&mdash; упорство при воплощении любых идей. Скажем так: страшно подумать, что&nbsp;бы мы&nbsp;могли сотворить с&nbsp;интерьером квартиры без помощи ребят. Безусловно, и&nbsp;друзьям, и&nbsp;знакомым без зазрения совести могу посоветовать эту студию, так как цены на&nbsp;услуги вполне соответствуют уровню и&nbsp;отдаче всего коллектива.</p>
          </div>
          <div className={styles.reviews_item_body_text_hidden + " " + (openProcessList? `${styles.open}` : "")}>
            <p className={styles.reviews_item_body_text_p}>Сергей, Дмитрий, Катюша, спасибо за&nbsp;работу, за&nbsp;ваше обаяние и&nbsp;профессионализм! А&nbsp;студии RHOME&nbsp;&mdash; не&nbsp;останавливаться на&nbsp;достигнутом и&nbsp;новых, интересных идей и&nbsp;проектов.</p>
            <p className={styles.reviews_item_body_text_p}>С&nbsp;уважением, Андреевы.</p>
          </div>
          <button onClick={toggleProcessList} className={styles.reviews_item_body_button} style={hide}>Показать полностью</button>
        </div>
      </div>
    </div>
  )
}