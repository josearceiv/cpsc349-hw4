// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


(function (window) {
    'use strict';
     var App = window.App || {};
    
      window.FirebaseConfig = {
        apiKey: "AIzaSyC2K02LUt0nfcgaQeY003KNxB-H_FV0mFc",
        authDomain: "coffeerun-b88cc.firebaseapp.com",
        projectId: "coffeerun-b88cc",
        storageBucket: "coffeerun-b88cc.appspot.com",
        messagingSenderId: "335588958866",
        appId: "1:335588958866:web:e857d7fbfcf467a5ff3c4b",
        measurementId: "G-6GLYBSBK13"
      };

      var FirebaseConfig = {
        apiKey: "AIzaSyC2K02LUt0nfcgaQeY003KNxB-H_FV0mFc",
        authDomain: "coffeerun-b88cc.firebaseapp.com",
        projectId: "coffeerun-b88cc",
        storageBucket: "coffeerun-b88cc.appspot.com",
        messagingSenderId: "335588958866",
        appId: "1:335588958866:web:e857d7fbfcf467a5ff3c4b",
        measurementId: "G-6GLYBSBK13"
    };

     App.FirebaseConfig = FirebaseConfig;
     firebase.initializeApp(App.FirebaseConfig);

     window.App = App;
  
  })(window);
