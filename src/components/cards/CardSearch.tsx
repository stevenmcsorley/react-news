import React, { FunctionComponent } from 'react'

import './Card.scss'

interface CardProps {
    image: string
    loading:boolean
    title:string
    published: string | Date | number
    onClick: any | string
}

interface Image{
    href:Links[]
}

interface Links{
    links:string
}

const Card: FunctionComponent<CardProps> = ({
    loading,
    image,
    title,
    published,
    children,
    onClick,
}) => {
    return (
        <article className="position-relative">
        <div className='dev-card-base dev-flex-column' onClick={onClick}>
        <div className='dev-card-base__body dev-card-base__body--grow dev-u-padding-default'>
            <div className="dev-card-base__image" >
            <div className="dev-card-base__image" onClick={onClick}>
                <img src={image ? image: 'https://c.pxhere.com/photos/aa/fa/newspaper_news_information_read_press_daily_newspaper_paper_magazines-811573.jpg!d'} alt='' />
            </div>
            </div>
            </div>
            <div className="dev-card-base__footer">
    <h4 className="dev-u-padding-horizontal">{title}</h4> 
    <span className="card-badge">{published}</span>
            </div>
            {children && <div className="card__body dev-u-padding-default">{children}</div>}
        </div>
        </article>
    )
}

export default Card