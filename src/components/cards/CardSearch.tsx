import React, { FunctionComponent } from 'react'

import './Card.scss'

interface CardProps {
    image?: string
    loading:boolean
    title:string
    published: string | Date | number
    onClick: any | string
    pillarName: string
    sectionName:string
    summary:string
}

interface Image{
    href:Links[]
}

interface Links{
    links:string
}

const Card: FunctionComponent<CardProps> = ({
    loading,
    title,
    published,
    children,
    onClick,
    pillarName,
    sectionName,
    summary
}) => {
    return (
        <article className="position-relative">
        <div className='dev-card-base dev-flex-column' onClick={onClick}>
        <div className='dev-card-base__body dev-card-base__body--grow dev-u-padding-default'>
        <h4 className="dev-u-padding-horizontal">{title}</h4> 
        <p className="dev-u-padding-horizontal">{pillarName}, {sectionName}</p> 
        <p className="dev-u-padding-horizontal">{summary}</p> 
            </div>
            <div className="dev-card-base__footer">
    <span className="card-badge">{published}</span>
            </div>
            {children && <div className="card__body dev-u-padding-default">{children}</div>}
        </div>
        </article>
    )
}

export default Card