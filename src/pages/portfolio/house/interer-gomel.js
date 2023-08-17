import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskDmitry } from '../../../subitems/project/task/project-task-dmitry'

const IntererGomel = () => {
  return (
    <Layout>
      <Seo 
        title={"Интерьер дома в Гомеле | Дизайн студия «Rhome.by»"} description={"Интерьер дома в Гомеле от дизайн студии «Rhome.by» - качественная работа, прозрачные условия, фото портфолио, 200+ успешных проектов"}
        location={"https://rhome.by/portfolio/house/interer-gomel"}
        image={"https://rhome.by/images/portfolio/interer-gomel/01_interer-gomel.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Интерьер дома в Гомеле"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="иентябрь 2015"
                metr="450"
                building=""
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/interer-gomel/01_interer-gomel.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/interer-gomel/00_interer-gomel.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <div className="wrapper">
            <ProjectTaskDmitry
              taskText="Разработать интерьер частного дома в современном стиле."
              wishText="Нам бы хотелось получить современный дом в темных тонах. Материалы подберите натуральные: дерево, камень, стекло, кирпич. Кухней пользуемся не так уж часто, поэтому сделайте ее небольшой. Только обязательно спрячьте всю технику, кастрюли и прочие черпаки в шкафы. Декор — по минимуму."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Дом проектировал местный архитектор, а мы получили для работы 500 квадратных метров абсолютно логичного и грамотно выстроенного пространства. По сути, дизайнерам оставалось лишь наполнить дом «жизнью». Поэтому планировку решено оставить без изменений. Первое, что захотелось сделать — это привнести экстерьер в дизайн интерьера дома. Живописные пейзажи прекрасно видны из каждого уголка дома. Поэтому входная дверь полностью прозрачная. Пришлось, кстати, изрядно потрудиться, прежде чем найти и смонтировать дверь без лишних перемычек с тонкими профилями.</p>
              </div>
            </div>
   
            <a href="https://rhome.by/images/portfolio/interer-gomel/02_interer-gomel.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/interer-gomel/02_interer-gomel.jpg"
                alt=""
                className={styles.project__one_image + " " + styles.project__narrow_block + " " + styles.project__bigmargin}
              />
            </a>  

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-gomel/20_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/20_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-gomel/21_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/21_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Так как по плану в коридоре размещается огромная гардеробная, пространство холла остается просторным без лишних деталей. Акценты — бирюзовый цвет стен и апельсиновое кресло. Лаконичную лестницу из массива подсвечиваем светодиодными лентами. Белое ограждение только на первый взгляд выглядит простым. На самом деле инженеру пришлось найти нетиповое решение, чтобы аккуратно совместить бетонное основание и стеклянную ленту с перилом.</p>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/interer-gomel/22_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/22_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-gomel/23_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/23_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Яркий декор</h2>
                <div>
                <p className={styles.project__p}>Чтобы разбавить однотонные стены, добавили картины и эффектную люстру. В гостиной добавляем элементы, характерные для интерьеров Манхэттена. Клинкерный мелкоформатный кирпич часто встречается в высотках NY.</p>
              </div>
            </div>           
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-gomel/13_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/13_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-gomel/15_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/15_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>В зоне кухни разместили ящики с закрытыми фасадами и яркий оранжевый «фартук». Цвет поддерживается отделкой барных стульев. Большая обеденная группа приехала из Италии. В гостиной запланировано несколько зон для отдыха: TV зона, камин и диван для просмотра фильмов через проектор. Чтобы превратить гостиную в кинотеатр даже в самый солнечный день, на все окна декоратор вешает светонепроницаемые шторы.</p>
            </div>

            <div className="line"></div>
            <h2 className={styles.project__title}>Решения для четырех спален</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>Благородные темные оттенки придают спальне в стиле ар-деко больше тепла и уюта Большая кровать и черная дизайнерская люстра — главные герои этого интерьера. Систему вентиляции мы спрятали за опусками потолка.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/interer-gomel/08_interer-gomel.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/interer-gomel/08_interer-gomel.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/interer-gomel/09_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/09_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>В комнате ребенка все предельно просто: большая удобная кровать с ортопедическим матрасом, забавные акценты в виде оленя и картины с обезьяной-меломаном и рабочее место.</p>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-gomel/04_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/04_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-gomel/05_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/05_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-gomel/07_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/07_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Для девочки мы выбрали яркие красные обои с акцентным орнаментом. Пол, кровать, шторы и потолок — фоновые, чтобы не перегружать помещение лишними деталями.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-gomel/03_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/03_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-gomel/06_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/06_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900}>
              <p className={styles.project__p}>Для гостевой спальни предлагаем остановиться на бюджетных, но эффектных материалах: белой краске для стен и деревянных панелях.</p>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/interer-gomel/10_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/10_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-gomel/11_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/11_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн интерьера ванных комнат</h2>
                <div>
                <p className={styles.project__p}>Для отделки помещения идеально подходит плитка под белый мрамор. Душ сознательно делаем «невидимым». Благодаря сплошному остеклению в относительно небольшом помещении становится просторнее. Принудительную и естественную вентиляцию прячем в многоуровневый потолок с молдингами.
У окна разместили большую угловую ванну и два умывальника. В противоположном углу — душ и система хранения.</p>
              </div>
            </div>         
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-gomel/16_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/16_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-gomel/17_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/17_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>В этом санузле геометрию помещения подчеркнули полосой из белой гальки, привнося ноту Средиземноморья.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-gomel/18_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/18_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-gomel/19_interer-gomel.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/19_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__leftimage_righttext + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-gomel/12_interer-gomel.webp"
                data-fancybox="gallery"
                className={styles.project__leftimage_righttext_link}
                >
                <StaticImage
                  src="../../../images/portfolio/interer-gomel/12_interer-gomel.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <div className={styles.project__leftimage_righttext_text}>
                <p className={styles.project__leftimage_righttext_text_p}>В бассейне дизайнер создал «вечное лето» благодаря стабилизированному мху. Он не требует ухода, приятен на вид и на ощупь. В зоне отдыха приятно будет полежать на диване или шезлонге.</p>
              </div>
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
                  src="../../../images/partners/oikos.jpg"
                  alt=""
                  />
                }
                text="Декоративная штукатурка и краска"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/krea.jpg"
                  alt=""
                  />
                }
                text="Салон обоев"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/orac.jpg"
                  alt=""
                  />
                }
                text="Лепной декор"
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
export default IntererGomel