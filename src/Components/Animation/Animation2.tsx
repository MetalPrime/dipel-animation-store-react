import * as React from 'react';
import './Animation2.css';

interface IAnimation2 {
}

export const Animation2: React.FC<IAnimation2> = () => {
    return (
        <section className='Animation2'>
            <div className="perspective">
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>

            </div>
        </section>
    );
}