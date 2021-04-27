<template>
  <div id="app">
      
      <div class="container col-md-4">
      <form class="bg-light p-md-5 p-5 mt-5 rounded" @submit.prevent="login">
         <h1 class="text-center">login</h1>
         <br>
        <div class="form-group ">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" v-model="user.email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="user.password">
        </div>
       <button type="submit" class="btn btn-primary">Submit</button>
       <br><br>
        <router-link to="/forgot"><p>forgot password ?</p></router-link>
      </form>
      <br> <br>
</div>
    <router-view />
  </div>
</template>


<script>
import firebase from 'firebase'
export default {
  name:'login',
  data(){
    return{
      user:{
        email:'',
        password:''
      } 
    }
  },
  methods: {
    login(){
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
            this.$router.push('/home')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
}
</script>