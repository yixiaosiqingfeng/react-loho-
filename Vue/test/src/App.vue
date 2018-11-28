<template>
  <div id="app">
  	<!--<Header></Header>-->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
//import Home from './components/pages/Home/Home';
//import Header from './components/commons/Header';
import Footer from './components/commons/Footer';


export default {
  name: 'App',
  components:{Footer},
}
</script>

<style>

</style>
