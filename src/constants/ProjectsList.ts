

export type ProjectsType = {
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    liveLink: string,
    codeLink: string,
    stack: string,
    tags: string[]

}

export default [
    {
        id: "project",
        title: "Filmiflix",
        description: "🎬 Filmiflix is a modern movie streaming UI built with Next.js, React, and Tailwind CSS, powered by TMDB API for real-time movie data.🔐 It features seamless authentication using Clerk, offering users a smooth and secure browsing experience.",
        imageUrl: "/projects/filmiflix.png",
        liveLink: "https://filmiflix.netlify.app",
        codeLink: "https://github.com/amreshpro/filmiflix",
        stack: "Reactjs, Tailwindcss, CSS, HTML,TMDBApi",
        tags: ["Reactjs", "Frontend", "SPA"]
    }
]