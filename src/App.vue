<script setup>
import { RouterLink, RouterView } from "vue-router";
import Home from "./views/Home.vue";
</script>

<template>
	<RouterView />
	<!-- <nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav> -->
</template>

<style>
@import "./assets/global.css";
body {
	margin: 0;
	padding: 0;
	background-color: rgb(255, 255, 255);
}
</style>
