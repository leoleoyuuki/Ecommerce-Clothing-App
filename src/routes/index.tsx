import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes";
import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export function Routes() {
  const firebaseConfig = {
    apiKey: "AIzaSyAcJQrLQRIdbKLuv5wr8oLd2WmUwDqIzcA",
    authDomain: "ecommerceapp-95c3f.firebaseapp.com",
    projectId: "ecommerceapp-95c3f",
    storageBucket: "ecommerceapp-95c3f.appspot.com",
    messagingSenderId: "963439822341",
    appId: "1:963439822341:web:d5a3507b079cdd0a8c3e6c",
    measurementId: "G-7WWVREL3LM",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}
