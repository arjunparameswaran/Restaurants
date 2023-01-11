import React from 'react'

function Reviews({data}) {
  return (
    <div>
        {data.map((item) => (
            <div>
                <h3><p>{item.name} <span>{item.date}</span></p></h3>
                <p>{item.comments}</p>
            </div>
        ))}
    </div>
  )
}

export default Reviews