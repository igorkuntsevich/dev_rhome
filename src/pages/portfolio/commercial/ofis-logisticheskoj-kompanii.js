import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-commercial"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const OfisLogisticheskojkompanii = () => {
  return (
    <Layout>
      <Seo 
        title={"Офис логистической компании - RHOME"} description={"Офис логистической компании дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/commercial/ofis-logisticheskoj-kompanii"}
        image={"https://rhome.by/images/portfolio/ofis-logisticheskoj-kompanii/01_ofis-logisticheskoj-kompanii.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Офис логистической компании"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2020"
                metr="152"
                building=""
                budget={styles.project_intro_item_cost1}
              />
              <StaticImage
                src="../../../images/portfolio/ofis-logisticheskoj-kompanii/01_ofis-logisticheskoj-kompanii.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/ofis-logisticheskoj-kompanii/00_ofis-logisticheskoj-kompanii.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Создать офис, отражающий дух и миссию компании."
              wishText="Мы хотим офис без излишеств, но с интересными деталями — в частности мы хотели бы, чтобы нашлось место для большого аквариума. Мы современная компания и ждем от интерьера соответствия нашему духу. Тем более, что офис — это лицо нашей организации."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
              <p className={styles.project__p}>Первой задачей, которую нам предстояло решить — продумать планировку. Мы разделили офис на четыре зоны: большую переговорную, кабинет руководителя, рабочую зону для сотрудников и кухню с небольшим столом для неформальных обсуждений. На границе рабочей зоны и кухни мы решили поместить кресло Profim Chic Loungе, которое создает стилистический акцент за счет своей формы и цвета. Кресла на кухне — Wrap P M TS, их дизайн в 2016 был разработан итальянским творческим коллективом Balutto Associati.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/ofis-logisticheskoj-kompanii/02_ofis-logisticheskoj-kompanii.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
              >
              <StaticImage
                src="../../../images/portfolio/ofis-logisticheskoj-kompanii/02_ofis-logisticheskoj-kompanii.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/ofis-logisticheskoj-kompanii/03_ofis-logisticheskoj-kompanii.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-logisticheskoj-kompanii/03_ofis-logisticheskoj-kompanii.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-logisticheskoj-kompanii/04_ofis-logisticheskoj-kompanii.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-logisticheskoj-kompanii/05_ofis-logisticheskoj-kompanii.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер офиса – это бизнес-инструмент</h2>
              <div>
              <p className={styles.project__p}>Вторая и не менее важная задача — сделать так, чтобы офис стал отражением миссии компании. Важно, чтобы офис соответствовал статусу и духу компании. Когда дело касается бизнеса, интерьер офиса — это еще один инструмент. С его помощью можно рассказать о своем продукте, стиле работы, повысить мотивацию и продуктивность сотрудников.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/ofis-logisticheskoj-kompanii/05_ofis-logisticheskoj-kompanii.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-logisticheskoj-kompanii/05_ofis-logisticheskoj-kompanii.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/ofis-logisticheskoj-kompanii/08_ofis-logisticheskoj-kompanii.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-logisticheskoj-kompanii/08_ofis-logisticheskoj-kompanii.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <h2 className={styles.project__title}>Офис — это отражение духа и миссии компании</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>Компания, для которой мы делали дизайн-проект интерьера офиса, занимается логистикой, поэтому в основу концепции интерьера лежала идея легкости передвижения, прозрачности процессов и открытости. В интерьере преобладают светлые оттенки и легкие геометрические линии, а некоторые стены выполнены из стекла. Еще одно напоминание о сфере деятельности заказчиков — карта географии перевозок, расположенная в кабинете руководителя.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/ofis-logisticheskoj-kompanii/06_ofis-logisticheskoj-kompanii.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/ofis-logisticheskoj-kompanii/06_ofis-logisticheskoj-kompanii.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/ofis-logisticheskoj-kompanii/07_ofis-logisticheskoj-kompanii.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/ofis-logisticheskoj-kompanii/07_ofis-logisticheskoj-kompanii.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Найти для него место было одной из задач, поставленных заказчиком еще на одной из первых встреч, где мы обсуждали общие пожелания по проекту. Мы приняли решение вмонтировать в торцевую стену переговорки. Во-первых, это выглядит необычно и есть на что отвлечься, чтобы отдохнул глаз, если переговоры затянулись. Во-вторых, прозрачный аквариум делает пространство более открытым. Через него можно видеть, что происходит в офисе и в помещение даже попадает дневной свет. Но в то же время не ощущаешь себя как на витрине, сидя за стеклом, из-за того, что водоросли и пузырьки воздуха в воде создают небольшой визуальный барьер.</p>
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
                  src="../../../images/partners/austrialight.jpg"
                  alt=""
                  />
                }
                text="Салон светильников" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/caparol.jpg"
                  alt=""
                  />
                }
                text="Отделочные материалы" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/cosmorelax.jpg"
                  alt=""
                  />
                }
                text="Магазин дизайнерских предметов" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/antrano.jpg"
                  alt=""
                  />
                }
                text="Фабрика эксклюзивной мебели" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/armstrong.jpg"
                  alt=""
                  />
                }
                text="Подвесные потолки" 
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
export default OfisLogisticheskojkompanii