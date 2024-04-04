import { StyleSheet,View, Text, SafeAreaView } from 'react-native';
import { Routes } from './src/routes';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
    const firebaseConfig = {
        apiKey: "AIzaSyCxelBWI5Co-QkoTg7QeglfjaXr1p4x-4M",
        authDomain: "ecommercefirebase-c779e.firebaseapp.com",
        projectId: "ecommercefirebase-c779e",
        storageBucket: "ecommercefirebase-c779e.appspot.com",
        messagingSenderId: "1051679988161",
        appId: "1:1051679988161:web:8f0986e2bef046bd1ff740",
        measurementId: "G-Q5D40NYF10"
      };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


export default function App() {
  return (
    <>
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
