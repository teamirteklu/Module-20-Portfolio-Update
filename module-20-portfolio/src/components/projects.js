import React from 'react';
import '../styles/app.css';

export default function projects({ projectlist }) {
    return (
        <div>
            <ul className='container'>
                {projectlist.map((project) => (
                    <li className='list-group-item container' key={project.id}>
                        <h2>{`${project.title}`}</h2>

                        <p>{`${project.description.blurb}`}</p>
                        {`${project.description.github}
                        ${project.description.activelink}`}
                    </li>
                ))}
            </ul>
        </div>
    );
}