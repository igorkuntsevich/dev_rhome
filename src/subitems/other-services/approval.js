import * as React from "react"
import * as styles from "./other-services.module.scss"
import { Link } from "gatsby"

export const ApprovalOtherServices = () => {
  return (
    <Link to="/services/approval" className={styles.services_item + " " + styles.services_item_approval}>
      <h2 className={styles.services_title}>Согласование перепланировки</h2>
      <div>
        <p className={styles.services_p}>Избавьте себя от&nbsp;ненужного риска и&nbsp;бюрократических проволочек и&nbsp;доверьте перепланировку нашим специалистам.</p>
      </div>
      <p className={styles.services_link}>Подробнее</p>
    </Link>
  )
}