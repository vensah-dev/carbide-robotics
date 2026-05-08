import React from 'react';

//Next Stuff

//Data
import { projects } from '../../../lib/projects';
// import { AllProjects } from '@/components/all-projects';
// import { ProjectsDetailView } from '@/components/project-detail-view';
import Head from 'next/head';
import { ProjectDetailView } from '@/components/project-detail-view';
import NotFound from '@/app/not-found';

export const generateStaticParams = async () => {

    const paths = [
        { key: "all" },
        ...projects
    ]

    return paths.map((p) => ({
        key: p.key
    }))
};

export async function generateMetadata({params}:{params: any}) {
    const project = projects.find((p) => p.key === params.key)

    return {
        title: `${project ? `${project.title} | Projects ` : "All Projects"}`,
        icons: {
            icon: `${project ? project.icon : "/icons/favicon.ico"}`,
        },
        openGraph: {
            title: project ? `${project.title} | Projects | Venkatesh` : "All Projects | Projects | Venkatesh",
            description: project ? project.description.replace(/[\n\r\t]/gm, "") : "Check out all the projects I was involved in over the years!",
            url: "https://vensah-dev.github.io/projects/" + params.key,
            type: "website",
            logo: 'https://vensah-dev.github.io/icons/open-graph-image.png',
            images: [
                (
                    project ?
                        ({
                            width: 1080,
                            height: 600,
                            url: "https://vensah-dev.github.io" + project.image,
                        })
                        :
                        ({
                            width: 1900,
                            height: 1900,
                            url: `https://vensah-dev.github.io/icons/open-graph-image.png`,
                        })
                )
            ]
        },
    };
}


export default async function ProjectsDetailPage({ params }:{ params: any }) {

// 1. You MUST destructure or assign the awaited value
    const resolvedParams = await params; 
    const key = resolvedParams.key;

    // 2. Use the resolved 'key' to find the project
    const project = projects.find((p) => p.key === key);

    return (
        <>
            {
                key === "all" ? (
                    <div>
                        <NotFound />
                    </div>
                ) : (
                    // <ProjectsDetailView project={project} />
                    <div>
                        <ProjectDetailView project={project} />
                    </div>
                )
            }
        </>
    );
}