import React from "react";
import project from "../../scss/components/projects.module.scss";
import { projects, IProject } from "../../data";
import { IThemeContext, ThemeChangerContext } from "../context";

const Projects: React.FC = (): JSX.Element => {
  const [myProjects, setMyProjects] = React.useState<IProject[]>([]);
  const { themes, dispatch } = React.useContext<IThemeContext>(
    ThemeChangerContext
  );

  React.useEffect(() => {
    setMyProjects([...projects]);
  }, []);
  return (
    <section>
      <div
        id="projects"
        className={
          themes === "default" ? project.container : project.containerBlue
        }
      >
        <h1>my projects</h1>
        <div className={project.projects}>
          {myProjects.map(({ id, name, imgs, link, imgNum, githubLink }) => (
            <div className={project.project} key={id}>
              <h1>{name}</h1>
              <img src={`/assets/${imgs[imgNum]}.png`} alt={name} />
              <a target="_blank" rel="noopener noreferrer" href={link}>
                live app
              </a>
              <a target="_blank" rel="noopener noreferrer" href={githubLink}>
                github repository
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
                              githubLink,
                              imgNum:
                                imgNum <= 0
                                  ? (imgNum = imgs.length - 1)
                                  : imgNum - 1,
                            }
                          : {
                              id: pro.id,
                              name: pro.name,
                              imgs: pro.imgs,
                              link: pro.link,
                              imgNum: pro.imgNum,
                              githubLink: pro.githubLink,
                            }
                      ),
                    ])
                  }
                >
                  &lt;
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
                              githubLink,
                              imgNum:
                                imgNum === imgs.length - 1 ? 0 : imgNum + 1,
                            }
                          : {
                              id: pro.id,
                              name: pro.name,
                              imgs: pro.imgs,
                              link: pro.link,
                              imgNum: pro.imgNum,
                              githubLink: pro.githubLink,
                            }
                      ),
                    ])
                  }
                >
                  &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
