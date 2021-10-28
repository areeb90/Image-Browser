import React from 'react'

export default function SearchResult(props) {
    const image = `https://source.unsplash.com/800x500/?${props.name}`
    return (
        <div className='SearchResult'>
            <img src={image} alt='search image'/>
        </div>
    )
}
