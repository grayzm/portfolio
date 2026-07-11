import gif from '../assets/pixel/under-construction.gif';

export default function UnderConstruction() {
    return (
        <>
            <div className='flex full just-c align-c'>
                <div className='flex-column just-c align-c'>
                    <img src={gif} alt='Under Construction' className='under-construction'></img>
                    <p>This page is under construction.</p>
                </div>
            </div>
        </>
    )
}