import React from 'react'
import Title from '../Share/Title'
import { AiToolsData } from '@/public/assets/assets'

const Aitools = () => {
    return (
        <div >
            <div className='w-[80%] mx-auto'>


                <Title title="Powerful AI Tools" subtitle="Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.
                "/>
                <div className='flex flex-wrap justify-center mt-10 gap-2'>
                    {
                        AiToolsData.map((tool, index) => (
                            <div key={index} className='p-8 max-w-xs rounded-lg bg-[#FDFDFE99] cursor-pointer shadow-lg hover:translate-y-1 transition-all duration-300'>
                                <tool.Icon className='w-12 h-12 p-3 text-white rounded-xl' style={{background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}}/>
                                <h3 className='mt-6 mb-3 text-lg font-semibold'>{tool.title}</h3>
                                <p className='text-gray-400 text-sm max-w-[95%]'>{tool.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Aitools
