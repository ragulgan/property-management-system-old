import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from "firebase/messaging";
import { setLocalStorage } from '../../utils/helper'


const firebaseConfig = {
    apiKey: "AIzaSyAMaJCiamzrLmZan1rXAla7XlxGKiJzQPY",
    authDomain: "property-management-admin-old.firebaseapp.com",
    projectId: "property-management-admin-old",
    storageBucket: "property-management-admin-old.appspot.com",
    messagingSenderId: "862519190992",
    appId: "1:862519190992:web:2d113ca774221fbadac5d5",
    measurementId: "G-8HDJN4NHKD"
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const RequestForToken = () => {
    return getToken(messaging, { vapidKey: 'BMN_gQSzb_jEC8j1-nG5qYoTfKzgaGs1qx-xYNaVI_xrecDZfUXMjHBODynlquW8LRmEjtSj0XZfYbuhXVPMAwg' })
        .then((currentToken) => {
            if (currentToken) {
                setLocalStorage("FCM",currentToken)
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
};

initializeApp(firebaseConfig);