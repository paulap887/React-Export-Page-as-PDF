import React, { Component } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class TestPage extends Component {
  exportPdf = () => {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            console.log(canvas);  
            var wid: number;
            var hgt: number;
            var img = canvas.toDataURL("image/png", wid = canvas.width, hgt = canvas.height);
            var hratio = hgt/wid
            var doc = new jsPDF('p','pt','a4');
            var width = doc.internal.pageSize.width;    
            var height = width * hratio
            doc.addImage(img,'JPEG',20,20, width, height);
            doc.save('Test.pdf');
        });
    }
    
     render() {
        const { classes } = this.props;
        const { data } = this.state;
        const { ratingGraph } = this.state;

        return (
          <div id="capture">
            <h1>Test Page</h1>
          </div>
        
        )
     }
}

export default (TestPage);
