import React from 'react'

const Card = ({character}) => {
  return (
    <div className='row'>
        {
            character.map((item, index) =>(
                <div key={index} className='col-md-3 mb-4'>
                    <div className='card' style={{minWidth:"200px"}}>
                        <img src={item.image} alt="/"/>
                        <div className='card-body'>
                            <h5>{item.name}</h5>
                            <p>especies: {item.species} </p>
                            <p>location: {item.location.name} </p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Card