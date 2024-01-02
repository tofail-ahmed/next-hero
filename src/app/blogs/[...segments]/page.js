"use client"
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react'

const SingleBlogPage = ({params,searchParams}) => {
  const [year,id]=params.segments || [];
  // console.log(searchParams)
  const params2=useParams();
  const searchParams2=useSearchParams();
  console.log(params2.segments,searchParams2.get('title'))
  return (
    <div>SingleBlogPage {id} for {year || new Date().getFullYear()}
    <br />
    {searchParams.title}
    </div>
  )
}

export default SingleBlogPage