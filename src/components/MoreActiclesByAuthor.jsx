import React from 'react'
import AuthorCard from './AuthorCard'
import { authorData } from '../data/author'

function MoreActiclesByAuthor() {
    const [isHovered, setIsHovered] = React.useState(false)

    function toggleIsHovered () {
        setIsHovered(prevIsHovered => !prevIsHovered)
    }
  return (
    <section className='py-20 px-4 '>
        <div className='max-w-[860px] lg:w-[80%] xl:w-[60%] mx-auto border-t-2 pt-10 flex flex-col md:flex-row justify-between mb-8'>
            <AuthorCard authorData={authorData[0]} className="w-full max-w-[650px] md:w-[65%] rounded-3xl p-8 mb-4">
                <AuthorCard.NameImage className="w-16"/>
                <AuthorCard.Description/>
                <AuthorCard.MoreActicles isHovered={isHovered} enter={toggleIsHovered} leave={toggleIsHovered}/>
            </AuthorCard>
            <div className='text-sm'>
                <h6 className='mb-7'>ARTICLE TAGS</h6>
                {authorData[0].categories.map((category) => {
                    return (
                        <p className='bg-[#1bdbdb] w-fit p-1 mb-6' key={category}>{category}</p>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default MoreActiclesByAuthor