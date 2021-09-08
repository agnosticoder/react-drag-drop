import React from 'react'
import {parse} from 'papaparse';

const DragDrop_v1 = () => {

    const [onDragStyles, setOnDragStyles] = React.useState({
    });

    const handleOnDragOver = (e) => {
        e.preventDefault();
        console.log('handleOnDragOver');
    }

    const handleOnDrop = (e) => {
        e.preventDefault();
        setOnDragStyles({});


        console.log('handleDrop');
        Array.from(e.dataTransfer.files).filter(file => file.type === 'text/csv').
        forEach( async file => {
            const text = await file.text();
            const json = parse(text).data;
            console.log(json);
        })
    }



    return (
        <div>
            <div
                className="drag-drop-container"
                onDragOver={handleOnDragOver}
                onDrop={handleOnDrop}
                onDragEnter={() => {
                    console.log('Color Change');
                    setOnDragStyles({ backgroundColor: 'lightblue' })
                }}
                onDragLeave={() => {
                    console.log('Color Leave')
                    setOnDragStyles({})
                }}
                style={onDragStyles}
            >
                Drop Here...
            </div>
        </div>
    )
}

export default DragDrop_v1
