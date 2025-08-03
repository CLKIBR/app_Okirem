// Otomatik environment.ts doldurma scripti
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const env = process.env;

const environmentTs = `// Otomatik oluşturuldu
export const environment = {
  production: false,
  firebase: {
    apiKey: '${env.FIREBASE_API_KEY || ''}',
    authDomain: '${env.FIREBASE_AUTH_DOMAIN || ''}',
    projectId: '${env.FIREBASE_PROJECT_ID || ''}',
    storageBucket: '${env.FIREBASE_STORAGE_BUCKET || ''}',
    messagingSenderId: '${env.FIREBASE_MESSAGING_SENDER_ID || ''}',
    appId: '${env.FIREBASE_APP_ID || ''}',
    measurementId: '${env.FIREBASE_MEASUREMENT_ID || ''}',
  },
  encryptionSecretKey: '${env.ENCRYPTION_SECRET_KEY || ''}',
};
`;

fs.writeFileSync(path.resolve(__dirname, '../src/environments/environment.ts'), environmentTs);
console.log('environment.ts dosyası .env ile güncellendi!');
