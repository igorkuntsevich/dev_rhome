import * as React from "react"
import * as styles from "../../components/styles/services.module.scss"

export const SostavDP = () => {
  return (
    <div className={styles.services__lefttitle_righttext + " " + styles.services__lefttitle_righttext__bigmargin}>
      <h2 className={styles.services__lefttitle_righttext__title + " " + styles.services__design_proekt_br}>Состав<br /> дизайн-проекта</h2>
      <div className={styles.services__lefttitle_righttext__text}>
        <div className={styles.services__lefttitle_righttext__wrap}>
          <span className={styles.services__lefttitle_righttext__text_span}>Готовый дизайн-проект&nbsp;&mdash; это инструкция по&nbsp;проведению ремонта, поэтому его можно отдать на&nbsp;реализацию прорабу или руководить командой строителей самостоятельно. По&nbsp;окончании работ по&nbsp;созданию дизайн-проекта вы&nbsp;получите пакет документов&nbsp;&mdash; гид по&nbsp;вашему будущему интерьеру.</span>
        </div>
        <p className={styles.services__lefttitle_righttext__text_title}>Документ включает в себя:</p>
        <ul>
          <li className={styles.services__lefttitle_righttext__text_li}>Несколько вариантов планировки</li>
          <li className={styles.services__lefttitle_righttext__text_li}>4-6 ракурсов 3D-визуализации каждой комнаты</li>
          <li className={styles.services__lefttitle_righttext__text_li}>25&nbsp;листов чертежей, подробно иллюстрирующих все технические моменты: от&nbsp;электрики до&nbsp;развёртки стен</li>
          <li className={styles.services__lefttitle_righttext__text_li}>Полный перечень материалов, которые понадобятся для ремонтных работ</li>
          <li className={styles.services__lefttitle_righttext__text_li}>Расчет бюджета проекта</li>
          <li className={styles.services__lefttitle_righttext__text_li}>Смету на&nbsp;ремонтно-отделочные работы</li>
        </ul>
      </div>
    </div>
  )
}