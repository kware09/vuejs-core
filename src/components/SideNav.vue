<template>
	<div class="col-xs-2 sidebar" >
		<ul class="list-group side-menu">
		 <router-link v-for="option in options" :to="option.id" tag="li" class="list-group-item" append><a>{{option.name}}</a></router-link>
		 
		</ul>
	</div>
</template>

<script>
export default {
		props: ['options'],
		methods: {}
	}
</script>

<style>
.sidebar{
		background-color: grey;
		padding-top: 20px;
		height: 1000px

		
	}
.side-menu{
			text-align: center;
		}

</style>