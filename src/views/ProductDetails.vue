import Layout from '../components/Layout.vue';

<template>
	<Layout>
		<div class="main">
			<div class="main__column--left">
				<img :src="`https://picsum.photos/seed/${route.params.name}/400/400`" />
			</div>
			<div class="main__column--right"></div>
		</div>
	</Layout>
</template>
<script setup>
import Layout from "../components/Layout.vue";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params);
</script>
