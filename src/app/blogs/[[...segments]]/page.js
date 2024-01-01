import React from 'react'

const SingleBlogPage = ({params}) => {
  const [year,id]=params.segments || [];
  return (
    <div>SingleBlogPage {id} for {year || new Date().getFullYear()}</div>
  )
}

export default SingleBlogPage