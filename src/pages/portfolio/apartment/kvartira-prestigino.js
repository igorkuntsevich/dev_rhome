import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey'

const KvartiraPrestigino = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира в ЖК «Престижино»"} description={"Чтобы увеличить количество спальных комнат, мы переделали просторную кухню в гостинно-кухонное пространство. Здесь отлично разместилась даже большая столовая зона"}
        location={"https://rhome.by/portfolio/apartment/kvartira-prestigino"}
        image={"https://rhome.by/images/portfolio/kvartira-prestigino/01_kvartira-prestigino.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в ЖК «Престижино»"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Тимур Саракуца"
                manager="Дмитрий Разумейчик"
                data="2019"
                metr="96"
                building="7 месяцев"
                budget={styles.project_intro_item_cost1}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-prestigino/01_kvartira-prestigino.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-prestigino/00_kvartira-prestigino.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/kvartira-prestigino/cut/16_kvartira-prestigino.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-prestigino/cut/17_kvartira-prestigino.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-prestigino/cut/04_kvartira-prestigino.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-prestigino/cut/06_kvartira-prestigino.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-prestigino/cut/13_kvartira-prestigino.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Разработать современный дизайн без излишеств с возможностью изменения функционала комнат."
              wishText="В этой квартире мы будем жить вдвоем с мамой, но в ближайшее время я планирую завести семью, поэтому нужно сделать так, чтобы в одну из комнат можно было бы переоборудовать в детскую. Нам не нравятся интерьеры с обилием дизайнерских элементов. Хотелось бы жить в просторной светлой квартире."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Это квартира трансформер. Мы изначально подумывали планировку так, чтобы можно было менять функционал комнат. Чтобы увеличить количество спальных комнат, мы переделали просторную кухню в гостинно-кухонное пространство. Здесь отлично разместилась даже большая столовая зона. Кухня отделена от ТВ-зоны и дивана ширмой из деревянных реек. Как и во всех жилых комнатах, в этой части квартиры мы решили использовать виниловые полы Livyn.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-prestigino/02_kvartira-prestigino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-prestigino/02_kvartira-prestigino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/03_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/03_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/05_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/05_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/04_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/04_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/06_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/06_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Лоджия отделена от остального пространства раздвижным окном в пол Patio. Здесь удалось компактно и уютно разместить кресла Artifort и миниатюрный кофейный столик Cosmorelax.</p>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/13_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/13_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/14_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/14_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/07_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/07_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Квартира-трансформер</h2>
              <div>
                <p className={styles.project__p}>Спальня хозяйки дома находится там, где в оригинальной планировке предполагалась гостиная. Это просторное и многофункциональное помещение, в котором можно не только спать, но и работать или принимать гостей. По одной стене расположены встроенные шкафы Lazio, выкрашенные в цвет стен.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-prestigino/09_kvartira-prestigino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-prestigino/09_kvartira-prestigino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/15_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/15_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/08_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/08_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/19_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/19_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/21_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/21_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/20_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/20_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-prestigino/16_kvartira-prestigino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-prestigino/16_kvartira-prestigino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/17_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/17_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/18_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/18_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Кабинет однажды станет детской</h2>
              <div>
                <p className={styles.project__p}>Это кабинет, который в будущем будет переделан в детскую. Здесь, как и в других комнатах, мы установили двери-невидимки Lazio и корпусную мебель этого же бренда.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-prestigino/12_kvartira-prestigino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-prestigino/12_kvartira-prestigino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline_bigrightimg}>
              <div className={styles.project__two_inline_bigrightimg_left}>
                <div>
                  <p className={styles.project__p}>Стены ванной комнаты, отделаны крупноформатной плиткой Imola Ceramica, а ванну и раковину мы выбрали Villeroy&Boch.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/kvartira-prestigino/10_kvartira-prestigino.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/kvartira-prestigino/10_kvartira-prestigino.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/kvartira-prestigino/11_kvartira-prestigino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-prestigino/11_kvartira-prestigino.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
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
                  src="../../../images/partners/gira.jpg"
                  alt=""
                  />
                }
                text="Розетки и выключатели"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/skvirel.jpg"
                  alt=""
                  />
                }
                text="Салон интерьеров" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/lazio.jpg"
                  alt=""
                  />
                }
                text="Салон дверей"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/mega.jpg"
                  alt=""
                  />
                }
                text="Салон интерьерных решений"
              />
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
export default KvartiraPrestigino