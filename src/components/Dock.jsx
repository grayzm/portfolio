import '../styles/Dock.css';

export default function Dock() {
    return (
        <div className='dock'>
            <div className='navigation-stack'>
                <div className='nav' id='about-btn'>
                    <i className="fa-solid fa-address-card"></i>
                </div>
                <div className='nav' id='projects-btn'>
                    <i className="fa-solid fa-briefcase"></i>
                </div>
                <div className='nav' id='playground-btn'>
                    <i className="fa-solid fa-dice"></i>
                </div>
                <div className='nav' id='documentations-btn'>
                    <i className="fa-solid fa-book"></i>
                </div>
            </div>
            <div className='nav' id='hidden-btn'>
                <i className="fa-solid fa-lock"></i>
            </div>
        </div>
    )
}