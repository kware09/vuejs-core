<template>
	<nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Core Hr</router-link>
      </div>

      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown" :class="{open : isDropDownOpen}" @click="isDropDownOpen = !isDropDownOpen">
          <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dashboards <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <router-link to="/Employee" activeClass="active" tag="li"><a>Employee</a></router-link>
            <router-link to="/Manager" activeClass="active" tag="li"><a>Manager</a></router-link>
            <router-link to="/HrAdmin" activeClass="active" tag="li"><a>HrAdmin</a></router-link>
          </ul>
        </li>
      </ul>
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>

	export default {
		data() {
			return {
				isDropDownOpen: false			}
		},
		computed:{
	
		},
		methods: {
			
		}
	}
</script>

<style>
  .navbar {
    margin-bottom: 0px;
  }
</style>