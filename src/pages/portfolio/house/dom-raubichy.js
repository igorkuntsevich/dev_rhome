import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const DomRaubichy = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера дома в Раубичах - RHOME"} description={"Мы купили дом, в котором хотим сделать хороший ремонт и современный дизайн. Также нам нужен проект бассейна и ландшафтный дизайн."}
        location={"https://rhome.by/portfolio/house/dom-raubichy"}
        image={"https://rhome.by/images/portfolio/dom-raubichy/01_dom-raubichy.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Дом в Раубичах"
                leader="Сергей Рассеко"
                architector="Тимур Саракуца"
                manager="Дмитрий Разумейчик"
                data="август 2017"
                metr="500"
                building="18 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/dom-raubichy/01_dom-raubichy.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-raubichy/00_dom-raubichy.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/dom-raubichy/cut/20_dom-raubichy.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/dom-raubichy/cut/11_dom-raubichy.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-raubichy/cut/06_dom-raubichy.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/dom-raubichy/cut/10_dom-raubichy.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-raubichy/cut/33_dom-raubichy.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать дизайн интерьера в современном стиле."
              wishText="Мы купили дом, в котором хотим сделать хороший ремонт в современном стиле. Обязательно предусмотрите несколько гостевых спален, поскольку к нам часто будут приезжать гости. Еще нужен рабочий кабинет и кинотеатр. Также предусмотрите фоновую подсветку во всех помещениях."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-raubichy/02_dom-raubichy.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-raubichy/02_dom-raubichy.jpg"
                alt=""
                className={styles.project__one_image + " " + styles.project__narrow_block + " " + styles.project__bigmargin}
              />
            </a>  

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>В хорошем дизайне не бывает мелочей</h2>
                <div>
                <p className={styles.project__p}>Поэтому первое, что будут видеть хозяева, возвращаясь домой — изысканная композиция из предметов искусства. Перила лестницы выполнены из гнутого закаленного стекла. На полу — эффектная широкоформатная плитка FMG размером 3 на 1 метр.</p>
              </div>
            </div>           
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/03_dom-raubichyl.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/03_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/04_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/04_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Просторные холлы украсили минималистичными композициями и отделкой из натурального шпона. Люстра Vibia дополняет и украшает лестничный пролет.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/05_dom-raubichyl.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/05_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/11_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/11_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__bigmargin}>
            <ProjectConsultationAlexey
                text="Если вам повезло с видом за окном, не стоит блокировать его гардинами. В данном случае более удачными будут сочетания портьеры/жалюзи или портьеры/римские шторы, которые не станут скрывать отличный вид из окна, но при необходимости спрячут от солнца."
            />
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Центром гостиной стал большой модульный диван. «Каркас» помещения задают графитовые светильники, стеллаж и кофейный столик. Для окон на первом этаже мы выбрали деревянные жалюзи, чтобы не скрывать прекрасный вид.</p>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/06_dom-raubichyl.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/06_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/07_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/07_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div> 
            <a href="https://rhome.by/images/portfolio/dom-raubichy/40_dom-raubichy.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-raubichy/40_dom-raubichy.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>  
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Простота и изысканность в каждой комнате дома</h2>
                <div>
                <p className={styles.project__p}>Кухня-столовая также поддерживает общий стиль простоты и изысканности. Белые полуматовые фасады легко мыть, а за счет бликов и отражений помещение наполняется теплым светом. Современный кухонный гарнитур с намеком на классику произведен в Германии. Барная стойка плавно «перетекает» в большой обеденный стол, за которым легко поместятся 6 человек.</p>
              </div>
            </div>           
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/09_dom-raubichyl.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/09_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/10_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/10_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Все опуски потолков обусловлены конструктивными особенностями приточно-вытяжной вентиляции. Грамотная работа архитектора позволила увязать все высоты потолков и проемов так, чтобы пространство не потеряло целостность.</p>
              <p className={styles.project__p}>Абсолютно белый холл второго этажа дополнили картинами современного художника Пола Кремера. Получилось очень эффектно и ярко.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/06_dom-raubichyl.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/06_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/08_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/08_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div> 
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Спальни со сложной геометрией</h2>
                <div>
                <p className={styles.project__p}>Спальня хозяев на мансардном этаже изначально имеет сложную геометрию. Трапециевидные окна задекорировали неподвижными шторами. А сложная конструкция потолка добавила объема и игры света. В спальне по просьбе хозяйки организовали небольшое рабочее место и туалетный столик.</p>
              </div>
            </div> 
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/12_dom-raubichyl.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/12_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/13_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/13_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Рядом со спальней организовали просторную гардеробную со стеклянной дверью на рельсе. Направляющая для двери вмонтирована в потолок и практически незаметна. В спальне ничего лишнего. Но в то же время, очень уютно за счет текстиля и натурального шпона ореха.</p>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/14_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/14_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/17_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/17_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/15_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/15_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/16_dom-raubichyl.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/16_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/18_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/18_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div> 
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Шкафы обеспечивают дополнительное место хранения и, в то же время, являются продолжением технологического опуска потолка. Таким образом мы избежали лишних углов и замаскировали систему вентиляции. Опуск для приточно-вытяжной вентиляции используется для встроенного освещения и подсветки ТВ-зоны.</p>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/19_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/19_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/20_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/20_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/21_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/21_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Ванная комната с мансардным окном</h2>
                <div>
                <p className={styles.project__p}>Санузел повторяет стиль всего дома в целом: широкоформатная плитка с точной имитацией камня, теплые благородные оттенки и лаконичные линии. В ванной разместили стиральную и сушильную машины и большие системы хранения.</p>
              </div>
            </div> 
            <a href="https://rhome.by/images/portfolio/dom-raubichy/24_dom-raubichy.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-raubichy/24_dom-raubichy.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>  

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>"Пиксельная" детская</h2>
                <div>
                <p className={styles.project__p}>Детская получилась яркой за счет разнообразного текстиля и авторского геометрического рисунка на стене. Эффектный светильник фирмы Flos наполняет помещение сложным точечным светом и добавляет юмора.</p>
              </div>
            </div> 
            <a href="https://rhome.by/images/portfolio/dom-raubichy/25_dom-raubichy.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-raubichy/25_dom-raubichy.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>  
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/30_dom-raubichyl.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/30_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/31_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/31_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Домашний кинотеатр на цокольном этаже</h2>
                <div>
                <p className={styles.project__p}>На цокольном этаже, пожалуй, получился самый смелый и яркий дизайн. Брутальная отделка стен, деревянный шпон, картины современного художника и бетонный потолок — все это создает атмосферу паба.</p>
                <p className={styles.project__p}>Кабинет хозяина также размещен на цокольном этаже, чтобы тот мог работать в полной тишине. Удобный диван для отдыха и большое количество стеллажей располагают к тому, чтобы работать в данном помещении было максимально комфортно.</p>
              </div>
            </div> 
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/32_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/32_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/34_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/34_dom-raubichy.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-raubichy/35_dom-raubichy.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-raubichy/35_dom-raubichy.jpg"
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
                  src="../../../images/partners/domani.jpg"
                  alt=""
                  />
                }
                text="Центр интерьерных решений"
              />
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
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/stonetech.jpg"
                  alt=""
                  />
                }
                text="Мастерская камня"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/mexo.jpg"
                  alt=""
                  />
                }
                text="Мягкая мебель" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/fmg.jpg"
                  alt=""
                  />
                }
                text="Керамическая плитка" 
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
export default DomRaubichy