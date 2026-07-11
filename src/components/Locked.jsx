import React from 'react';
import '../styles/Code.css'
import Code from './Code.jsx';

export default function Locked() {

    const [isUnlocked, setIsUnlocked] = React.useState(false);

    const onSuccess = () => {
        setIsUnlocked(true);
    };

    return (
        <div className='flex full just-c align-c'>

            {!isUnlocked && (<Code onSuccess={onSuccess} />)}

            {isUnlocked && (
                <p>unlocked</p>
            )}
        </div>
    )
}