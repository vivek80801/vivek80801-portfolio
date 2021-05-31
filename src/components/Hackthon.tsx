import React from "react";
import hackthon from "../scss/components/hackthon.module.scss";
import { myHackthons } from "../data";

const Hackthon: React.FC = (): JSX.Element => {
  return (
    <section id="hackthon">
      <div className={hackthon.hackthon}>
        <h1>hackthon</h1>
        {myHackthons.map((myHackthon, idx) => (
          <div className={hackthon.video} key={idx}>
            <h3>{myHackthon.name}</h3>
            <iframe
              width="560"
              height="315"
              src={`${myHackthon.video}`}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
            <a target="_blank" rel="noopener noreferrer" href={myHackthon.repo}>
              github repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hackthon;
