import React from 'react';
import { motion } from 'motion/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

let globalZIndex = 5;

export default function Window({ 
    // id, 
    title, 
    children, 
    onClose, 
    defaultPosition = { top: '10%', left: '10%' }, 
    defaultSize = { width: 400, height: 300 },
    windowButtons,
    localZIndex,
    bringToFront,
}) {
    
    const windowRef = React.useRef(null);

    const [position, setPosition] = React.useState({
        top: defaultPosition?.top || '10%',
        left: defaultPosition?.left || '10%'
    })
    const [size, setSize] = React.useState({
        width: defaultSize?.width || '400px',
        height: defaultSize?.height || '300px'
    });
    const [isResizing, setIsResizing] = React.useState(false);
    const [isDragging, setIsDragging] = React.useState(false);

    const handleDragStart = (e) => {
        if (e.target.closest('.window-btn')) return;
        e.preventDefault();

        setIsDragging(true);

        const startX = e.clientX;
        const startY = e.clientY;
        const startTop = windowRef.current.offsetTop;
        const startLeft = windowRef.current.offsetLeft;

        const handlePointerMove = (moveEvent) => {
            const deltaX = moveEvent.clientX - startX;
            const deltaY = moveEvent.clientY - startY;

            const newTop = Math.max(0, Math.min(window.innerHeight - 100, startTop + deltaY));
            const newLeft = Math.max(0, Math.min(window.innerWidth - 100, startLeft + deltaX));

            setPosition({
                top: `${newTop}px`,
                left: `${newLeft}px`
            });
        };

        const handlePointerUp = () => {
            setIsDragging(false);
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
        };

        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);
    };

    const handleResizeStart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsResizing(true);

        const startWidth = windowRef.current.offsetWidth;
        const startHeight = windowRef.current.offsetHeight;
        const startX = e.clientX;
        const startY = e.clientY;

        const handlePointerMove = (moveEvent) => {
            const newWidth = Math.max(250, startWidth + (moveEvent.clientX - startX));
            const newHeight = Math.max(150, startHeight + (moveEvent.clientY - startY));

            setSize({
                width: `${newWidth}px`, 
                height: `${newHeight}px` 
            });
        };

        const handlePointerUp = () => {
            setIsResizing(false);
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
        };

        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);
    };

    return (
        <motion.div
            ref={windowRef}
            className='window'
            onPointerDown={bringToFront}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{ 
                position: 'absolute', 
                top: position.top,
                left: position.left,
                width: size.width, 
                height: size.height, 
                zIndex: localZIndex,
            }}
        >
            <div 
                className='window-title-border' 
                onPointerDown={handleDragStart}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                <p>{title}</p>
                <div className='window-btn-container'>
                    {windowButtons}
                    <div className='window-btn' onClick={onClose}>
                        <XMarkIcon width={14} height={14} strokeWidth={2} />
                    </div>
                </div>
            </div>
            <div className='window-contents'>
                <div className='scroll-container'>
                    {children}
                </div>
            </div>
            <div className='resize-handle' onPointerDown={handleResizeStart}></div>
        </motion.div>
    )
}