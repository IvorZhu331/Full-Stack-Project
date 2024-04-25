import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';
import DataTable from './DataTable';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/sheets-data'); 
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Factory Environmental Test Data</h1>
            {data.length > 0 ? (
                <>
                    <DataTable data={data} /> 
                    <ChartComponent data={data} />
                </>
            ) : <p>Loading data...</p>}
        </div>
    );
}

export default App;
