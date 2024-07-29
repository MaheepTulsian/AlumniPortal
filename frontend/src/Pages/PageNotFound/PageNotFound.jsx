import React from 'react'
import notFound from '../../assets/notFound.png'
export default function PageNotFound() {
  return (
    <div style={{margin:"auto"}} >
      <img src={notFound} alt="Page Not Found" width={500} height={500} />
    </div>
  )
}
