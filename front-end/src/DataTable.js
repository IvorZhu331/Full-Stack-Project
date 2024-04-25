import React from 'react';

const DataTable = ({ data }) => {
    return (
        <table border="1" style={{ width: '100%', marginBottom: '20px' }}>
            <thead>
                <tr>
                    {data[0] && data[0].map((header, index) => <th key={index}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.slice(1).map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, idx) => <td key={idx}>{cell}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;