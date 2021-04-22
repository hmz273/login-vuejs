<template>
  <div id="app">
      
      <div class="container col-md-4">
      <form class="bg-light p-md-5 p-5 mt-5 rounded" @submit.prevent="login">
         <h1 class="text-center">login</h1>
         <br>
        <div class="form-group ">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" v-model="email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
        </div>
       <button type="submit" class="btn btn-primary">Submit</button>
       <br><br>
        <router-link to="/forgot"><p>forgot password ?</p></router-link>
      </form>
      <br> <br>
      <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">users</th>
      <th scope="col">E-mail</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, n) in users" :key="user">
      <td >{{n + 1}}</td>
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
  name:'login',
  data(){
    return{
      email:'',
      password:'',
      users:[],
    }
  },
  methods: {
    login(){
       this.users.push({email: this.email, pwd: this.password});
       this.email='';
       this.password='';
    }
  }
}
</script>

<style>

</style>