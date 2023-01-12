import React, {useEffect, useRef} from 'react';
import tableau from 'tableau-api';
import useExternalScripts from '../hooks/useExternalScripts';
import { Helmet } from "react-helmet";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css'
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
    //     overview = sheet.worksheets.find(ws => ws.name =="SaleMap");
    //  }
    //  if (overview){
    //     overview.applyRangeFilterAsync("Order Date", {
    //         min: new Date(Date.UTC(2013, 3, 1)),
    //         max: new Date(Date.UTC(2020, 8, 30))
    //    });
    //  }
     
     useEffect(()=>{

     },[])
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
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            React App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Menu Item 1</Nav.Link>
            <Nav.Link href="#pricing">Menu Item 2</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            <h2 style={{marginLeft:'5%', marginTop:'2%', marginBottom:'2%'}}>Embedded Tableau</h2>
            <div style={{display:'flex', alignItems:'center', 
            justifyContent:'center'}}>
                <tableau-viz id="tableauViz"       
                src='https://public.tableau.com/views/Superstore_24/Overview'      
                toolbar="bottom" width="100%" style={{}}>
                    <viz-filter field="State" value="Florida"> </viz-filter>  
                </tableau-viz>
            </div>
            
            
        </div>
        
    )
}