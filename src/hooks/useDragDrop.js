import React, { useState } from 'react'
import {parse} from 'papaparse';

const useDragDrop = () => {
    const [highlight, setHighlight] = useState(false);


    const onDragOver = (e) => {
        e.preventDefault();
        console.log('handleOnDragOver');
    }

    const onDrop = (e) => {
        e.preventDefault();

        console.log('handleDrop');
        Array.from(e.dataTransfer.files).filter(file => file.type === 'text/csv').
        forEach( async file => {
            const text = await file.text();
            const json = parse(text).data;
            console.log(json);
        })
        setHighlight(false);
    }

    const onDragEnter = (e) => {
        console.log('kaalu')
        console.log('Color Change');
        setHighlight(true);
    }

    const onDragLeave = () => {
        console.log('Color Leave')
        setHighlight(false);
    }

    return {
                onDragOver,
                onDrop,
                onDragEnter, 
                onDragLeave,
                highlight
    }
}

export default useDragDrop
