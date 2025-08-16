// rafce
import React, { useState } from 'react'
import "./Accordion.css"
import { Card } from "primereact/card"

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const clickedItem = (index) => {
        setActiveIndex(index)
    }

    const jsxExpression = items.map((item, index) => {
        const classShowIcon = activeIndex === index
            ? "pi pi-angle-down"
            : "pi pi-angle-right"

        const classShowContent = index === activeIndex 
            ? ""
            : "hidden"

        return(
            <Card id="accordion" key={index} className="border-1 border-400">
                <div onClick={() => clickedItem(index)}>
                    <i className={classShowIcon}></i>
                    <h5 className="ml-3 inline">{item.title}</h5>
                </div>
                <p className={classShowContent}>
                    {item.content}
                </p>
            </Card>
        )
    })

    return(
        <div>
            <p>{activeIndex}</p>
            {
                jsxExpression
            }
        </div>
    )
}

export default Accordion