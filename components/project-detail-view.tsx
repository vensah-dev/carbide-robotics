
//Next stuff
import { Project } from 'next/dist/build/swc/types';
import Image from 'next/image';

//components

export function ProjectDetailView({project}:{project: any}) {

    return (
        <>
            <div className='max-w-4xl py-16 px-4'>
                <h1 className='text-5xl font-bold text-font-primary mb-4'>{project.title}</h1>
                <p className='text-lg text-font-secondary mb-8'>{project.description}</p>

                <div className="relative w-full aspect-[1728/832] overflow-hidden rounded-lg shadow-md"> 
                    <Image 
                        src={project.fullPoster} 
                        alt={project.title}  
                        quality={100}
                        fill
                        className=' w-full object-cover' 

                    />             
                </div>
            </div>

        </>
    )
}


