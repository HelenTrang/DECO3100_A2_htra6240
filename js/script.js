  const dataSource = '../../data/childMortality.csv';

  function loadData() {
    Plotly.d3.csv(dataSource, function(data){ processData(data) } );
  };
  
  function processData(allRows) {
    console.log(allRows);
    let x = [], y = [];
    for (let i=0; i<allRows.length; i++) {
      let row = allRows[i];
      x.push( row['AAPL_x'] );
      y.push( row['AAPL_y'] );
    }
    makePlot( x, y );
  }
  
  function makePlot( x, y ){
    var traces = [{
      x: x, 
      y: y
    }];
    Plotly.newPlot('bigPlot', traces, 
      {title: 'Plotting CSV data from AJAX call'});
  };
  
  loadData();