
    
    import { initializeApp } from "firebase/app";
    import { getAuth, RecaptchaVerifier } from "firebase/auth";
    
    // Your Firebase project configuration
    const firebaseConfig = {
        apiKey: "AIzaSyANqlsydTnNeUdIpNG3MpAhSuc1uub7dKQ",
        authDomain: "login-with-otp-e02ed.firebaseapp.com",
        projectId: "login-with-otp-e02ed",
        storageBucket: "login-with-otp-e02ed.firebasestorage.app",
        messagingSenderId: "662156890843",
        appId: "1:662156890843:web:fc65b36e21991dd1ccf2fe",
        measurementId: "G-066V0BLNES"
    };
    // Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);

// Disable reCAPTCHA for testing only
auth.settings.appVerificationDisabledForTesting = true;
    
    
    // Initialize reCAPTCHA
    export const initRecaptcha = () => {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible", // Use 'normal' or 'compact' for visible reCAPTCHA
            callback: (response) => {
              console.log("reCAPTCHA verified:", response);
            },
            "expired-callback": () => {
              console.error("reCAPTCHA expired. Please refresh and try again.");
            },
          },
          auth
        );
      }
    };
    