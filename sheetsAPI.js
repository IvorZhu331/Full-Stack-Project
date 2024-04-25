const { google } = require('googleapis');

async function fetchSheetData() {
  const auth = new google.auth.GoogleAuth({
    keyFile: './vara-project-421415-4880f1cb4068.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: 'v4', auth: client });
  const spreadsheetId = '1xYOZhz_9S4zOTaV-hFIN1Q0tUMxep-p75T95tvElFmM';
  const range = 'Location-1!A1:M8';

  const response = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range,
  });

  return response.data.values;
}

module.exports = { fetchSheetData };
