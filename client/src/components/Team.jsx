import {data} from"../restApi.json"

function Team() {
  return (
    <section className='team' id='team' > 
    <div className="container">
        <div className="heading_section">
            <h1 className='heading' >OUR TEAM</h1>
            <p>Our team at Foody Flames is a dedicated group of culinary professionals, working together to deliver exceptional dining experiences with passion and expertise
            </p>
            <div className="team_container">
                {
                    data[0].team.map((element)=> {
                        return(
                            <div className="card" key={element.id} >
                                <img src={element.image} alt={element.name} />
                                <h3>{element.name}</h3>
<p>{element.designation}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </div>
        </section>
  )
}

export default Team