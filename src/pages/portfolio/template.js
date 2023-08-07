import React from 'react'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";
import { ProjectConsultationSvetlana } from '../../subitems/project/consultation/project-consultation-svetlana'
import * as styles from "../../components/styles/portfolio/portfolio-item.module.scss"

const Template = () => {
  return (
    <Layout>
      <Seo 
        title={"Template"} description={"Template"}
        location={"https://rhome.by/portfolio/"}
        image={"https://rhome.by/images/portfolio/dom-berezino/01_dom-berezino.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">



            <a href="https://rhome.by/images/portfolio/dom-berezino/06_dom-berezino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-berezino/06_dom-berezino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>




            <a href="https://rhome.by/images/portfolio/dom-berezino/06_dom-berezino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-berezino/06_dom-berezino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/20_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/20_dom-berezino.jpg"
                  alt=""
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/21_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/21_dom-berezino.jpg"
                  alt=""
                />
              </a>
            </div>




            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/20_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/20_dom-berezino.jpg"
                  alt=""
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/21_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/21_dom-berezino.jpg"
                  alt=""
                />
              </a>
            </div>




            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/29_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/29_dom-berezino.jpg"
                  alt=""
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/30_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/30_dom-berezino.jpg"
                  alt=""
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/31_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/31_dom-berezino.jpg"
                  alt=""
                />
              </a>
            </div>




            <a href="https://rhome.by/images/portfolio/dom-berezino/06_dom-berezino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
              >
              <StaticImage
                src="../../../images/portfolio/dom-berezino/06_dom-berezino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>




            <a href="https://rhome.by/images/portfolio/dom-berezino/06_dom-berezino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-berezino/06_dom-berezino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/20_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/20_dom-berezino.jpg"
                  alt=""
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/21_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/21_dom-berezino.jpg"
                  alt=""
                />
              </a>
            </div>



            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/20_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/20_dom-berezino.jpg"
                  alt=""
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/21_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/21_dom-berezino.jpg"
                  alt=""
                />
              </a>
            </div>




            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/29_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/29_dom-berezino.jpg"
                  alt=""
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/30_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/30_dom-berezino.jpg"
                  alt=""
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/31_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/31_dom-berezino.jpg"
                  alt=""
                />
              </a>
            </div>




            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
                <div>
                <p className={styles.project__p}>Этот проект&nbsp;&mdash; сочетание лучшего, что есть в&nbsp;городской и&nbsp;загородной жизни. Мы&nbsp;спроектировали дом для семьи, где комфорт и&nbsp;утонченная эстетика современного интерьера соседствует с&nbsp;природой.</p>
              </div>
            </div>





            <a href="https://rhome.by/images/portfolio/dom-berezino/02_dom-berezino.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
              >
              <StaticImage
                src="../../../images/portfolio/dom-berezino/02_dom-berezino.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__text_center700}>
              <p className={styles.project__p}>Строгость линий, присущая современной стилистике, сочетается с&nbsp;натуральными материалами и&nbsp;приглушенными оттенками дерева и&nbsp;камня.</p>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>В&nbsp;спальне много света, ведь здесь целых два французских окна. У&nbsp;каждого стоит по&nbsp;кожаному креслу Knoll Hardoy Chair и&nbsp;журнальному столику Menu Androgyne Side Table Black, чтобы можно было почитать при естественном освещении. Напротив двуспальной кровати&nbsp;&mdash; широкий комод Minotti Easel.</p>
            </div>

            <div className={styles.project__leftimage_righttext}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/04_dom-berezino.webp"
                data-fancybox="gallery"
                className={styles.project__leftimage_righttext_link}
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/04_dom-berezino.jpg"
                  alt=""
                />
              </a>
              <div className={styles.project__leftimage_righttext_text}>
                <p className={styles.project__leftimage_righttext_text_p}>Здесь можно жить и&nbsp;работать, наслаждаясь природой. Дом спланирован так, чтобы в&nbsp;любой его части ощущалась близость природы. По&nbsp;задумке архитектора, окна в&nbsp;пол в&nbsp;гостиной на&nbsp;первом этаже объединяют интерьер с&nbsp;садом, а&nbsp;со&nbsp;второго этажа есть выход на&nbsp;террасу, с&nbsp;которой открывается прекрасный вид.</p>
              </div>
            </div>
            
            <h2 className={styles.project__title}>Реализация</h2>
            <div className={styles.project__grid_2flex + " " + styles.project__bigmargin}>
              <div className={styles.project__grid_flex}>
                <a href="https://rhome.by/images/portfolio/dom-berezino/07_dom-berezino.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-berezino/07_dom-berezino.jpg"
                    alt=""
                  />
                </a>
                <a href="https://rhome.by/images/portfolio/dom-berezino/08_dom-berezino.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-berezino/08_dom-berezino.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className={styles.project__grid_flex}>
                <a href="https://rhome.by/images/portfolio/dom-berezino/09_dom-berezino.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-berezino/09_dom-berezino.jpg"
                    alt=""
                  />
                </a>
                <a href="https://rhome.by/images/portfolio/dom-berezino/10_dom-berezino.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-berezino/10_dom-berezino.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className={styles.project__three_with_padding}>
              <a href="https://rhome.by/images/portfolio/dom-berezino/16_dom-berezino.webp"
                data-fancybox="gallery"
                className={styles.project__three_with_padding_fimg}
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/16_dom-berezino.jpg"
                  alt=""
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/17_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/17_dom-berezino.jpg"
                  alt=""
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezino/18_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/18_dom-berezino.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <a href="https://rhome.by/images/portfolio/dom-berezino/19_dom-berezino.webp"
            data-fancybox="gallery"
            className={styles.project__one_image_link}
            >
            <StaticImage
              src="../../../images/portfolio/dom-berezino/15_dom-berezino.jpg"
              alt=""
              className={styles.project__one_image}
            />
          </a>
          <div className="wrapper">

            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="Продумывая планировку, отталкивайтесь от&nbsp;возможностей, которые предлагает архитектура дома. Например, этом проекте на&nbsp;первом этаже все основные функциональные зоны расположены в&nbsp;одном пространстве. Такой ход помогает рационально использовать большую площадь помещения и&nbsp;сделать так, чтобы свет из&nbsp;огромных окон с&nbsp;видом на&nbsp;сад рассеивался свободно."
              />
            </div>

            <div className={styles.project__two_inline_bigrightimg}>
              <div className={styles.project__two_inline_bigrightimg_left}>
                <div>
                  <p className={styles.project__p}>Рядом с&nbsp;диваном Bo&nbsp;Concept Carmo положили ковер Molteni LOOP &amp;&nbsp;CUT Stone&nbsp;&mdash; еще одна нотка уюта, которая не&nbsp;выбивается из&nbsp;общей стилистики интерьера.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/dom-berezino/22_dom-berezino.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-berezino/22_dom-berezino.jpg"
                    alt=""
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/dom-berezino/23_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/23_dom-berezino.jpg"
                  alt=""
                />
              </a>
            </div>

            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>Напротив диванной группы&nbsp;&mdash; ТВ-зона. Утонченный акцент светильник Bolia Leaves Floor Lamp Whitе, расположенный на&nbsp;выполненной под заказ тумбе под телевизор. У&nbsp;панорамного окна место, где можно почитать или просто выпить кофе в&nbsp;креслах Flexform Caroline. Здесь можно любоваться природой, находясь в&nbsp;комфортных условиях, ведь на&nbsp;улице часто бывает непогода.</p>
                  <p className={styles.project__p}>Кухня выполнена на&nbsp;заказ из&nbsp;шпона дуба, столешница из&nbsp;архитектурного бетона. Выглядит эта композиция довольно минималистично, яркая и&nbsp;функциональная деталь&nbsp;&mdash; Вытяжка Teka CC&nbsp;40. От&nbsp;зоны гостиной кухня отделена высоким столом-островом. Его основание так&nbsp;же выполнено из&nbsp;дуба, а&nbsp;столешница из&nbsp;бетона. Рядом барные стулья Design Zebra Antishock Barstool. У&nbsp;окна расположен овальный обеденный стол Menu Snaregade Dining Table.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/dom-berezino/24_dom-berezino.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-berezino/24_dom-berezino.jpg"
                    alt=""
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/dom-berezino/25_dom-berezino.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezino/25_dom-berezino.jpg"
                  alt=""
                />
              </a>
            </div>

          </div>
        </div>
      </Fancybox>
    </Layout>
  )
}
export default Template