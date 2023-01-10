import React, {useEffect, useRef} from 'react';
import tableau from 'tableau-api';
import useExternalScripts from '../hooks/useExternalScripts';
import { Helmet } from "react-helmet"
export const Tableau = ()=>{

   // var viz;
    // const containerDiv = document.getElementById("vizContainer");
    // const vizUrl = "https://public.tableau.com/views/Superstore_24/Overview";
    // let existingViz = window.tableau.VizManager.getVizs()[0];

    // if(existingViz){
    //     existingViz.dispose();
    // }
    // const options = {
    //     "State": "Pennsylvania",
    //     "Order Date": ""
    // }
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
     //viz = new window.tableau.Viz(containerDiv, vizUrl, options)
    //  let viz = document.getElementById('tableauViz');
    //  let sheet;
    //  let overview;
    //  if (viz){
    //     sheet = viz.workbook.activeSheet;
    //     console.log(sheet)
    //  }
    //  if (sheet){
    //     overview = sheet.worksheets.find(ws => ws.name =="Overview");
    //  }
    //  if (overview){
    //     overview.applyRangeFilterAsync("Order Date", {
    //         min: new Date(Date.UTC(2012, 3, 1)),
    //         max: new Date(Date.UTC(2020, 8, 30))
    //    });
    //  }
     
     const useExternalScript = () => {
        useExternalScripts("https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js")
    }

    return(
        <div>
            {/* {useExternalScript()} */}
            <Helmet>
        <script
          src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"
          crossorigin="anonymous"
          type="module"
          async
        ></script>
      </Helmet>
            <h2>Embedded Tableau</h2>
            <tableau-viz id="tableauViz"       
            src='https://public.tableau.com/views/Superstore_24/Overview'      
            toolbar="bottom" height="800px" width="100%" style={{}}>
                <viz-filter field="State" value="Florida"> </viz-filter>    
            </tableau-viz>
            <h3>footer</h3>
        </div>
        
    )
}