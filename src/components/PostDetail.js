import React, {useEffect,useState} from 'react'
import Post from './Post'

const PostDetail = (props) => {
    const [countries, setCountries] = useState([])
    

    useEffect(()=>{
        const fetchCountry = async() =>{
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${props.match.params.count}`)
            const data = await response.json();
            setCountries(data)
            console.log(data)
        } 
        fetchCountry()
    },[])
    console.log(countries[0])
    return (
        <div>
           <div>{countries.length === 0 ? '' : countries[0].name}</div>
           <div>{countries.length === 0 ? '' : countries[0].nativeName}</div>
           <div>{countries.length === 0 ? '' : countries[0].population}</div>
           <div>{countries.length === 0 ? '' : countries[0].region}</div>
           <div>{countries.length === 0 ? '' : countries[0].subregion}</div>
           <div>{countries.length === 0 ? '' : countries[0].capital}</div>
           <div>{countries.length === 0 ? '' : countries[0].topLevelDomain}</div>
           <div>{countries.length === 0 ? '' : countries[0].currencies.map(currency => (
               <p>{currency.name}</p>
           ))}</div>
            <div>{countries.length === 0 ? '' : countries[0].languages.map(language => (
               <p>{language.name}</p>
           ))}</div>
            <div>{countries.length === 0 ? '' : countries[0].borders.map(border => (
              <p>{border}</p>
           ))}</div>
           <img src= {countries.length=== 0 ? '' : countries[0].flag}/>
        </div>
    )
}

export default PostDetail;
