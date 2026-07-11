import React from 'react';
import { input } from 'motion/react-client';

export default function Code({ length = 4, correctCode = '0000', onSuccess }) {

    const [code, setCode] = React.useState(Array(length).fill(''));
    const [isIncorrect, setIsIncorrect] = React.useState(false);
    const inputRefs = React.useRef([]);

    React.useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const verifyCode = (currentCodeArray) => {
        const enteredCode = currentCodeArray.join('');

        if (enteredCode === correctCode) {
            setIsIncorrect(false);
            if (onSuccess) onSuccess(enteredCode);
        } else {
            setIsIncorrect(true);

            setTimeout(() => {
                setCode(Array(length).fill(''));
                setIsIncorrect(false);
                if (inputRefs.current[0]) inputRefs.current[0].focus();
            }, 500);
        }
    };

    const handleChange = (value, index) => {
        if (value !== '' && isNaN(value)) return;
        if (isIncorrect) return;

        const newCode = [...code];
        const lastChar = value.substring(value.length - 1);
        newCode[index] = lastChar;
        setCode(newCode);

        if (lastChar.length >= 1 && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Enter') {
            verifyCode(code);
            return;
        }

        if (e.key === 'Backspace') {
            if (!code[index] && index > 0) {
                inputRefs.current[index -1].focus();
            } else {
                const newCode = [...code];
                newCode[index] = '';
                setCode(newCode);
            }
        }
    };

    return (
        <div className={`code-container ${isIncorrect ? 'incorrect' : ''}`}>
            <h1>LOCKED</h1>
            <p>Enter code</p>
                            
            <div className='flex g-16' style={{ width: 'fit-content', height: 'fit-content'}}>
                {code.map((num, index) => (
                    <input
                        key={index}
                        className={`code-input ${isIncorrect ? 'incorrect' : ''}`}
                        type='text'
                        inputMode='numeric'
                        pattern='[0-9]*'
                        maxLength={1}
                        value={num}
                        ref={(el) => (inputRefs.current[index] = el)}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                    >
                    </input>
                ))}
            </div>
        </div>
    )
}