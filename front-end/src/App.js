import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';
import DataTable from './DataTable';
import './App.css';
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
        <div className="container">
            <a href="https://docs.google.com/spreadsheets/d/1xYOZhz_9S4zOTaV-hFIN1Q0tUMxep-p75T95tvElFmM/edit?usp=sharing" target="_blank"><h1>Factory Environmental Test Data</h1></a>
            {data.length > 0 ? (
                <>
                    <div className="data-table-container">
                        <DataTable data={data} />
                    </div>
                    <div className="chart-container">
                        <ChartComponent data={data} />
                    </div>
                </>
            ) : <p>Loading data...</p>}
        </div>
    );
}

export default App;
