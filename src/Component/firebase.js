
 
    import { initializeApp } from "firebase/app";
    import { getAuth, RecaptchaVerifier } from "firebase/auth";
    
    // Firebase project configuration
    const firebaseConfig = {
        apiKey: "AIzaSyANqlsydTnNeUdIpNG3MpAhSuc1uub7dKQ",
    authDomain: "login-with-otp-e02ed.firebaseapp.com",
    projectId: "login-with-otp-e02ed",
    storageBucket: "login-with-otp-e02ed.firebasestorage.app",
    messagingSenderId: "662156890843",
    appId: "1:662156890843:web:fc65b36e21991dd1ccf2fe",
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    
    // Function to initialize reCAPTCHA for phone number verification
    export const initRecaptcha = () => {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "normal", // Options: 'invisible', 'normal', 'compact'
            callback: (response) => {
              console.log("reCAPTCHA verified:", response);
            },
            "expired-callback": () => {
              console.error("reCAPTCHA expired. Please try again.");
            },
          },
          auth
        );
      }
    };
    