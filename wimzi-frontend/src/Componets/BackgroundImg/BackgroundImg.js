import React from 'react'

function BackgroundImg({imgSrc}) {
  return (
    
    <figure className="background">
     <img src={imgSrc || 'https://d7hftxdivxxvm.cloudfront.net/?height=528&quality=85&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FpoQnSnAxjupoTUtNALBq8g%2Fnormalized.jpg&width=800'} />
    </figure>
  )
}

export default BackgroundImg
// okay