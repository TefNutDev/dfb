import React from 'react'
import Image from 'next/image'
import { data } from '../public/photodata'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'





const Gallery = () => {

const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
}

const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
}

    return (
        <div id='gallery' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-10'>
                <p className='text-2xl tracking-widest text-[#bfbeb2] py-4 uppercase'>Gallery</p>
                <h3 className='py-4'>An idea of the range of services we have to offer</h3>
                
                    <div className='relative flex items-center'>
                        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                        <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                        {data.map((item)=>(
                            <div key={item.id} className='inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                            <Image src={item.img} alt='/' width='350px' height='450px' />
                            </div>
                        ))}
                        </div>
                        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
                    </div>
                </div>
                
            </div>

        
    )
}

export default Gallery