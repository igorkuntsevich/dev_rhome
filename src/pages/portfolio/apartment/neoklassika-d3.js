import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSergey } from '../../../subitems/project/consultation/project-consultation-sergey'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const NeoklassikaD3 = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн неоклассического интерьера в ЖК D3"} description={"Неоклассика в ЖК D3 дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/neoklassika-d3"}
        image={"https://rhome.by/images/portfolio/neoklassika-d3/01_neoklassika-d3.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Неоклассика в ЖК D3"
                leader="Сергей Рассеко"
                architector="Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data=""
                metr="80"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/neoklassika-d3/01_neoklassika-d3.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/neoklassika-d3/00_neoklassika-d3.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_four_images}
          >
            <StaticImage
              src="../../../images/portfolio/neoklassika-d3/cut/07_neoklassika-d3.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/neoklassika-d3/cut/06_neoklassika-d3.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/neoklassika-d3/cut/12_neoklassika-d3.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/neoklassika-d3/cut/11_neoklassika-d3.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Создать дизайн-проект квартиры в неоклассическом стиле."
              wishText="Я хочу стильную и эффектную квартиру, но в то же время, чтобы она не была требовательной в быту. Мне нравятся яркие дизайнерские светильники, а от мелкого декора хотелось бы уйти – в моем доме не должно быть пылесборников. В гостиной обязательно должно быть место для Рождественской елки."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Дизайн интерьера этой квартиры мы выполнили в неоклассическом стиле. Здесь строгость классических линий сочетается с современным дизайнерским декором. Такое сочетание при всей сдержанности создает ощущение атмосферы праздника.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/neoklassika-d3/02_neoklassika-d3.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/neoklassika-d3/02_neoklassika-d3.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/neoklassika-d3/05_neoklassika-d3.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/neoklassika-d3/05_neoklassika-d3.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Стильные акценты в интерьере</h2>
              <div>
                <p className={styles.project__p}>Столовая зона – один из акцентов в интерьере этой квартиры. Мы выделили ее яркими креслами и кольцевой люстрой над столом. Поскольку в ЖК D3 большие окна, обеденный стол – место сбора семьи и гостей – мы разместили у окна. К тому же это совпало с пожеланием хозяйки дома завтракать, наслаждаясь видом. Все места приспособленные под прием пищи: в гостиной, кухне и лоджии, расположены так, чтобы можно было смотреть в окно во время трапезы.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/neoklassika-d3/04_neoklassika-d3.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/neoklassika-d3/04_neoklassika-d3.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/neoklassika-d3/06_neoklassika-d3.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/neoklassika-d3/06_neoklassika-d3.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/neoklassika-d3/03_neoklassika-d3.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/neoklassika-d3/03_neoklassika-d3.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>



            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Минимализм хорошо сочетается с неоклассикой</h2>
            </div>
            <div className={styles.project__two_inline_bigrightimg}>
              <div className={styles.project__two_inline_bigrightimg_left}>
                <div>
                  <p className={styles.project__p}>Кухня проходная – она объединяет гостиную и лоджию. Трековый светильник очерчивающий внутренний периметр кухни, визуально замыкает пространство. Кухня минималистичная в отделке мы использовали крупноформатную плитку под камень и крашеный МДФ светло-серого цвета. Шпонированные фасады верхних шкафчиков немного смягчают антураж. Столешница, расположенная у окна, сделана из камня. Поскольку камень обычно холодный, мы встроили подогрев, чтобы за ней было уютно сидеть.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/neoklassika-d3/08_neoklassika-d3.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/neoklassika-d3/08_neoklassika-d3.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/neoklassika-d3/09_neoklassika-d3.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/neoklassika-d3/09_neoklassika-d3.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/neoklassika-d3/07_neoklassika-d3.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/neoklassika-d3/07_neoklassika-d3.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/neoklassika-d3/12_neoklassika-d3.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/neoklassika-d3/12_neoklassika-d3.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/neoklassika-d3/15_neoklassika-d3.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/neoklassika-d3/15_neoklassika-d3.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className={styles.project__bigmargin}>
            <ProjectConsultationSergey
                text="Акцентные дизайнерские светильники, несмотря на размер, часто не дают достаточной освещённости. Наша рекомендация – комбинировать декоративные светильники с функциональными и незаметными спотовыми светильниками. Они не утяжеляют интерьер квартиры, но заметно увеличивают уровень освещенности."
            />
            </div>

              <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Эта квартира в ЖК D3 со свободной планировкой, поэтому продумывая дизайн интерьера квартиры, расположение и размер комнат, мы отталкивались от пожеланий заказчицы. Для нее было важно иметь просторную и функциональную гардеробную, чтобы организовать хранение вещей в одном месте. Коридор, соединяющий прихожую с гостиной, не слишком широкий – важнее было сделать достаточно большую гардеробную и постирочную.</p>
               </div>
              <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/neoklassika-d3/10_neoklassika-d3.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/neoklassika-d3/10_neoklassika-d3.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/neoklassika-d3/11_neoklassika-d3.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/neoklassika-d3/11_neoklassika-d3.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Санузел</h2>
            </div>
            <a href="https://rhome.by/images/portfolio/neoklassika-d3/14_neoklassika-d3.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/neoklassika-d3/14_neoklassika-d3.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

          </div>
        </div>
      </Fancybox>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
    </Layout>
  )
}
export default NeoklassikaD3