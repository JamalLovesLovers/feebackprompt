import { useState } from 'react'

function MainComp({handleSubmit}) {


  var prevTarget = null
  const handleLabelClick = (e) => {
    //Changes colour
    if (prevTarget) {
      prevTarget.classList.remove("clicked");
      prevTarget.classList.add("unClicked");
    }
    e.preventDefault()
    e.currentTarget.classList.remove('unClicked');
    e.currentTarget.classList.add('clicked');
    prevTarget = e.currentTarget

    //Calculate the option clicked
    handleSubmit(e.target.id)
  };
  return (
    <div className='app'>
      <div className="container">
        <form>
          <img
            src="https://raw.githubusercontent.com/hejkeikei/interactive-rating-component/16de82dee8e9299ac78d332cc3b5480da9bf435c/images/icon-star.svg"
            alt="rating icon"
            id="star" />
          <h1 className="title">
            How did we do?
          </h1>
          <p className='text'>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

          <div className="inputs">
            <input name="1" type="radio" />
            <input name="1" type="radio" />
            <input name="1" type="radio" />
            <input name="1" type="radio" />
            <input name="1" type="radio" />
          </div>
          <div className="numbers">
            <label htmlFor='1' id="1" className='unClicked' onClick={handleLabelClick} >1</label>
            <label htmlFor='2' id="2" className='unClicked' onClick={handleLabelClick} >2</label>
            <label htmlFor='3' id="3" className='unClicked' onClick={handleLabelClick} >3</label>
            <label htmlFor='4' id="4" className='unClicked' onClick={handleLabelClick} >4</label>
            <label htmlFor='5' id="5" className='unClicked' onClick={handleLabelClick} >5</label>
          </div>
          <button
            className='submit'
            aria-label='submit button'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default MainComp
