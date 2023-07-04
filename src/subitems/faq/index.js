import * as React from "react"
import * as styles from "./faq.module.scss"

export const Faq = () => {
  return (
    <div className={styles.faq}>
      <h2 className={styles.faq_title}>Часто задаваемые вопросы?</h2>
      <div className={styles.faq_items}>
        <div className={styles.faq_item}>
          <div className={styles.faq_item_head}>
            <h2 className={styles.faq_item_title}>Как объяснить дизайнеру, чего я&nbsp;хочу?</h2>
          </div>
          <div className={styles.faq_item_text}>
            <p className={styles.faq_item_p}>Очень важно рассказать в&nbsp;деталях, что вам нравится, а&nbsp;что&nbsp;&mdash; нет. Лучший результат получается, когда есть узкий коридор для творчества!</p>
            <p className={styles.faq_item_p}>Как это сделать? Начать стоит c&nbsp;составления подборки картинок с&nbsp;понравившимися интерьерами и&nbsp;дизайнерскими решениями. Лучше всего, если некоторые из&nbsp;них будут из&nbsp;нашего портфолио.</p>
            <p className={styles.faq_item_p}>Стоит составить список пожеланий: что обязательно хочется иметь в&nbsp;новом интерьер и&nbsp;что нужно вписать в&nbsp;него (это может быть аквариум, управление умным домом, место для хранения скейтборда, проектор и&nbsp;т.д.). Если вам нравятся определенные материалы, текстуры или цвета, расскажите об&nbsp;этом тоже.</p>
            <p className={styles.faq_item_p}>На&nbsp;встрече с&nbsp;дизайнером мы&nbsp;вместе заполним подробную анкету, в&nbsp;которой систематизированы все вопросы, чтобы ничего не&nbsp;упустить ни&nbsp;одной важной детали.</p>
          </div>
        </div>
      </div>
    </div>
  )
}