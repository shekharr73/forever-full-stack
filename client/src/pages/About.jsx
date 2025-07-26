import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t border-gray-200'>
       <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[400px]' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolorem possimus tenetur aliquam. Culpa, nam obcaecati. Quas tenetur iure, provident suscipit, officia, quae fugit unde corrupti error iste animi debitis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni repellendus debitis quia unde ducimus expedita accusamus, ab perspiciatis repellat ut obcaecati quisquam, laudantium, quaerat quis aperiam suscipit saepe molestiae iure!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores commodi corrupti dicta eius, exercitationem alias accusantium ipsam labore explicabo placeat voluptate optio suscipit incidunt beatae itaque neque, est iste recusandae.</p>
         </div>
      </div>
      <div className='text-xl py-4 '>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
         </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-600' >Quality Assurance: </b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium obcaecati eos blanditiis tempora.</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-600' >Convenience: </b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium obcaecati eos blanditiis tempora.</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-600' >Exceptional Customer Service: </b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium obcaecati eos blanditiis tempora.</p>
        </div>
      </div>   
      <NewsletterBox/>
    </div>
  )
}

export default About
