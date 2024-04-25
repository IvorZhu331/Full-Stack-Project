const { fetchSheetData } = require('./sheetsAPI');

async function testFetch() {
    try {
        const data = await fetchSheetData();
        console.log("Data fetched successfully:", data);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

testFetch();
