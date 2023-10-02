import * as React from "react"
import * as styles from "./services-cost.module.scss"
import { useInView } from "react-intersection-observer"

export const ServicesFacadeCost = ( { title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className={styles.services_cost + " " + styles.services_facade_cost}>
      <h2 className={styles.services_cost_title}>{title}</h2>
      <div className={styles.services_cost_image}>
        <p className={styles.services_cost_image_status}>Сергей, руководитель студии RHome</p>
        <p className={styles.services_cost_image_text + " " + (inView? `${styles.active}` : "")}>&mdash;&nbsp;Мы&nbsp;работаем официально, по&nbsp;договору, с&nbsp;прозрачным ценообразованием.</p>
      </div>
      <div className={styles.services_cost_text}>
        <p className={styles.services_cost_price}>990 у.е. = 2900&nbsp;р.</p>
        <p className={styles.services_cost_text_p}>На&nbsp;стоимость дизайна фасада дома влияют размер объекта, детализация прорисовки и&nbsp;сроки.</p>
      </div>
      <p ref={ref} className={styles.services_cost_ref}></p>
    </div>
  )
}