import React from 'react'
import "../Style/AllOtherPages.css"

const AllOtherPages = ({heading,lastLi}) => {
  return (
    <div>
      <div className="allpages">
        <h1>{heading}</h1>
        <ul>
            <li>Home</li>/
            <li>Page</li>/
            <li className='last-li'>{lastLi}</li>
        </ul>
    </div>
    </div>
  )
}

export default AllOtherPages
