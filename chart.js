// Load the Google Charts library
google.charts.load('current', { packages: ['corechart'] });

// Function to draw the chart
function drawChart() {
    const sheetID = '1p4go-z59nvFyVrortf-I4jnQNcfnz65MOOs9lNFK3g8'
    const query = new google.visualization.Query(
        `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?gid=0&headers=1`
    );

  // Send the query and handle the response
    query.send((response) => {
        if (response.isError()) {
        console.error('Error fetching data: ' + response.getMessage());
        return;
        }

        // Get the data table from the response
        const data = response.getDataTable();

        // Set chart options
        const options = {
            title: 'Company Performance (from Google Sheets)',
            titleTextStyle: {
              color: '#FFFFFF', // White title text
              fontSize: 18,
            },
            hAxis: {
              title: 'Year',
              titleTextStyle: { color: '#FFFFFF' }, // White axis title
              textStyle: { color: '#FFFFFF' },      // White labels on the axis
              gridlines: { color: 'transparent' },  // Remove horizontal gridlines
              minorGridlines: { count: 0 },         // Remove minor gridlines
            },
            vAxis: {
              minValue: 0,
              textStyle: { color: '#FFFFFF' },      // White labels
              gridlines: { color: 'transparent' },  // Remove vertical gridlines
              minorGridlines: { count: 0 },         // Remove minor gridlines
            },
            legend: {
              textStyle: { color: '#FFFFFF' },      // White legend text
            },
            backgroundColor: 'transparent',         // Transparent background
            chartArea: {
              backgroundColor: 'transparent',
              left: 50,
              top: 50,
              width: '80%',
              height: '70%',
            },
        };
          
          

        // Render the chart
        const chart = new google.visualization.AreaChart(
        document.getElementById('chart_div')
        );
        chart.draw(data, options);
    });
}

// Export the function for use in other files
export { drawChart };