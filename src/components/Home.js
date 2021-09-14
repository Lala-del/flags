import React from 'react'
import Post from './Post'

const Home= (props) => {
    return (
        <div className = "container">
            <div className="row">
                {props.postData.map(p => (
                    <div className = "col-md-4">
                        <div>
                            <Post key={p.id} name = {p.name} region= {p.region} population={p.population} capital={p.capital} img={p.flag}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
