import * as React from "react"
import { useState } from "react"


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

const Item = ({title , text  })=>{
  const [ open , setOpen] =useState(false)

  return   <div className="faq_item">
    <div onClick={ ()=> setOpen(!open)} className="faq_item_block">
      <h4    dangerouslySetInnerHTML={{__html:title}}/>
    </div>
    <div style={open?{display:'block'}:{}} className="faq_item_block_hidden">
      <div   dangerouslySetInnerHTML={{__html:text}} />
    </div>
  </div>
}