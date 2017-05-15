<template>
	<div class="contaainer full-height">
		 <!-- create side bar tabs component -->
		<app-sidenav :options="sideNav"></app-sidenav>
		<!-- create dash view controler -->
		<div class="col-xs-10 main-dash" >
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import SideNav from './SideNav.vue';
export default {
		data() {
			return {
				sideNav:[{name: 'Pay', id:"1"},
						{name: 'Expense', id:"2"},
						{name: 'Time', id:"3"},
						{name: 'Flex Benefits', id:"4"}]			
			}
		},
		components:{
			appSidenav: SideNav
		},
		computed:{
	
		},
		methods: {
			
		}
	}
</script>

<style>

	
	.main-dash{
		height: 1000px

	}
</style>