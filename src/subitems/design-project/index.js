import * as React from "react"
import * as styles from "./design-project.module.scss"
import { Link } from "gatsby"

export const DesignProjectBlock = () => {
  return (
    <div className={styles.services_zndp}>
      <h2 className={styles.services_zndp_title}>Зачем нужен дизайн-проект?</h2>
      <div className={styles.services_zndp_text}>
        <p className={styles.services_zndp_text_p}>Задача дизайн-проекта интерьера квартиры&nbsp;&mdash; ответить на&nbsp;всевозможные вопросы прораба и&nbsp;строителей, которые будут реализовывать проект. Тщательно подготовленный дизайн-проект оптимизирует ремонт, позволяя избежать лишних трат и&nbsp;простоев в&nbsp;работе.</p>
        <p className={styles.services_zndp_text_p}>При создании интерьера вашей квартиры мы разрабатываем подробный дизайн-проект. В&nbsp;него входят все необходимые документы для проведения ремонта: от&nbsp;общей концепции интерьера до детализированных технических чертежей.</p>
      </div>
      <Link to="/design-project" className={styles.services_zndp_link}>Подробнее</Link>
    </div>
  )
}