<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <span class="navbar-brand">Lista de contatos</span>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
        </li>
        <li class="nav-item">
        </li>
      </div>
    </nav>
    <FormContact/>
  </div>
</template>

<script>
import FormContact from './components/FormContact.vue'


export default {
  name: 'App',
  components: {
    FormContact
  }
}
</script>

<style>
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
/*reset.css*/
/* RESETS */
*,
*::before,
*::after {
  box-sizing: border-box;
}
.row {
  margin: 0;
}
body {
  width: 100%;
  margin: 0 auto;
  color: #4d4d4d;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

button {
  height: 48px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
}
.btn-success {
  background: #f05e5c;
  border: 1px solid #f05e5c;
}
.btn-success:hover {
  background: #c25151;
  border: 1px solid #c25151;
}
.btn-edit, .btn-delete {
  width: 100px;
  height: 40px;
  line-height: 31px;
  font-weight: 600;
  color: white !important;
  text-decoration: none !important;
}
.btn-delete {
  margin-left: 5px;
}
.card-text {
    font-size: 16px;
}
.form-control {
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  max-width: 472px;
  height: 40px;
  text-align: left;
}
.form-control:focus {
  border-color: #41a5bb;
  box-shadow: 0 0 0 0.2rem #41a5bb25
}

/*END RESETS*/
</style>
