import * as React from "react"
import * as styles from "./other-services.module.scss"
import { Link } from "gatsby"

export const FacadeOtherServices = () => {
  return (
    <Link to="/services/facade" className={styles.services_item + " " + styles.services_item_facade}>
      <h2 className={styles.services_title}>Оформление фасада</h2>
      <div>
        <p className={styles.services_p}>Первое впечатление от&nbsp;дома всегда зависит от&nbsp;его внешнего вида. Фасад дома делают не&nbsp;только для себя&nbsp;&mdash; это вклад в&nbsp;красоту всей улицы.</p>
      </div>
      <p className={styles.services_link}>Подробнее</p>
    </Link>
  )
}