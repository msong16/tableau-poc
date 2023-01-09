import React, {useEffect, useRef} from 'react';
import tableau from 'tableau-api';

//const {tableau}  = window;
export const Tableau = ()=>{
    //const {tableau} = window;
    
    // useEffect(()=>{
    //     initViz();
    // },[])
    var viz;
    const containerDiv = document.getElementById("vizContainer");
    const vizUrl = "https://public.tableau.com/views/Superstore_24/Overview";
    let existingViz = window.tableau.VizManager.getVizs()[0];

    if(existingViz){
        existingViz.dispose();
    }
     viz = new window.tableau.Viz(containerDiv, vizUrl)
    
    //const ref = useRef(null);
    const options = {}
    
    // const initViz = () =>{
    //     const containerDiv = document.getElementById("container")
    //     const viz = new window.tableau.Viz(containerDiv, vizUrl)
    // }

    //const viz = new window.tableau.Viz(ref, vizUrl, options);

    return(
        <div>
            <h2>Embedded Tableau</h2>
            {/* <div ref={ref} style={{width:'70%', margin:'auto'}}></div> */}
        </div>
        
    )
}