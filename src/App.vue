<template>
  <div>
    <app-header></app-header>  
    <div class="row">
    <div class="col-xs-12">
      <router-view></router-view>
    </div>
  </div>
  </div>

</template>

<script>
import Header from './components/Header.vue';
export default {
    components: {
      appHeader : Header
    }
}
</script>

<style>
  body{
    background-image: url(./assets/bg1.jpg);
    background-size:cover;
  }
</style>

