import React from 'react';
import ReactDOM from 'react-dom';

import {MaterialsDisplay} from './MaterialsDisplay.jsx';
import {MaterialsTree} from './MaterialsTree.jsx';
import {StudentSchedule} from './StudentSchedule.jsx';

import { Provider } from "react-redux";
import store from '../Redux/Store.js';
/*  //TODO:

    *[major-fix] know what is the currently selected time_days to be added

    *[major-fix] prevent adding a material that are already there in the schedule 
        -> doesn't compare the current selected time.
        -> doesn't prevent to click to check if it's occupied

    *  calculate the total credit hours so far

    
    *  StudentSchedule should display the time of each row
    
    *[design] when hovering over a material in the schedule display a little (x) icon to remove it
    
    *[design] view the schedule in full-view mode (with instructors names displayed)
*/
const App = ()=> {
    return (
        <Provider store={store}>
            <div className="AABU-Schedule-App">
                <h1>AABU-Schedule-App</h1>
                <div className="Row">
                    
                    <MaterialsTree/>

                    <StudentSchedule/>
                </div>

                <MaterialsDisplay />
                
            </div>
        </Provider>
    );
}

export default <App />

if (document.getElementById('root'))
    ReactDOM.render(<App />, document.getElementById('root'));
else
    alert('err: root element not found!');

