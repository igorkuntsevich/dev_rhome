import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey';

const InteriorBorovlyany = () => {
  return (
    <Layout>
      <Seo 
        title={"Проекта дизайна интерьера дома в Боровлянах - RHOME"} description={"Студия RHome создала стильный дизайн-проект интерьера для дома в Боровлянах. При разработке концепции наши дизайнеры вдохновлялись стилем 60х: плавностью линий архитектуры и характерной для той эпохи мебелью."}
        location={"https://rhome.by/portfolio/house/interior-borovlyany"}
        image={"https://rhome.by/images/portfolio/interior-borovlyany/01_interior-borovlyany.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Интерьер дома в Боровлянах"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="2020"
                metr="225"
                building="16 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/interior-borovlyany/01_interior-borovlyany.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/interior-borovlyany/00_interior-borovlyany.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/interior-borovlyany/cut/12_interior-borovlyany.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/interior-borovlyany/cut/18_interior-borovlyany.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/interior-borovlyany/cut/07_interior-borovlyany.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/interior-borovlyany/cut/02_interior-borovlyany.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/interior-borovlyany/cut/08_interior-borovlyany.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Разработать интерьер для загородного дома."
              wishText="У меня недостроенный дом. Хочу, чтобы вы спроектировали экстерьер и интерьер для него. Из пожеланий к дизайну интерьера дома… Мне нравятся светлые интерьеры, не перегруженные, но и не слишком минималистичные. Яркие цвета допустимы только в деталях. Мне нравится искусство и дизайн. Хотелось бы, чтобы нашлось место и для картин"
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер в стиле 1960-х</h2>
                <div>
                <p className={styles.project__p}>Создавая дизайн интерьер дома в Боровлянах, мы вдохновлялись стилем 1960-х: плавностью линий архитектуры и характерной для той эпохи мебелью. В 60-х была мода на яркие цвета, однако мы работали со светлыми оттенками, следуя за пожеланиями хозяина дома. Получилось не простое копирование, а переосмысление стиля тех времен в современном интерьере.</p>
              </div>
            </div>  
            <a href="https://rhome.by/images/portfolio/interior-borovlyany/17_interior-borovlyany.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__narrow_block + " " + styles.project__bigmargin}
              >
              <StaticImage
                src="../../../images/portfolio/interior-borovlyany/17_interior-borovlyany.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a> 
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/02_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/02_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/06_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/06_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Есть место для искусства</h2>
                <div>
                <p className={styles.project__p}>Наш заказчик сразу рассказал о своей любви к искусству, поэтому мы убедились, что место найдется и для картин и скульптур. Тот факт, что мы знали об этом пожелании с самого начала, помог нам продумать, как их можно разместить, чтобы они гармонично вписывались в интерьер.</p>
              </div>
            </div> 
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/03_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/03_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/04_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/04_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Гостиная – место для уютных вечеров в кругу семьи, поэтому логично, что здесь появился настоящий камин немецкого бренда Brunner с уходящим на второй этаж дымоходом.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/05_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/05_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/07_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/07_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="Если бюджет проекта ограничен, но хочется использовать текстуру камня, рекомендуем обратить внимание на широкоформатный керамогранит с печатью, повторяющей срез каменной породы. Современные методы производства плитки, позволяют имитировать текстуры натуральных материалов на достаточно высоком уровне."
              />
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн лестницы</h2>
                <div>
                <p className={styles.project__p}>Мы не хотели визуально перегружать интерьер, поэтому перила выполнены из стекла. Так мы обеспечиваем безопасность на лестнице, но не режем пространство тяжеловесной конструкцией. Завершает композицию дизайнерская люстра, она имеет приятный направленный свет, к тому же смотрится как произведение искусства.</p>
              </div>
            </div> 
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/08_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/08_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/09_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/09_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Баланс форм в дизайне спальной комнате</h2>
            </div> 

            <div className={styles.project__three_with_padding}>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/10_interior-borovlyany.webp"
                data-fancybox="gallery"
                className={styles.project__three_with_padding_fimg}
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/10_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/11_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/11_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/18_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/18_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Дизайн детских комнат</h2>
            </div> 
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/13_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/13_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/14_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/14_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/15_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/15_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interior-borovlyany/16_interior-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interior-borovlyany/16_interior-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Экстерьер этого дома – отсылка одновременно к неоклассицизму и архитектуре модерна</h2>
              <div>
                <p className={styles.project__p}>Фасад дома мы решили сделать сдержанным – строгим и легким одновременно. Для отделки использовали молочные и графитовые оттенки – цветовая гамма монохромная, но при этом неконтрастная и мягкая. На наш взгляд, такой сдержанный стиль отлично подходит для коттеджей в Беларуси. Такие дома гармонируют с местной природой и культурно-историческим наследием страны.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/04_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/04_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/05_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/05_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/08_fasad-borovlyanye.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/08_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/02_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/02_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/03_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/03_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
                      <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Цокольный этаж</h2>
              <div>
                <p className={styles.project__p}>Цокольный этаж дома довольно высокий, мы решили, что лучшим вариантом будет немного скрыть лестницу, ведущую в дом за насыпным холмом. Такой прием помог объединить ландшафт участка с постройкой.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/06_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/06_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/07_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/07_fasad-borovlyany.jpg"
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
                  src="../../../images/partners/austrialight.jpg"
                  alt=""
                  />
                }
                text="Салон светильников" 
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
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/daskitchen.jpg"
                  alt=""
                  />
                }
                text="Салон немецкой мебели" 
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
export default InteriorBorovlyany