import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCgcgv2HK1Gx_Vzgq9SovkWiAVbw-1xMkw",
  authDomain: "crayzillaiptv-d2a8e.firebaseapp.com",
  databaseURL: "https://crayzillaiptv-d2a8e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crayzillaiptv-d2a8e",
  storageBucket: "crayzillaiptv-d2a8e.firebasestorage.app",
  messagingSenderId: "1039436888354",
  appId: "1:1039436888354:web:5bba9b6976702ecb528d7b",
  measurementId: "G-QC0K4LB51J"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function loadCounters() {
  try {
    const visitorsRef = ref(db, 'stats/visitors');
    const visitorsSnap = await get(visitorsRef);

    let visitors = 0;

    if (visitorsSnap.exists()) {
      visitors = visitorsSnap.val();
    }

    visitors++;

    await set(visitorsRef, visitors);

    document.getElementById('total-vs').innerText =
      visitors.toLocaleString();

  } catch (e) {
    console.log(e);
  }
}

loadCounters();