import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/rhome_logo.svg"
import logo_mob from "../images/rhome_logo_mob.svg"

const Header = () => {
  const [navOpen , setNavOpen ]= React.useState(false);
  React.useEffect(()=>{
    if(navOpen){
      document.body.style.overflow="hidden";
      document.body.style.height="100vh";
    } else{
      document.body.style.height="auto";
      document.body.style.overflow="";
    }
  }, [navOpen]);
  return (
    <header className={(navOpen?"header_open":"")}>
      <div className="wrapper">
        <div className="header_desktop">
          <Link to="/" className="header_logo_link">
            <img src={logo} alt="rhome logotype" class="header_logo_img" />
          </Link>
          <Link to="/" className="header_logo_link_mob_open">
            <img src={logo_mob} alt="rhome logotype" class="header_logo_img_mob_open" />
          </Link>
          <ul className="header_nav">
            <li>
              <Link
                // to="/"
                to="/services/apartment"
                className="header_nav_li"
                activeClassName="header_nav_li_active"
              >Услуги</Link>
            </li>
            <li>
              <Link
                to="/2"
                className="header_nav_li"
                activeClassName="header_nav_li_active"
              >Портфолио</Link>
            </li>
            <li>
              <Link
                to="/3"
                className="header_nav_li"
                activeClassName="header_nav_li_active"
              >Стоимость</Link>
            </li>
            <li>
              <Link
                to="/about"
                className="header_nav_li"
                activeClassName="header_nav_li_active"
              >О&nbsp;студии</Link>
            </li>
            <li>
              <Link
                to="/5"
                className="header_nav_li"
                activeClassName="header_nav_li_active"
              >Контакты</Link>
            </li>
          </ul>
          <div 
            onClick={()=>  {
              setNavOpen(!navOpen)}} className="header_burger">
              <span></span>
          </div>
        </div>
        <div className="header_mobile">
          <div className="header_mobile_grid">
            <div className="header_mobile_flex">
              <Link
                to="/1"
                className="header_mobile_nav_title"
              >Портфолио</Link>
              <ul className="header_mobile_nav">
                <li>
                  <Link
                    to="/2"
                    className="header_mobile_nav_li"
                  >Квартиры</Link>
                </li>
                <li>
                  <Link
                    to="/3"
                    className="header_mobile_nav_li"
                  >Дома</Link>
                </li>
                <li>
                  <Link
                    to="/4"
                    className="header_mobile_nav_li"
                  >Коммерческие объекты</Link>
                </li>
              </ul>
            </div>
            <div className="header_mobile_flex">
              <Link
                to="/5"
                className="header_mobile_nav_title header_mobile_nav_title_cost"
              >Стоимость</Link>
            </div>
            <div className="header_mobile_flex">
              <Link
                to="/services/apartment"
                className="header_mobile_nav_title"
              >Услуги</Link>
              <ul className="header_mobile_nav">
                <li>
                  <Link
                    to="/services/apartment"
                    className="header_mobile_nav_li"
                  >Дизайн проект квартиры</Link>
                </li>
                <li>
                  <Link
                    to="/6"
                    className="header_mobile_nav_li"
                  >Дизайн проект дома</Link>
                </li>
                <li>
                  <Link
                    to="/7"
                    className="header_mobile_nav_li"
                  >Дизайн проект офиса</Link>
                </li>
              </ul>
            </div>
            <div className="header_mobile_flex header_mobile_flex_long">
              <Link
                to="/about"
                className="header_mobile_nav_title"
              >О&nbsp;студии</Link>
              <ul className="header_mobile_nav">
                <li>
                  <Link
                    to="/9"
                    className="header_mobile_nav_li"
                  >Вакансии</Link>
                </li>
                <li>
                  <Link
                    to="/10"
                    className="header_mobile_nav_li"
                  >Отзывы</Link>
                </li>
                <li>
                  <Link
                    to="/11"
                    className="header_mobile_nav_li"
                  >Вдохновение</Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="header_mobile_nav_title header_mobile_nav_title_contacts"
                  >Контакты</Link>
                </li>
              </ul>
            </div>
            <div className="header_mobile_flex">
              <ul className="header_mobile_nav">
                <li>
                  <Link
                    to="/"
                    className="header_mobile_nav_li"
                  >Строительные работы</Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="header_mobile_nav_li"
                  >Авторский надзор</Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="header_mobile_nav_li"
                  >Оформление фасадов</Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="header_mobile_nav_li"
                  >Согласование препланировки</Link>
                </li>
              </ul>
            </div>
            {/* <div className="header_mobile_flex">
              <Link
                to="/"
                className="header_mobile_nav_title"
              >Контакты</Link>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
