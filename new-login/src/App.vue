<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand ml-4" href="#">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

    </ul>
     <router-link to="/"> <button class="btn btn-outline-success my-2 my-sm-0 mr-1" type="submit">signup</button></router-link>
 <router-link to="/login"> <button class="btn btn-outline-success my-2 my-sm-0" type="submit">login</button></router-link>
  </div>
</nav>
    <router-view />
  </div>
</template>

<style lang="scss">
body{
  background-color: #42b983;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    background-color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
