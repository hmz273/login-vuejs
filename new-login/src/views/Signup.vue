<template>
  <div id="app">
     <div class="container col-md-4">
      <form class="bg-light p-md-5 p-5 mt-5 rounded" @submit.prevent="signup">
        <h1>Sign-up</h1>
        <br>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"  v-model="username">
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" v-model="email">
  </div>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
  </div>
  <button type="submit" class="btn btn-primary">Submit <router-link to="/login"></router-link></button>
  <br><br>
        <p> Already registerd <router-link to="/login">sign in ? </router-link> </p>
</form>
<br><br>
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">userName</th>
      <th scope="col">E-mail</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user">
      <td >{{user.username}}</td>
      <td >{{user.email}}</td>
      <td >{{user.pwd}}</td>
    </tr>
  </tbody>
</table>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
   name:'signup',
  data(){
    return{
      username:'',
      email:'',
      password:'',
      users:[],
    }
  },
  methods: {
    signup(){
       this.users.push({email: this.email, pwd: this.password , username: this.username});
       this.username='';
       this.email='';
       this.password='';
    }
  }
}
</script>

<style>

</style>