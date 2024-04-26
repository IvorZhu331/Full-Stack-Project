const { google } = require('googleapis');

async function fetchSheetData() {
  const sheets = google.sheets({ version: 'v4' });
  const spreadsheetId = '1xYOZhz_9S4zOTaV-hFIN1Q0tUMxep-p75T95tvElFmM';
  const range = 'Location-1!A1:M8';
  const apiKey = 'AIzaSyAdwShSCLBbiUpOtjfvGlKAUcJt09k7gng';

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
    key: apiKey,
  });

  return response.data.values;
}

module.exports = { fetchSheetData };
