import * as React from "react"
import { Accordion } from "./accordion"


export const Faq = () => {
  const config  = [
    {
      title:'Для чего нужен дизайн-проект?',
      text:'<p class="faq_item_p">Каждое успешное дело начинается с&nbsp;подробного плана, в&nbsp;ремонте это дизайн-проект. Именно в&nbsp;нем есть ответы на&nbsp;основные вопросы, которые сделают ваш интерьер уютным и&nbsp;неповторимым, а&nbsp;процесс ремонта превратится из&nbsp;хаоса в&nbsp;хорошо спланированное мероприятие. Хотя&nbsp;бы, потому что на&nbsp;любой вопрос строителей всегда можно ответить &laquo;ребята, делайте по&nbsp;проекту&raquo;.</p>'
    },
    {
      title:'Какой срок разработки дизайн-проекта?',
      text:'<p class="faq_item_p">Технологический срок разработки дизайн проекта квартиры площадью 100 кв.м. &mdash;&nbsp;1,5-2&nbsp;месяца. Однако сроки так&nbsp;же зависят и&nbsp;от&nbsp;заказчика, от&nbsp;того сколько человек принимают решения и&nbsp;как быстро они согласовывают варианты предложенные дизайнером. Поэтому в&nbsp;среднем ориентируйтесь на&nbsp;2-3&nbsp;месяца.</p>'
    },
    {
      title:'Можно&nbsp;ли начинать ремонтные работы до&nbsp;сдачи дизайн-проекта?',
      text:'<p class="faq_item_p">Мы&nbsp;не&nbsp;рекомендуем начинать ремонт до&nbsp;получения на&nbsp;руки готового проекта, так как в&nbsp;процессе разработки всегда есть вероятность, что то&nbsp;изменить (например, подвинуть на&nbsp;несколько сантиметров стену). Окончательный дизайн-проект помогает избежать ненужных переделок путем анализа решений в&nbsp;момент разработки и&nbsp;несколькими этапами проверки перед сдачей.</p>'
    }
  ];
  return (
      <Accordion config={config} />
  )
}