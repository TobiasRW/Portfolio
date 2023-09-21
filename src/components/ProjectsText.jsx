

import parse from 'html-react-parser';

export default function Projectstext({ post }) {

    return (
        <div className='project-heading'>
            <h3>{parse(post.title.rendered)}</h3>
            <hr />
            <div className="project-text">
                <div>{parse(post.content.rendered)}
                <p>Programmer brugt: <span>HTML</span> - <span>CSS</span> - <span>JS</span> - <span>After Effects</span> - <span>Figma</span> - <span>Illustrator</span> - <span>Photoshop</span></p>
                </div>
                <a className="read-more-btn" href="https://aarhusvinhandel.tobiaswolmar.dk/" target="_blank">Se projekt</a>
                <a className="read-more-btn" href="https://github.com/madsnbkristensen/2-semester-eksamen-v2" target="_blank">Se koden</a>
            </div>
        </div>
    );
} 