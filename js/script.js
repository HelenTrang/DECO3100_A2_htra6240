  const dataSource = 'https://raw.githubusercontent.com/HelenTrang/DECO3100_A2_htra6240/main/data/childMortalityAsia.csv';

  function loadData() {
    Plotly.d3.csv(dataSource, function(data){ processData(data) } );
  };
  
  function processData(allRows) {
    console.log(allRows);
    let x = [], y = [];
    for (let i=0; i<allRows.length; i++) {
      let row = allRows[i];
      x.push( row['Years'] );
      y.push( row['eastAsia'] );
    }
    makePlot( x, y );
  }
  
  function makePlot( x, y ){
    var trace1 = [{
      x: x, 
      y: y
    }];
    Plotly.newPlot('bigPlot', trace1, 
      {title: 'Child Mortality between 1950 - 2017'});
  };
  
  loadData();