// rafce
import React, { useState } from 'react'
import "./Accordion.css"
import { Card } from "primereact/card"

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const clickedItem = (index) => {
        setActiveIndex(index)
    }

    const expressaoJSX = items.map((item, index) => {
        return <Card id="accordion" key={index} className="border-1 border-400">
            <div onClick={() => clickedItem(index)}>
                <i className="pi pi-angle-down"></i>
                <h5 className="ml-3 inline">{item.title}</h5>
            </div>
            <p>
                {item.content}
            </p>
        </Card>
    })

    return (
        <div>
            <p>{activeIndex}</p>
            {
                expressaoJSX
            }
        </div>
    )
}

export default Accordion