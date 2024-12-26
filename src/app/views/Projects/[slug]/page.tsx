
interface ProjectDetailsProps {
    params: {
        slug: string;
    };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = async ({ params }) => {
    const { slug } = params;

    return (
        <section>
            <h1>Detalhes do Projeto</h1>
            <p>Slug do projeto: {slug}</p>
        </section>
    );
};

export default ProjectDetails;
