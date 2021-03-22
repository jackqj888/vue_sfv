<template>
  <div id="app">
     <header>
       <Navbar />
     </header>
      </div>
</template>

<script>
// import Login from './components/Login'
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    // Login
    Navbar
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

header {
  width: 100%;
  background-color: #222;
  padding: 15px;
}

</style>
