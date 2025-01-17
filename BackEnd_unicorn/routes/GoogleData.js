require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');
const fs = require('fs');
const readline = require('readline');
const { OAuth2Client } = require('google-auth-library');

const router=express.Router();
const SCOPES = ['https://www.googleapis.com/auth/documents.readonly'];
const DOCUMENT_ID = process.env.DOCUMENT_ID; // Replace with your Google Docs document ID

const credentials = JSON.parse(fs.readFileSync('client_secret.json'));

const oAuth2Client = new OAuth2Client(
    credentials.web.client_id,
    credentials.web.client_secret,
    credentials.web.redirect_uris[0]
  );
  

const tokenPath = 'token.json';

router.get('/', async (req, res) => {
  try {
    const auth = await authorize();
    const docs = google.docs({ version: 'v1', auth });
    const response = await docs.documents.get({
      documentId: DOCUMENT_ID,
    });

    // Extract and format the document content as needed
    const documentContent = extractContent(response.data);
    res.json({ content: documentContent });
  } catch (err) {
    console.error('Error fetching document:', err);
    res.status(500).send('Error fetching document');
  }
});

async function authorize() {
  let token;
  try {
    token = fs.readFileSync(tokenPath);
  } catch (err) {
    token = await getNewToken(oAuth2Client);
    fs.writeFileSync(tokenPath, JSON.stringify(token));
  }
  oAuth2Client.setCredentials(JSON.parse(token));
  return oAuth2Client;
}

async function getNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const code = await new Promise((resolve) => rl.question('Enter the code from that page here: ', resolve));
  rl.close();
  const { tokens } = await oAuth2Client.getToken(code);
  return tokens;
}

// Function to extract content from the document (you can customize this)
function extractContent(document) {
  let content = '';
  document.body.content.forEach((element) => {
    if (element.paragraph) {
      element.paragraph.elements.forEach((e) => {
        content += e.textRun ? e.textRun.content : '';
      });
    }
  });
  return content;
}

module.exports=router;