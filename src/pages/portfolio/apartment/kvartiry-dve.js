import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const KvartiryDve = () => {
  return (
    <Layout>
      <Seo 
        title={"Две квартиры для одной семьи - RHOME"} description={"Две квартиры для одной семьи дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartiry-dve"}
        image={"https://rhome.by/images/portfolio/kvartiry-dve/01_kvartiry-dve.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Две квартиры для одной семьи"
                leader="Сергей Рассеко"
                architector="Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="ноябрь 2018"
                metr="100"
                building="10 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartiry-dve/01_kvartiry-dve.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartiry-dve/00_kvartiry-dve.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать дизайн интерьера двух соседних квартир в современном стиле."
              wishText="Очень понравился по стилистике проект Монохромная квартира на ул. Мстиславца, который делала ваша студия. Цветовая гамма, планировочные решения — все очень гармонично, современно и без излишеств. Однако в нашей квартире хотелось бы все же добавить немного цвета и деревянных поверхностей."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Заказчики купили две соседние квартиры в новостройке и изначально планировали объединить их в одну. Однако, пообщавшись с дизайнером, решили оставить как есть: большую – для себя, поменьше – для взрослого сына. Приступая к проекту, мы имели дело с двумя практически пустыми пространствами — стояли только перегородки, показывающие границы санузлов. Чтобы максимально эффективно использовать каждый сантиметр площади обеих квартир, мы объединили лоджии с жилым помещением, добавив тем самым еще больше естественного света за счет панорамных окон.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartiry-dve/02_kvartiry-dve.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartiry-dve/02_kvartiry-dve.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/kvartiry-dve/05_kvartiry-dve.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartiry-dve/05_kvartiry-dve.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Лаконично, просто, графично</h2>
              <div>
                <p className={styles.project__p}>Интерьер этой квартиры — архитектурный, без излишеств и декораторских приемов. Чтобы сделать жилье более гармоничным и уютным, дизайнер объединил все помещения общим стилистическим решением: во всех комнатах есть сочетание темного и светлого дерева. Напольное покрытие тоже одно: модульный паркет французская елка от Coswick – удачный тандем всегда актуальной классики и оптимальных геометрических пропорций.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartiry-dve/07_kvartiry-dve.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartiry-dve/07_kvartiry-dve.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartiry-dve/08_kvartiry-dve.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartiry-dve/08_kvartiry-dve.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartiry-dve/06_kvartiry-dve.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartiry-dve/06_kvartiry-dve.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="Даже если вы планируете просто перенести отопительный радиатор, без демонтажа стены, документы все равно необходимо утверждать. Этот процесс довольно длительный, поэтому следует заранее побеспокоиться об этом."
              />
          </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Минималистичная кухня с цветовыми нюансами</h2>
              <div>
                <p className={styles.project__p}>Кухня в минималистичном стиле смотрится единым крупным объектом благодаря тонким цветовым нюансам, объединившим темные матовые фасады и контрастный светлый керамогранит с имитацией песчаника на фартуке. Стол и стулья от итальянской фабрики Poliform – это воплощение классических форм в современном стиле. В целом, мебель является основным цветовым акцентом в дизайне интерьера квартиры. Дизайнер аккуратно ввел в нейтральную природную палитру насыщенные бордовые и голубые оттенки, получилось графично и очень стильно. В родительской квартире акцентным цветом стал бордовый.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartiry-dve/03_kvartiry-dve.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartiry-dve/03_kvartiry-dve.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartiry-dve/04_kvartiry-dve.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartiry-dve/04_kvartiry-dve.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartiry-dve/05_kvartiry-dve.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartiry-dve/05_kvartiry-dve.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>




            
          <div className="line"></div>
            <h2 className={styles.project__title}>Самодостаточная обстановка спальни</h2>

            
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>Для заказчиков было крайне важно не перегружать пространство, поэтому в спальне присутствуют только самые необходимые для этой комнаты вещи. Такой подход полностью себя оправдывает, ведь в итоге обстановка выглядит просторной и самодостаточной: здесь только кровать и тумбы, а из декора — выразительная стена изголовья из мягких декоративных панелей и минималистичные светильники. Нужное настроение покоя и уюта в спальне создает большое количество деревянных текстур и приглушенный свет. Так здесь появился вместительный встроенный шкаф во всю стену и современная трековая система освещения Infinity над ним.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/kvartiry-dve/10_kvartiry-dve.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/kvartiry-dve/10_kvartiry-dve.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/kvartiry-dve/11_kvartiry-dve.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartiry-dve/11_kvartiry-dve.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartiry-dve/12_kvartiry-dve.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartiry-dve/12_kvartiry-dve.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartiry-dve/13_kvartiry-dve.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartiry-dve/13_kvartiry-dve.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

          <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн интерьера квартиры сына</h2>
              <div>
                <p className={styles.project__p}>Все помещения в этой квартире выдержаны в единой стилистике с квартирой родителей, чтобы в будущем при желании объединить эти два помещения не возникло диссонанса в интерьере.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartiry-dve/16_kvartiry-dve.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartiry-dve/16_kvartiry-dve.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartiry-dve/20_kvartiry-dve.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartiry-dve/20_kvartiry-dve.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


          <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Эргономичная планировка санузла</h2>
              <div>
                <p className={styles.project__p}>В небольшом санузле удалось вместить все необходимое за счет грамотной эргономики. Сушильную и стиральную машины встроили в специальную нишу друг над другом, сэкономив таким образом значительную часть пространство. А широкоформатная плитка Living Ceramics визуально расширяет помещение за счет небольшого количества швов и светлого оттенка.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartiry-dve/21_kvartiry-dve.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartiry-dve/21_kvartiry-dve.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartiry-dve/22_kvartiry-dve.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartiry-dve/22_kvartiry-dve.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

          <div className="line"></div>
          <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Незаметные системы хранения</h2>
              <div>
              <p className={styles.project__p}>Систем хранения в квартире много, но они спроектированы так, чтобы не бросались в глаза. В прихожей удалось вместить небольшой шкаф для верхней одежды. В гостиной – встроенный шкаф во всю стену, как в родительской спальне. Для остальных помещений по эскизам дизайнера будут изготовлены системы стеллажей и закрытых полок для хранения книг и личных вещей.</p>
                <p className={styles.project__p}>Главная задача – поделить пространство однокомнатной квартиры на две зоны: приватную и гостевую. Сделали это с помощью декоративной реечной перегородки, она не мешает проникновению естественного света и отлично зонирует. Обеденная зона – первое, что видит гость, когда заходит в квартиру. Оформлена она при помощи изящной датской мебели, сочетающей в себе минимализм и чистые линии без ущерба для комфорта.</p>
              </div>
          </div>


          <a href="https://rhome.by/images/portfolio/kvartiry-dve/15_kvartiry-dve.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartiry-dve/15_kvartiry-dve.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartiry-dve/18_kvartiry-dve.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartiry-dve/18_kvartiry-dve.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartiry-dve/14_kvartiry-dve.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartiry-dve/14_kvartiry-dve.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Так как хозяин этой квартиры – студент, обязательным условием было наличие хорошо освещенного и удобного рабочего места. С этой задачей мы справились, расположив навесную тумбу, выполняющую роль рабочего стола, на бывшей лоджии. Тут точно не будет недостатка естественного света.</p>
            </div>

          <a href="https://rhome.by/images/portfolio/kvartiry-dve/19_kvartiry-dve.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartiry-dve/19_kvartiry-dve.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


          </div>
        </div>
        <div className="wrapper">
          <ProjectPartner
            items={
            <>
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
                  src="../../../images/partners/rode.jpg"
                  alt=""
                  />
                }
                text="Салон штор и текстиля" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/viridian.jpg"
                  alt=""
                  />
                }
                text="Студия интерьеров" 
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
export default KvartiryDve