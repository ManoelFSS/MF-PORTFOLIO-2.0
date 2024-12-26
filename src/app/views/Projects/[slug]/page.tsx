// ProjectDetails.tsx
interface ProjectDetailsProps {
    params: {
        slug: string;
    };
}

const ProjectDetails = async ({ params }: ProjectDetailsProps) => {
    const { slug } = params;

    const projectData = await fetchProjectDetails(slug);

    return (
    <section>
        <h1>Detalhes do Projeto</h1>
        <p>Slug do projeto: {slug}</p>
        <p>Dados do projeto: {projectData}</p>
    </section>
    );
};

async function fetchProjectDetails(slug: string) {
    return `Detalhes do projeto para o slug: ${slug}`;
}

export async function generateStaticParams() {
    return [
    { slug: 'projeto-1' },
    { slug: 'projeto-2' },
    ];
}

export default ProjectDetails;
