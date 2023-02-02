import Layout from '../components/Layout.vue';

<template>
	<Layout>
		<div class="main">
			<div class="main__column--left">
				<Transition name="fade">
					<div class="main__wrapper">
						<p class="main__text main__text--modified">
							Product {{ route.params.name }}
						</p>
						<div class="imageLoader" v-show="!displayImage"></div>
						<img
							class="main__image--product-D"
							:src="`https://picsum.photos/seed/${route.params.name}/350/350`"
							@load="displayImage = true"
						/>
						<p class="main__text--normal">Description of the product</p>
						<p class="main__text--normal">
							This product is amazing because this and this and that
						</p>
					</div>
				</Transition>
			</div>
			<div class="main__column--right">
				<h2 class="main__text" style="background-color: black; position: relative">
					Product Details
				</h2>

				<p class="main__text--details">
					This product will blow your mind!<br />
					This is the acclaimed product {{ route.params.name }} that has changed the
					way the world defines products.<br />
					Get yours now!
				</p>
			</div>
		</div>
	</Layout>
</template>
<script setup>
import Layout from "../components/Layout.vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
const route = useRoute();
const displayImage = ref(false);
console.log(route.params);
</script>
<style scoped>
.main {
	display: flex;
	justify-content: space-around;
}

.main__column--right {
	width: 50%;
}

.main__image--product-D {
	border-radius: 20%;
}

.main__text--details {
	font-family: var(--main-font);
}

.imageLoader {
	height: 350px;
	width: 350px;
	background-color: lightgrey;
	border-radius: 20%;
}
</style>
