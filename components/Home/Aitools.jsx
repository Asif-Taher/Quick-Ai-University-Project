import React from 'react'
import Title from '../Share/Title'
import { AiToolsData } from '@/public/assets/assets'

const Aitools = () => {
    return (
        <div >
            <div className='w-[80%] mx-auto'>
           

                <Title title="Powerful AI Tools" subtitle="Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.
                "/>
                <div>
                    {
                        AiToolsData.map((tool, index) =>(
                            <div key={index}>
                                <h2>{tool.title}</h2>
                            </div>
                        ))
                    }
                </div>
                 </div>
        </div>
    )
}

export default Aitools
