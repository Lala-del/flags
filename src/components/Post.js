import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
    return (
        <Link to={`/${props.name}`}>
            <img src={props.img} width="100%" height="200px" />
            <h3>{props.name}</h3>
            <h4>{props.region}</h4>
            <h5>{props.population}</h5>
            <p>{props.capital}</p>
        </Link>
    )
}

export default Post
