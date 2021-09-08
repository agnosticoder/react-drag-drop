import React from 'react'
import {parse} from 'papaparse';
import DragDrop_v1 from './DragDrop_v1';
import DragDrop_v2 from './DragDrop_v2';

const App = () => {



    return (
        <div>
            <h1>this is going to be our drag drop example</h1>
            {/* <DragDrop_v1 /> */}
            <DragDrop_v2 />
        </div>
    )
}

export default App
