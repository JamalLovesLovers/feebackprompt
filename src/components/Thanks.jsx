import { useState } from 'react'
import './Thanks.css'
function Thanks(props) {

  return (
    <div className='thanks'>
      <div className="main">
        <img src="https://raw.githubusercontent.com/hejkeikei/interactive-rating-component/16de82dee8e9299ac78d332cc3b5480da9bf435c/images/illustration-thank-you.svg" />
        <p className='selection'>You selected {props.value} out of 5</p>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’  t hesitate to get in touch!</p>
      </div>
    </div>
  )
}

export default Thanks
