import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import * as styles from "../components/styles/contacts.module.scss"




const Contacts = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/contacts"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.contacts}>
        <div className={styles.contacts_left}>
          <h1 className={styles.contacts_title}>Контакты</h1>
          <div className={styles.contacts_quote}>
            <span className={styles.contacts_quote_span}>Уважаемые клиенты!</span>
            <p className={styles.contacts_quote_p}>Приехав к&nbsp;нам в&nbsp;офис, вы&nbsp;спокойно можете озвучить задачу. Мы&nbsp;всегда вас поймем, поделимся своими идеями и&nbsp;вместе найдем оптимальное решение, которое подходит именно вам. Если вы&nbsp;живете за&nbsp;пределами Минска, мы&nbsp;готовы работать над проектом удаленно, но&nbsp;все так&nbsp;же качественно.</p>
          </div>
          <div className={styles.contacts_text}>
            <div className={styles.contacts_text1}>
              <p className={styles.contacts_text_p}>Дизайн-студия RHome пр.Победителей 131, офис 65&nbsp;Минск, 220062</p>
              <p className={styles.contacts_text_p}>Мы&nbsp;работаем в&nbsp;будни с&nbsp;9&nbsp;до&nbsp;20, в&nbsp;субботу с&nbsp;10&nbsp;до&nbsp;16</p>
            </div>
            <div className={styles.contacts_flex}>
              <div className={styles.contacts_text2}>
                <a href="" className={styles.contacts_link}>+375 (29) 674-83-90</a>
                <a href="" className={styles.contacts_link}>rhomeby@gmail.com</a>
              </div>
              <div className={styles.contacts_social}>
                <a href="" className={styles.contacts_social_link + " " + styles.contacts_social_telegram}></a>
                <a href="" className={styles.contacts_social_link + " " + styles.contacts_social_viber}></a>
                <a href="" className={styles.contacts_social_link + " " + styles.contacts_social_wp}></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contacts_map}>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad5e675d57b529abb5d272c57a3d21031007a2c6c93d916ad35b0fe9a10104e0f&amp;scroll=false&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contacts