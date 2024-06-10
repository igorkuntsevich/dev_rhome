import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey'


const KvartiraTraditsionnaya = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира в традиционном стиле"} description={"Дизайн интерьера квартиры в традиционном стиле от студии Rhome. 200+ работ в портфолио"}
        location={"https://rhome.by/portfolio/apartment/kvartira-traditsionnaya"}
        image={"https://rhome.by/images/portfolio/kvartira-traditsionnaya/01_kvartira-traditsionnaya.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в традиционном стиле"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="ноябрь 2012"
                metr="70"
                building=""
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-traditsionnaya/01_kvartira-traditsionnaya.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-traditsionnaya/00_kvartira-traditsionnaya.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Разработать дизайн проект двухкомнатной квартиры в традиционном стиле."
              wishText="Мне нравятся интерьеры в спокойных пастельных тонах. Хочется уюта и атмосферы загородного дома. Очень люблю читать, предусмотрите, пожалуйста, место для хранения книг. Жить планирую одна, поэтому сделайте большой совмещенный санузел. И еще мебель обязательно должна быть из натурального дерева."
            />

          <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Поработав над планировкой, объединили гостиную и кухню, в результате получилось большое удобное пространство для ежедневного времяпровождения и встречи гостей. Также по просьбе заказчицы совместили ванную и санузел. Объединив пространство, мы получили возможность разместить полноценный обеденный стол для званых ужинов и барную стойку для быстрых перекусов. Обратите внимание на организацию освещения. Чем больше сценариев, тем уютнее получается атмосфера в доме или квартире.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-traditsionnaya/02_kvartira-traditsionnaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-traditsionnaya/02_kvartira-traditsionnaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <a href="https://rhome.by/images/portfolio/kvartira-traditsionnaya/04_kvartira-traditsionnaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-traditsionnaya/04_kvartira-traditsionnaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <a href="https://rhome.by/images/portfolio/kvartira-traditsionnaya/05_kvartira-traditsionnaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-traditsionnaya/05_kvartira-traditsionnaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Атмосфера загородного дома</h2>
              <div>
                <p className={styles.project__p}>Кухня плавно перетекает в гостиную. Большой уютный диван, библиотека, кресло, торшер — здесь все продумано до мелочей и подобрано специально для заказчицы. Вы же помните, как она любит читать. Теплые тона стен, филенчатые фасады, потолочные карнизы, молдинги все это создает атмосферу загородного дома.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-traditsionnaya/03_kvartira-traditsionnaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-traditsionnaya/03_kvartira-traditsionnaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/kvartira-traditsionnaya/06_kvartira-traditsionnaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-traditsionnaya/06_kvartira-traditsionnaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>В прихожей шкаф с зеркальными и фасадами визуально увеличивает пространство и перестает быть просто системой хранения — теперь он центр притяжения взглядов. Обеденная зона расположена возле выхода на балкон. Здесь можно проводить время неспешно и спокойно, чаевничать или ужинать.</p>
            </div>



            <a href="https://rhome.by/images/portfolio/kvartira-traditsionnaya/07_kvartira-traditsionnaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-traditsionnaya/07_kvartira-traditsionnaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Свежая гамма интерьера спальни</h2>
              <div>
                <p className={styles.project__p}>Спальня выполнена в классическом сочетании бежевых и голубых оттенков. В шкафы для хранения интегрированы прикроватные тумбочки и туалетный столик с зеркалом.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-traditsionnaya/09_kvartira-traditsionnaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images//portfolio/kvartira-traditsionnaya/09_kvartira-traditsionnaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <a href="https://rhome.by/images/portfolio/kvartira-traditsionnaya/08_kvartira-traditsionnaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-traditsionnaya/08_kvartira-traditsionnaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Белый санузел с черными акцентами — просто и изысканно. А теперь откроем вам секрет: такие интерьеры квартир морально не стареют. Проект 2012 года.</p>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-traditsionnaya/11_kvartira-traditsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-traditsionnaya/11_kvartira-traditsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-traditsionnaya/12_kvartira-traditsionnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-traditsionnaya/12_kvartira-traditsionnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project_video + " " + styles.project__bigmargin}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3_WMn9_GGrs?si=j2vzerQWEzH05m5m" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>




          </div>
        </div>
        <div className="wrapper">
          <ProjectPartner
            items={
            <>
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/openini.jpg"
                  alt=""
                  />
                }
                text="Салон напольных покрытий и дверей" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/oikos.jpg"
                  alt=""
                  />
                }
                text="Декоративная штукатурка и краска" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/terra.jpg"
                  alt=""
                  />
                }
                text="Салон плитки и сантехники" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/atrium.jpg"
                  alt=""
                  />
                }
                text="Салон плитки и сантехники" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/austrialight.jpg"
                  alt=""
                  />
                }
                text="Салон светильников" 
              />
            </>
          }
          />
        </div>
      </Fancybox>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
    </Layout>
  )
}
export default KvartiraTraditsionnaya