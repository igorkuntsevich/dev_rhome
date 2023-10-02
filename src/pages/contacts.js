import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ContactsGallery } from "../subitems/gallery/contacts-gallery"
import { Modal } from "../subitems/modal-step2"
import * as styles from "../components/styles/contacts.module.scss"





const Contacts = () => {
  const [isModal, setModal] = React.useState(false);
  return (
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
            <div>
              <p className={styles.contacts_quote_p}>Приехав к&nbsp;нам в&nbsp;офис, вы&nbsp;спокойно можете озвучить задачу. Мы&nbsp;всегда вас поймем, поделимся своими идеями и&nbsp;вместе найдем оптимальное решение, которое подходит именно вам.</p>
              <p className={styles.contacts_quote_p}>Если вы&nbsp;живете за&nbsp;пределами Минска, мы&nbsp;готовы работать над проектом удаленно, но&nbsp;все так&nbsp;же качественно.</p>
            </div>
          </div>
          <div className={styles.contacts_text}>
            <div className={styles.contacts_text1}>
              <p className={styles.contacts_text_p}>Дизайн-студия RHome пр.Победителей 131, офис 65&nbsp;Минск, 220062</p>
              <p className={styles.contacts_text_p_small}>Мы&nbsp;работаем в&nbsp;будни с&nbsp;9&nbsp;до&nbsp;20, в&nbsp;субботу с&nbsp;10&nbsp;до&nbsp;16</p>
            </div>
            <div className={styles.contacts_flex}>
              <div className={styles.contacts_flex_small}>
                <div className={styles.contacts_text2}>
                  <a href="tel:+375296748390" className={styles.contacts_link}>+375 (29) 674-83-90</a>
                  <a href="mailto:rhomeby@gmail.com" className={styles.contacts_mail}>rhomeby@gmail.com</a>
                </div>
                <div className={styles.contacts_social}>
                  <a href="tg://resolve?domain=drazumeichyk" className={styles.contacts_social_link + " " + styles.contacts_social_telegram}></a>
                  <a href="viber://chat?number=+375296748390" className={styles.contacts_social_link + " " + styles.contacts_social_viber}></a>
                  <a href="whatsapp://send?phone=+375296748390" className={styles.contacts_social_link + " " + styles.contacts_social_wp}></a>
                </div>
              </div>
              <button onClick={() => setModal(true)} className={styles.contacts_button}>Заказать звонок</button>
            </div>
            <Modal
              isVisible={isModal}
              onClose={() => setModal(false)}
            />
          </div>
        </div>
        <div className={styles.contacts_map}>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad5e675d57b529abb5d272c57a3d21031007a2c6c93d916ad35b0fe9a10104e0f&amp;scroll=false&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
        </div>
      </div>
      <ContactsGallery />
    </div>
  </Layout>
  )
}


export default Contacts