import React from 'react'
import {data} from "../restApi.json"

function Menu() {
  return (
   <section className='menu' id='menu' >
    <div className="container">
        <div className="heading_section">
<h1 className='heading' >POPULAR DISHES</h1>   
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, natus placeat. Nihil incidunt nesciunt aut fuga. Quidem veritatis illum neque delectus sed provident ratione voluptate repellat totam qui laboriosam nisi, placeat, laudantium eos voluptates porro numquam id veniam reiciendis architecto illo? Expedita corrupti optio consequuntur quibusdam voluptas repellendus quidem eligendi?</p>
     </div>
     <div className="dishes_container">
        {
            data[0].dishes.map((element)=>{
                return(
                    <div className="card" key={element.id} >
                        <img src={element.image} alt={element.id}/>
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

export default Menu