const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const getAll = async (collection) => {
  const snapshot = await db.collection(collection).get();
  let docs = [];
  snapshot.forEach((doc) => {
    docs.push(doc.data());
  });
  return docs;
};

const get = async (collection, docId) => {
  const snapshot = await db.collection(collection).doc(docId).get();
  return snapshot.data();
};

module.exports = {
  db: db,
  getAll: getAll,
  get: get,
};