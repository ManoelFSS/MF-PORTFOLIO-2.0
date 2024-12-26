"use client";

import { useRouter } from "next/navigation";

const ProjectsPage = () => {
    const router = useRouter();

    const navigateToProject = (slug: string) => {
        router.push(`/views/Projects/${slug}`);
    };

    return (
        <section>
            <h1>Projetos</h1>
            <ul>
                <li onClick={() => navigateToProject("projeto-1")} style={{ cursor: "pointer" }}>
                    Projeto 1
                </li>
                <li onClick={() => navigateToProject("projeto-2")} style={{ cursor: "pointer" }}>
                    Projeto 2
                </li>
            </ul>
        </section>
    );
};

export default ProjectsPage;
