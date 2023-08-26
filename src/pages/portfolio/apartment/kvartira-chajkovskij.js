import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSergey } from '../../../subitems/project/consultation/project-consultation-sergey'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskDmitry } from '../../../subitems/project/task/project-task-dmitry'

const KvartiraChajkovskij = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира с контрастными элементами в ЖК «Чайковский»"} description={"Квартира с контрастными элементами в ЖК «Чайковский» дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-chajkovskij"}
        image={"https://rhome.by/images/portfolio/kvartira-chajkovskij/01_kvartira-chajkovskij.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира с контрастными элементами в ЖК «Чайковский»"
                leader="Сергей Рассеко"
                architector="Дмитрий Вашкевич, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="ноябрь 2018"
                metr="70"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-chajkovskij/01_kvartira-chajkovskij.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-chajkovskij/00_kvartira-chajkovskij.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskDmitry
              taskText="Разработать дизайн интерьера квартиры в современном стиле."
              wishText="В нашей новой квартире хотим видеть современный, воздушный интерьер, располагающий в первую очередь к отдыху. Нам нравятся светлые глянцевые поверхности в сочетании с темными контрастными элементами. Так как квартира свободной планировки, обязательно отделите спальню от всего остального пространства, а вместо кладовой было бы отлично сделать небольшую гардеробную."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Изначально планировка квартиры была свободная, поэтому зонирование создавалось с учетом потребностей всех членов семьи. Хозяевам было важно, чтобы каждая из зон на 100% выполняла свою функцию, поэтому от общего объединенного пространства все же решили отказаться. Таким образом, помещение разделили на несколько зон: входную, спальную, столовую и гостиную. Ванную и туалет, наоборот, объединили в общий санузел, так было удобнее хозяевам.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/02_kvartira-chajkovskij.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-chajkovskij/02_kvartira-chajkovskij.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Cветлый согревающий интерьер</h2>
              <div>
                <p className={styles.project__p}>Оформив все пожелания заказчиков в единую концепцию дизайн-проекта квартиры, в качестве основных материалов выбрали стекло, зеркала, эффектные глянцевые поверхности. А чтобы смягчить активный белый цвет и «согреть» его, ввели в интерьер дерево в светлых оттенках. Для того, чтобы интерьер не выглядел слишком стерильным, к белым глянцевым поверхностям добавили черные контрастные элементы: стеллаж до потолка и фрезерованную МДФ-панель в зоне TV.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/03_kvartira-chajkovskij.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-chajkovskij/03_kvartira-chajkovskij.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/04_kvartira-chajkovskij.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-chajkovskij/04_kvartira-chajkovskij.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/06_kvartira-chajkovskij.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-chajkovskij/06_kvartira-chajkovskij.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/09_kvartira-chajkovskij.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-chajkovskij/09_kvartira-chajkovskij.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Игра с объемами</h2>
              <div>
                <p className={styles.project__p}>Обсуждая пожелания с заказчиками, дизайнер выяснил, что им нравится игра с объемами. Благодаря этому на потолке появилась многоуровневая конструкция с эффектом «парения». Центром композиции здесь, безусловно, стала оригинальная спиралевидная люстра Delta Light, которая меняет свою конфигурацию в зависимости от ракурса взгляда. Несущую колонну, которая осталась после объединения гостиной с лоджией, отделали зеркалами: этот трюк не только визуально раздвигает границы пространства, но и добавляет комнате еще больше воздушности за счет отраженного света.</p>
              </div>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/05_kvartira-chajkovskij.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-chajkovskij/05_kvartira-chajkovskij.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/07_kvartira-chajkovskij.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-chajkovskij/07_kvartira-chajkovskij.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/08_kvartira-chajkovskij.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-chajkovskij/08_kvartira-chajkovskij.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>На бывшей лоджии организовали небольшой домашний офис. Окна тут в пол, поэтому недостатка дневного света точно не будет. На пол в жилых помещениях положили светлый кремовый паркет, в прихожей и на кухне — керамогранит Atlas Concorde в таком же оттенке. В торце коридора установили большое зеркало с фацетом: опять-таки, с целью раздвинуть границы пространства.</p>
            </div>


            <ProjectConsultationSergey
                text="Когда обсуждаете пожелания по интерьеру квартиры с дизайнером, важно рассказать о стиле жизни и предпочтениях будущих жильцов. Даже если вы делаете ремонт квартиры под сдачу, стоит заранее обдумать, кто может жить в этой квартире. Это прояснит не только задачу дизайнеру, но и сделает квартиру более привлекательной для потенциальных арендаторов."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Спальня с бьюти-зоной</h2>
              <div>
              <p className={styles.project__p}>В спальне – самый большой комнате квартиры – заказчикам хотелось создать мягкую расслабляющую атмосферу с намеком на классику, поэтому для ее оформления были выбраны нежные пастельные тона. Стильный акцент – композиция из ассиметричных декоративных зеркал Cattelan Italia в изголовье огромной, мягкой двуспальной кровати.</p>
                <p className={styles.project__p}>В углу комнаты организовали небольшую beauty-зону для хозяйки со встроенным туалетным столиком и большим зеркалом с вставками, как в гостиной.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/10_kvartira-chajkovskij.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-chajkovskij/10_kvartira-chajkovskij.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/11_kvartira-chajkovskij.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-chajkovskij/11_kvartira-chajkovskij.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/12_kvartira-chajkovskij.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-chajkovskij/12_kvartira-chajkovskij.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/13_kvartira-chajkovskij.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-chajkovskij/13_kvartira-chajkovskij.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Перепланировка ванной комнаты</h2>
            </div>
            <div className={styles.project__two_inline_bigrightimg}>
              <div className={styles.project__two_inline_bigrightimg_left}>
                <div>
                  <p className={styles.project__p}>В ванной на фоне белого керамогранита под мрамор ярко выделяется черная подвесная тумба с умывальником. В целом, весь санузел воплощает основные пожелания заказчиков: светлый интерьер и контрастные вставки. Небольшая ванная и туалет за счет перепланировки были незначительно расширены и объединены в единое пространство. В итоге получили просторное помещение, где удалось разместить не только ванную, а еще стильную стеклянную душевую и необычный подвесной унитаз обтекаемой формы от немецкого бренда Villeroy & Boch.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/14_kvartira-chajkovskij.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/kvartira-chajkovskij/14_kvartira-chajkovskij.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/kvartira-chajkovskij/15_kvartira-chajkovskij.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-chajkovskij/15_kvartira-chajkovskij.jpg"
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
                    src="../../../images/partners/atrium.jpg"
                    alt=""
                    />
                  }
                  text="Салон плитки и сантехники" 
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
                    src="../../../images/partners/stonetech.jpg"
                    alt=""
                    />
                  }
                  text="Мастерская камня" 
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
                    src="../../../images/partners/rode.jpg"
                    alt=""
                    />
                  }
                  text="Салон штор и текстиля" 
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
export default KvartiraChajkovskij