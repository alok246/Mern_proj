import React from 'react'
import {data} from '../restApi.json'

// if you want use js in jsx you can use inside curly braces
const Menu = () => {
  return (
    <section className="menu" id="menu">
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem id autem excepturi quas optio officia 
                    laboriosam earum ratione rem. Aliquid error, voluptas neque vel ea odit explicabo hic doloremque quo?
                </p>
            </div>

            <div className="dishes_container">
               {
                data[0].dishes.map(element=>{
                    return (
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
               }
                
            </div>
        </div>

    </section>
  )
}

export default Menu;