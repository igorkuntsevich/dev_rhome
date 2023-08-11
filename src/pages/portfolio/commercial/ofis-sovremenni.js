import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-commercial"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'


const OfisSovremenni = () => {
  return (
    <Layout>
      <Seo 
        title={"Интерьер офиса в современном стиле - Rhome.by"} description={"Интерьер офисов в современном стиле. Было/стало, чертежи, 3D проекты."}
        location={"https://rhome.by/portfolio/commercial/ofis-sovremenni"}
        image={"https://rhome.by/images/portfolio/ofis-sovremenni/01_ofis-sovremenni.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Интерьер офисов в современном стиле"
                leader="Сергей Рассеко"
                architector="Тимур Саракуца, Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="май 2017"
                metr="179"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/ofis-sovremenni/01_ofis-sovremenni.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/ofis-sovremenni/00_ofis-sovremenni.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать дизайн-проект интерьера офисных помещений торгового центра в современном стиле."
              wishText="Нам нужно оформление офисных помещений торгового центра для 15-17 сотрудников. Плюс ресепшн, удобная переговорная и кабинет директора. Все помещения должны выглядеть респектабельно и по-европейски."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепт</h2>
              <div>
              <p className={styles.project__p}>Чтобы подчеркнуть статусность офиса, решили использовать «вечные» материалы — дерево, стекло, бетон и металл. Согласно самым свежим трендам остановились на латуни, дающей теплый свет и нужные блики, отражения и преломления света. Весь интерьер офиса выполнен с использованием натуральных шпонированных деревом панелей, люксовой серии потолков Armstrong и роскошной мебели Poltrona Frau.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/02_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/02_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/03_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/03_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>В зоне ресепшн предусмотрели множество сценариев освещения: от яркого верхнего до тонких нюансных подсветок. Бра и люстры будут сделаны под заказ по эскизам дизайнера. Кашпо для растений тоже изготовят на заказ по эскизам дизайнера. Большие стеклянные перегородки визуально увеличивают пространство и наполняют его естественным светом из кабинетов.</p>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/05_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/05_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/06_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/06_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/07_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/07_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <h2 className={styles.project__title}>Дизайн интерьера переговорной</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>Аскетичное и строгое пространство оживляет дизайнерская люстра. В офисах этот предмет интерьера встречается нечасто, а зря: при правильном подходе уютный домашний аксессуар на подсознательном уровне может задать приветливый и расслабленный тон общению.</p>
                  <p className={styles.project__p}>Удобный рабочий стол класса «люкс» Poltrona Frau имеет все необходимые выводы под зарядные устройства для ноутбуков и смартфонов. Все направлено на то, чтобы переговоры проходили максимально комфортно без суеты и поисков розеток, света и прочих нюансов.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/ofis-sovremenni/08_ofis-sovremenni.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/ofis-sovremenni/08_ofis-sovremenni.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/09_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/09_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер кабинета – залог продуктивности</h2>
              <div>
              <p className={styles.project__p}>Кабинет директора оформлен просто и со вкусом. Особенно удачно здесь смотрится бетонный наливной пол с многогранной текстурой и дизайнерский встроенный светильник Zumtobel серии Slotlight Infinity. В остальном кабинет наполнен лишь самым необходимым: стол, удобные кресла, большое количество разного света и система хранения.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/10_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/10_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/11_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/11_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/12_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/12_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/13_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/13_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Кабинеты для сотрудников спроектированы с использованием тех же материалов: большие стеклянные панели, деревянная отделка, люксовая мебель. Важно, чтобы работники чувствовали здесь себя уютно. Грамотный дизайн и эстетически приятная отделка повышают продуктивность и уровень удовлетворенности работой в компании.</p>
            </div>
            <div className={styles.project__bigmargin}>
            <ProjectConsultationAlexey
                text="Очень интересное потолочное решение, которое все больше начинает набирать популярность — перфорированные потолки. За счет перфорации достигается эффект звукопоглощения и шумоизоляции, что очень важно для комфортной работы в офисе."
            />
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн офиса – лицо вашего бренда</h2>
              <div>
              <p className={styles.project__p}>Зачастую к коридорам и санузлам относят очень формально, не вкладывая особого смысла в отделку. Однако в интерьерах офисных пространств важно общее впечатление, ведь офис – это лицо бренда. Через мелочи в оформлении и продуманность, казалось бы, неважных пространств вы сообщаете клиентам и партнерам о вашем стиле ведения дел и статусе компании. Стеклянные перегородки наполняют коридор светом, а двери под потолок — визуально увеличивают высоту помещения. Сложно поверить, но высота здесь всего 2,4 метра.</p>
              <p className={styles.project__p}>Санузел простой, но эффектный. Мягкий оттенок отделочных материалов, тонкая игра света и огромное зеркало производят приятное впечатление при разумных затратах.</p>              
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/14_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/14_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/16_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/16_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/04_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/04_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-sovremenni/15_ofis-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-sovremenni/15_ofis-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project_video}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7jmhaN9cAJA" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                  src="../../../images/partners/skvirel.jpg"
                  alt=""
                  />
                }
                text="Салон интерьеров" 
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
                  src="../../../images/partners/sofaclub.jpg"
                  alt=""
                  />
                }
                text="Салон мебели" 
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
export default OfisSovremenni