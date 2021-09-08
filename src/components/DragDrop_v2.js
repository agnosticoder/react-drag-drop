import React from 'react'
import useDragDrop from '../hooks/useDragDrop';

const DragDrop_v2 = () => {
    const {highlight, ...dragDrop} = useDragDrop();


    return (
        <div>
            <div
                className="drag-drop-container"
                {...dragDrop}
                style={highlight ? {backgroundColor: 'lightblue'}: {}}
            >
                Drop Here...
            </div>
        </div>
    )
}

export default DragDrop_v2;
