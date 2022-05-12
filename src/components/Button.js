import React from 'react'

const Button = ({prev, next, onPrevius, onNext}) => {

    const Hprevius = () => {
        onPrevius();
    }

    const Hnext = () => {
        onNext();
    }

  return (
      
    <div className='text-center'>
        {
          prev ? <button className='border btn btn-light m-2' onClick={Hprevius}>Previus</button> : null
        }
       {
           next ? <button className='border btn btn-light' onClick={Hnext}>Next</button> : null
       }
    </div>  
  )
}

export default Button;
