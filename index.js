async function initializeFirebase() {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js");
    const { getAnalytics, logEvent } = await import("https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js");

        const firebaseConfig = {
            apiKey: "AIzaSyABI0DPchWq_FzlCDaBNJv2y4OcZmA16Yc",
            authDomain: "mtsfreitasgithubio.firebaseapp.com",
            projectId: "mtsfreitasgithubio",
            storageBucket: "mtsfreitasgithubio.appspot.com",
            messagingSenderId: "72022015160",
            appId: "1:72022015160:web:c60ed4b94b2d58d13b484d",
            measurementId: "G-BC7R15VCBP"
        };
    
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
    }
    initializeFirebase();