import React from 'react';
import hero from "../scss/components/hero.module.scss";

const Hero: React.FC = ():JSX.Element => {
    return (
        <div className={hero.hero}>
            <img src="/assets/github-avtar.png" alt="profile picture"/>
                <div className="buttons">
                    <button className="btn-primary">projects</button>
                        <button className="btn-quaternary">contact me</button>
                    </div>
        </div>
    )
}

export default Hero;
