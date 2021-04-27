<template>
  <div id="app">
     <div class="container col-md-4">
      <form class="bg-light p-md-5 p-5 mt-5 rounded" @submit.prevent="signup">
        <h1>Sign-up</h1>
        <br>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"  v-model="user.username">
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" v-model="user.email">
  </div>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="user.password">
  </div>
  <button type="submit" class="btn btn-primary">Submit <router-link to="/login"></router-link></button>
  <br><br>
        <p> Already registerd <router-link to="/login">sign in ? </router-link> </p>
</form>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase"
export default {
   name:'signup',
  data(){
    return{
      user:{
        username:"",
        email:"",
        password:""
      }
    }
  },
  methods: {
    signup(){
       firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.username
          })
          .then(() => {
            this.$router.push('/login')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  }
}
</script>