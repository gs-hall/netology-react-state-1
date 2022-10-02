export default function ProjectList({projects, selected, allValue}) {
  const images = projects
    .filter(project => (selected === allValue || project.category === selected))
    .map((project, i) => (
      <img src={project.img} alt="" key={i} />
  ));

  return (
    <div>
      {images}
    </div>
  );
};