import React from 'react'
import Post from './Post'

const Posts = (props) => {
    return (
        <div>
            {props.postData.map(p => (
               <Post key={p.id} name = {p.name} region= {p.region} population={p.population} capital={p.capital} img={p.flag}/>
            ))}
        </div>
    )
}

export default Posts
