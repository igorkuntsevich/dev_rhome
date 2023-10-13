import * as React from "react"
import { Link } from "gatsby"
import logo from "../svg/rhome_logo.svg"
import logoMob from "../svg/rhome_logo_mob.svg"
import stickyLogo from "../svg/rhome_logo_sticky.svg"
import stickyLogoMob from "../svg/rhome_logo_mob_sticky.svg"

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
  const [getStickyHeader , setStickyHeader] = React.useState(true);
  React.useEffect(() => {
    let pscroll = 0;
    const stickyHeader = ()=>{
      if(typeof window ==='undefined'){
        return
      }
      const pageYOffset = window.pageYOffset; 
      if (pscroll>pageYOffset&&pageYOffset>100){
        setStickyHeader(true);
        document.body.classList.add('is_sticky');
      } else { 
        setStickyHeader(false);
        document.body.classList.remove('is_sticky');
        }  
      pscroll=pageYOffset;
    };
    window.addEventListener('scroll', stickyHeader);
    return () => {
      window.removeEventListener('scroll', stickyHeader);
    }
  }, [ ])
  let position = getStickyHeader?"sticky":"relative" ;
  if (navOpen ){
    position="fixed";
  }
  return (
    <header style={{position:position}} className={( getStickyHeader?"header_sticky":"" ) + (navOpen?" header_open":"")}>
      <div className="wrapper">
        <div className="header_desktop">
          <Link to="/" className="header_logo_link">
            <img src={logo} alt="rhome logotype" class="header_logo_img" />
            <img src={stickyLogo} alt="rhome logotype" class="header_sticky_logo_img" />
            <img src={stickyLogoMob} alt="rhome logotype" class="header_sticky_logo_mob_img" />
          </Link>
          <Link to="/" className="header_logo_link_mob_open">
            <img src={logoMob} alt="rhome logotype" class="header_logo_img_mob_open" />
          </Link>
          <ul className="header_nav">
            <li className="header_subnav_services">
              <p className="header_nav_li header_subnav_p header_nav_li_arrow">Услуги</p>
              <ul className="header_subnav_ul">
                <li>
                  <Link 
                    to="/services/apartment" 
                    className="header_subnav_a"
                    activeClassName="header_subnav_a_active"
                  >Дизайн-проект квартиры</Link>
                </li>
                <li>
                  <Link 
                    to="/services/house" 
                    className="header_subnav_a"
                    activeClassName="header_subnav_a_active"
                  >Дизайн-проект дома</Link>
                </li>
                <li>
                  <Link 
                    to="/services/office" 
                    className="header_subnav_a"
                    activeClassName="header_subnav_a_active"
                  >Дизайн-проект офисы</Link>
                </li>
                <p className="header_subnav_mb"></p>
                <li>
                  <Link 
                    to="/services/building" 
                    className="header_subnav_a"
                    activeClassName="header_subnav_a_active"
                  >Строительные работы</Link>
                </li>
                <li>
                  <Link 
                    to="/services/supervision" 
                    className="header_subnav_a"
                    activeClassName="header_subnav_a_active"
                  >Авторский надзор</Link>
                </li>
                <li>
                  <Link 
                    to="/services/facade" 
                    className="header_subnav_a"
                    activeClassName="header_subnav_a_active"
                  >Оформление фасадов</Link>
                </li>
                <li>
                  <Link 
                    to="/services/approval" 
                    className="header_subnav_a"
                    activeClassName="header_subnav_a_active"
                  >Согласование перепланировки</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="header_nav_li"
                activeClassName="header_nav_li_active"
              >Портфолио</Link>
            </li>
            <li>
              <Link
                to="/cost"
                className="header_nav_li"
                activeClassName="header_nav_li_active"
              >Стоимость</Link>
            </li>
            <li className="header_subnav_about">
              <Link
                to="/about"
                className="header_nav_li header_nav_li_arrow"
                activeClassName="header_nav_li_active"
              >О&nbsp;студии</Link>
                <ul className="header_subnav_ul header_subnav_ul_wide">
                  <li>
                    <Link 
                      to="/about/process" 
                      className="header_subnav_a"
                      activeClassName="header_subnav_a_active"
                    >Процесс работы</Link>
                  </li>
                  <li>
                    <Link 
                      to="/about/vacancy" 
                      className="header_subnav_a"
                      activeClassName="header_subnav_a_active"
                    >Вакансии</Link>
                  </li>
                  <li>
                    <Link 
                      to="/about/reviews"
                      className="header_subnav_a"
                      activeClassName="header_subnav_a_active"
                    >Отзывы</Link>
                  </li>
                  <li>
                    <Link 
                      to="/inspiration" 
                      className="header_subnav_a"
                      activeClassName="header_subnav_a_active"
                    >Вдохновение</Link>
                  </li>
                </ul>
            </li>
            <li>
              <Link
                to="/contacts"
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
                to="/portfolio"
                className="header_mobile_nav_title"
              >Портфолио</Link>
              <ul className="header_mobile_nav">
                <li>
                  <Link
                    to="/portfolio/apartment"
                    className="header_mobile_nav_li"
                  >Квартиры</Link>
                </li>
                <li>
                  <Link
                    to="/portfolio/house"
                    className="header_mobile_nav_li"
                  >Дома</Link>
                </li>
                <li>
                  <Link
                    to="/portfolio/commercial"
                    className="header_mobile_nav_li"
                  >Коммерческие объекты</Link>
                </li>
                <li>
                  <Link
                    to="/portfolio/facade"
                    className="header_mobile_nav_li"
                  >Фасады</Link>
                </li>
              </ul>
            </div>
            <div className="header_mobile_flex">
              <Link
                to="/cost"
                className="header_mobile_nav_title header_mobile_nav_title_cost"
              >Стоимость</Link>
            </div>
            <div className="header_mobile_flex">
              <p
                className="header_mobile_nav_title"
              >Услуги</p>
              <ul className="header_mobile_nav">
                <li>
                  <Link
                    to="/services/apartment"
                    className="header_mobile_nav_li"
                  >Дизайн-проект квартиры</Link>
                </li>
                <li>
                  <Link
                    to="/services/house"
                    className="header_mobile_nav_li"
                  >Дизайн-проект дома</Link>
                </li>
                <li>
                  <Link
                    to="/services/office"
                    className="header_mobile_nav_li"
                  >Дизайн-проект офиса</Link>
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
                    to="/about/process"
                    className="header_mobile_nav_li"
                  >Процесс работы</Link>
                </li>
                <li>
                  <Link
                    to="/about/vacancy"
                    className="header_mobile_nav_li"
                  >Вакансии</Link>
                </li>
                <li>
                  <Link
                    to="/about/reviews"
                    className="header_mobile_nav_li"
                  >Отзывы</Link>
                </li>
                <li>
                  <Link
                    to="/inspiration"
                    className="header_mobile_nav_li"
                  >Вдохновение</Link>
                </li>
                <li>
                  <Link
                    to="/contacts"
                    className="header_mobile_nav_title header_mobile_nav_title_contacts"
                  >Контакты</Link>
                </li>
              </ul>
            </div>
            <div className="header_mobile_flex">
              <ul className="header_mobile_nav">
                <li>
                  <Link
                    to="/services/building"
                    className="header_mobile_nav_li"
                  >Строительные работы</Link>
                </li>
                <li>
                  <Link
                    to="/services/supervision"
                    className="header_mobile_nav_li"
                  >Авторский надзор</Link>
                </li>
                <li>
                  <Link
                    to="/services/facade"
                    className="header_mobile_nav_li"
                  >Оформление фасадов</Link>
                </li>
                <li>
                  <Link
                    to="/services/approval"
                    className="header_mobile_nav_li"
                  >Согласование перепланировки</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
