import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyCl5YdQYk7Bo6iVRrhI68jAKBJkOBlJPew",
  authDomain: "login-form-69c3d.firebaseapp.com",
  databaseURL: "https://login-form-69c3d-default-rtdb.firebaseio.com/",
  projectId: "login-form-69c3d",
  storageBucket: "login-form-69c3d.appspot.com",
  messagingSenderId: "708568447810",
  appId: "1:708568447810:web:375b5da784533d6f7866db"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
