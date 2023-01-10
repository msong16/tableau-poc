import React, {useEffect, useRef} from 'react';
import tableau from 'tableau-api';

export const Tableau = ()=>{

    var viz;
    const containerDiv = document.getElementById("vizContainer");
    const vizUrl = "https://public.tableau.com/views/Superstore_24/Overview";
    let existingViz = window.tableau.VizManager.getVizs()[0];

    if(existingViz){
        existingViz.dispose();
    }
    const options = {
        "State": "Pennsylvania",
        "Order Date": ""
    }
    /*https://community.tableau.com/s/question/0D54T00000CWes9SAD/how-to-combine-applyrangefilterasync-and-applyfilterasync
    https://community.tableau.com/s/question/0D54T000006B4HpSAK/apply-a-range-filter-to-a-dashboard-worksheet-before-loading-the-visualization
    https://www.npmjs.com/package/tableau-api
    function applyDateFilter(startDate, endDate, target) {
        sheet = target.getWorkbook().getActiveSheet();

        var filterOptions = {
            min: startDate,
            max: endDate
        };
    if (sheet.getSheetType() === 'worksheet') {
        sheet.applyRangeFilterAsync("Action Date", filterOptions);
    } else {
        worksheetArray = sheet.getWorksheets();

        for (var i = 0; i < worksheetArray.length; i++) {
            worksheetArray[i].applyRangeFilterAsync("Action Date", filterOptions);
        }
    }
}
*/
     viz = new window.tableau.Viz(containerDiv, vizUrl, options)

    return(
        <div>
            <h2>Embedded Tableau</h2>
        </div>
        
    )
}