// Firebase 설정 파일
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };


// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
const firebaseConfig = {
  apiKey: "AIzaSyDwWGL95G0zi4dIRxikPoU6hSl80tdY5go",
  authDomain: "router2-jsk.firebaseapp.com",
  projectId: "router2-jsk",
  storageBucket: "router2-jsk.firebasestorage.app",
  messagingSenderId: "388722107877",
  appId: "1:388722107877:web:0afe62cc515619c7053b0c",
  measurementId: "G-DLPQW11B21"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);
export default app;
