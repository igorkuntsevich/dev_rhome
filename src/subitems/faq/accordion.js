import * as React from "react"
import { useState } from "react"
import * as styles from "./faq.module.scss"


export const Accordion = ({config}) => {

  return (
    <>

      {
        config.map((item , i )=>{
          return   <Item   key={i}  text={item.text} title={item.title}/>
        })
      }
    </>


  )
}

const Item = ({ title , text })=>{
  const [ open , setOpen ] =useState(false)

  return <div className={"faq_item" + ( open? " open" : "")}>
    <div onClick={ ()=> setOpen(!open)} className="faq_item_head">
      <h2
        className={styles.faq_item_title}
        dangerouslySetInnerHTML={{__html:title}}
      />
    </div>
    <div
      className="faq_item_text"
      dangerouslySetInnerHTML={{__html:text}}>
    </div>
  </div>
}