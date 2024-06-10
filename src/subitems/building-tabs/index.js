import * as React from "react"
import * as styles from "./tabs.module.scss"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export const TermTabs = () => {
  return (
    <div className={styles.services_term}>
      <h2 className={styles.services_term_title}>Сроки и&nbsp;виды работ</h2>
      <p className={styles.services_term_text}>Выберите из&nbsp;примеров то&nbsp;что наиболее похоже на&nbsp;ваш проект</p>
      <Tabs>
        <div className={styles.services_term_wrap}>
          <SimpleBar forceVisible="y" autoHide={false}>
            <TabList className={styles.services_term_head}>
              <Tab className={styles.services_term_head_item}>50-80м<sup>2</sup></Tab>
              <Tab className={styles.services_term_head_item}>80-100м<sup>2</sup></Tab>
              <Tab className={styles.services_term_head_item}>100-150м<sup>2</sup></Tab>
              <Tab className={styles.services_term_head_item}>150-200м<sup>2</sup></Tab>
              <Tab className={styles.services_term_head_item}>200-250м<sup>2</sup></Tab>
            </TabList>
          </SimpleBar>
        </div>
        <TabPanel>
          <div className={styles.services_term_body}>
            <p className={styles.services_term_body_item_title}>5 месяцев <span className={styles.services_term_body_item_title_span}>(ориентировочные сроки)</span></p>
            <div className={styles.services_term_line}></div>
            <div className={styles.services_term_body_grid}>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Подготовительные работы</p>
                <p className={styles.services_term_body_grid_item_p}>Проводим демонтаж старых и&nbsp;монтаж новых перегородок, заливаем стяжку, делаем электромонтажные и&nbsp;сантехнические работы, монтируем гипсокартонные конструкции и&nbsp;штукатурим.</p>
              </div>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Малярные работы и&nbsp;облицовка плиткой</p>
                <p className={styles.services_term_body_grid_item_p}>Подготавливаем стены под покраску, обои, декоративную штукатурку, укладываем плитку и&nbsp;красим потолки.</p>
              </div>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Финишная отделка</p>
                <p className={styles.services_term_body_grid_item_p}>Укладываем паркет и&nbsp;монтируем плинтуса, устанавливаем сантехнику и&nbsp;электрику (розетки, выключатели и&nbsp;светильники), клеим обои.</p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.services_term_body}>
            <p className={styles.services_term_body_item_title}>6 месяцев <span className={styles.services_term_body_item_title_span}>(ориентировочные сроки)</span></p>
            <div className={styles.services_term_line}></div>
            <div className={styles.services_term_body_grid}>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Подготовительные работы</p>
                <p className={styles.services_term_body_grid_item_p}>Проводим демонтаж старых и&nbsp;монтаж новых перегородок, заливаем стяжку, делаем электромонтажные и&nbsp;сантехнические работы, монтируем гипсокартонные конструкции и&nbsp;штукатурим.</p>
              </div>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Малярные работы и&nbsp;облицовка плиткой</p>
                <p className={styles.services_term_body_grid_item_p}>Подготавливаем стены под покраску, обои, декоративную штукатурку, укладываем плитку и&nbsp;красим потолки.</p>
              </div>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Финишная отделка</p>
                <p className={styles.services_term_body_grid_item_p}>Укладываем паркет и&nbsp;монтируем плинтуса, устанавливаем сантехнику и&nbsp;электрику (розетки, выключатели и&nbsp;светильники), клеим обои.</p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.services_term_body}>
            <p className={styles.services_term_body_item_title}>7 месяцев <span className={styles.services_term_body_item_title_span}>(ориентировочные сроки)</span></p>
            <div className={styles.services_term_line}></div>
            <div className={styles.services_term_body_grid}>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Подготовительные работы</p>
                <p className={styles.services_term_body_grid_item_p}>Проводим демонтаж старых и&nbsp;монтаж новых перегородок, заливаем стяжку, делаем электромонтажные и&nbsp;сантехнические работы, монтируем гипсокартонные конструкции и&nbsp;штукатурим.</p>
              </div>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Малярные работы и&nbsp;облицовка плиткой</p>
                <p className={styles.services_term_body_grid_item_p}>Подготавливаем стены под покраску, обои, декоративную штукатурку, укладываем плитку и&nbsp;красим потолки.</p>
              </div>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Финишная отделка</p>
                <p className={styles.services_term_body_grid_item_p}>Укладываем паркет и&nbsp;монтируем плинтуса, устанавливаем сантехнику и&nbsp;электрику (розетки, выключатели и&nbsp;светильники), клеим обои.</p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.services_term_body}>
            <p className={styles.services_term_body_item_title}>8 месяцев <span className={styles.services_term_body_item_title_span}>(ориентировочные сроки)</span></p>
            <div className={styles.services_term_line}></div>
            <div className={styles.services_term_body_grid}>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Подготовительные работы</p>
                <p className={styles.services_term_body_grid_item_p}>Проводим демонтаж старых и&nbsp;монтаж новых перегородок, заливаем стяжку, делаем электромонтажные и&nbsp;сантехнические работы, монтируем гипсокартонные конструкции и&nbsp;штукатурим.</p>
              </div>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Малярные работы и&nbsp;облицовка плиткой</p>
                <p className={styles.services_term_body_grid_item_p}>Подготавливаем стены под покраску, обои, декоративную штукатурку, укладываем плитку и&nbsp;красим потолки.</p>
              </div>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Финишная отделка</p>
                <p className={styles.services_term_body_grid_item_p}>Укладываем паркет и&nbsp;монтируем плинтуса, устанавливаем сантехнику и&nbsp;электрику (розетки, выключатели и&nbsp;светильники), клеим обои.</p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.services_term_body}>
            <p className={styles.services_term_body_item_title}>9 месяцев <span className={styles.services_term_body_item_title_span}>(ориентировочные сроки)</span></p>
            <div className={styles.services_term_line}></div>
            <div className={styles.services_term_body_grid}>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Подготовительные работы</p>
                <p className={styles.services_term_body_grid_item_p}>Проводим демонтаж старых и&nbsp;монтаж новых перегородок, заливаем стяжку, делаем электромонтажные и&nbsp;сантехнические работы, монтируем гипсокартонные конструкции и&nbsp;штукатурим.</p>
              </div>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Малярные работы и&nbsp;облицовка плиткой</p>
                <p className={styles.services_term_body_grid_item_p}>Подготавливаем стены под покраску, обои, декоративную штукатурку, укладываем плитку и&nbsp;красим потолки.</p>
              </div>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Финишная отделка</p>
                <p className={styles.services_term_body_grid_item_p}>Укладываем паркет и&nbsp;монтируем плинтуса, устанавливаем сантехнику и&nbsp;электрику (розетки, выключатели и&nbsp;светильники), клеим обои.</p>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}



