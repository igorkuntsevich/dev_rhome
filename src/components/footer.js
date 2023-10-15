import * as React from "react"
import { ToastContainer } from "react-toastify";


const Footer = () => (
  <div className="wrapper">
    <footer className="footer">
      <div className="footer_grid">
        <div className="footer_flex_left">
          <div className="footer_flex">
            <div className="footer_address">
              <p className="footer_address_p">Адрес: г. Минск, пр.&nbsp;Победителей&nbsp;131, оф.65</p>
              <p className="footer_address_p">Мы&nbsp;работаем в&nbsp;будни с&nbsp;9&nbsp;до&nbsp;20,&nbsp;в&nbsp;субботу с&nbsp;10&nbsp;до&nbsp;16</p>
            </div>
            <div className="footer_phones">
              <a href="tel:+375296748390" className="footer_phone">+375 (29) 674-83-90</a>
              <a href="tel:+375173606075" className="footer_phone">+375 (17) 360-60-75</a>
              <a href="mailto:rhomeby@gmail.com" className="footer_phone">rhomeby@gmail.com</a>
            </div>
          </div>
          <div className="footer_text">
            <p className="footer_text_p">Полный комплекс услуг в&nbsp;сфере дизайна интерьеров, проектирование, комплектация, согласование, организация строительных работ, авторский надзор.</p>
          </div>
        </div>
        <div className="footer_socials">
          <a href="/" className="footer_social_fa footer_social_link">
            <div className="footer_socials_fa_img"></div>
          </a>
          <a href="/" className="footer_social_in footer_social_link">
            <div className="footer_socials_in_img"></div>
          </a>
        </div>
      </div>
      <div className="footer_copyright">
        <p className="footer_copyright_p">&copy;&nbsp;2008&nbsp;&mdash; {new Date().getFullYear()}, Rhome.by</p>
        <div className="footer_developer">
          <p className="footer_developer_p">Разработка сайта&nbsp;&mdash;</p>
          <a href="https://yellowpine.site/" className="footer_developer_link">Yellowpine</a>
        </div>
      </div>
    </footer>
  </div>

)

export default Footer
