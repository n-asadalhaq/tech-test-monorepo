import admin from 'firebase-admin';
import { applicationDefault } from 'firebase-admin/app';
import { envConfig } from './env';

admin.initializeApp({
  credential: applicationDefault(),
  databaseURL: envConfig.FIREBASE_DATABASE_URL,
});

export const db = admin.firestore();
