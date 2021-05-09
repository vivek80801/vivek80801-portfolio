import React from "react";
import project from "../scss/components/projects.module.scss";
import { projects, IProject } from "../data";

const Projects: React.FC = (): JSX.Element => {
  const [myProjects, setMyProjects] = React.useState<IProject[]>([]);

  React.useEffect(() => {
    setMyProjects([...projects]);
  }, []);
  return (
    <div id="projects" className={project.container}>
      <h1>my projects</h1>
      <div className={project.projects}>
        {myProjects.map(({ id, name, imgs, link, imgNum }) => (
          <div className={project.project} key={id}>
            <h1>{name}</h1>
            <img src={`/assets/${imgs[imgNum]}.png`} alt={name} />
            <a target="_blank" rel="noopener noreferrer" href={link}>
              {name}
            </a>
            <div className={project.sliders}>
              <button
                onClick={() =>
                  setMyProjects([
                    ...myProjects.map((pro) =>
                      pro.id === id
                        ? {
                            id,
                            name,
                            imgs,
                            link,
                            imgNum: imgNum === imgs.length - 1 ? 0 : imgNum + 1,
                          }
                        : {
                            id: pro.id,
                            name: pro.name,
                            imgs: pro.imgs,
                            link: pro.link,
                            imgNum: pro.imgNum,
                          }
                    ),
                  ])
                }
              >
                &gt;
              </button>
              <button
                onClick={() =>
                  setMyProjects([
                    ...myProjects.map((pro) =>
                      pro.id === id
                        ? {
                            id,
                            name,
                            imgs,
                            link,
                            imgNum: imgNum === imgs.length - 1 ? 0 : imgNum + 1,
                          }
                        : {
                            id: pro.id,
                            name: pro.name,
                            imgs: pro.imgs,
                            link: pro.link,
                            imgNum: pro.imgNum,
                          }
                    ),
                  ])
                }
              >
                &lt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
