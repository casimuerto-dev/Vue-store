<template>
	<header class="header">
		<RouterLink to="/">
			<img
				class="header__image"
				src="../assets/mainBanner.png"
				alt="welcome to Casimuerto's Fun!"
			/>
		</RouterLink>
		<div class="menu" ref="menu">
			<button class="menu__button" @click="handlePush('products')">
				Products
			</button>

			<button class="menu__button">Other Stuff</button>
			<button class="menu__button">About us</button>
			<div
				class="shopping-cart__wrapper"
				v-show="cart.storedItems.count"
				@click="handlePush('cart')"
			>
				<span
					:class="{
						'material-symbols-outlined': true,
						'shopping-cart__icon': true,
						'contains-items': cart.storedItems.count,
					}"
				>
					shopping_cart
				</span>
				<p
					:class="{
						'shopping-cart__count': true,
						'contains-items': cart.storedItems.count,
					}"
				>
					{{ cart.storedItems.count }}
				</p>
			</div>
		</div>
	</header>
	<slot></slot>

	<span
		title="Back to Top"
		style="transform: rotate(-90deg)"
		:class="{
			'go-back-up': true,
			'material-symbols-outlined': true,
		}"
		@click="backUp"
	>
		arrow_forward_ios
	</span>
	<footer class="footer">
		<div class="footer__info">
			<p class="footer__text" style="text-decoration: underline">
				Authorized by the state of Rick & Morty
			</p>
			<p class="footer__text">Certified f-boy</p>
			<p class="footer__text">Terms and conditions</p>
			<p class="footer__text">All lefts reserved</p>
		</div>
		<div class="footer__info">
			<p class="footer__text" style="text-decoration: underline">
				Follow us on social media!
			</p>
			<p class="footer__text">FaceLedger</p>
			<p class="footer__text">Delayedgram</p>
			<p class="footer__text">Barker</p>
		</div>
	</footer>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();

const router = useRouter();
const handlePush = (route) => {
	router.push(`/${route}`);
};

const backUp = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
.header {
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	max-width: 100%;
	margin-bottom: 1px;
	background-color: rgba(172, 28, 175);
}
.header__image {
	width: 100%;
}

.menu {
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 10px;
	padding: 0 4px 5px;
}
.is-pinned .menu__button {
	color: white;
}
.menu__button {
	background-color: rgba(255, 0, 0, 0);
	outline: none;
	border: none;
	flex: 1;
	height: 2rem;
	border: 1px solid white;
	border-radius: 5px;
	color: white;
	font-size: 15px;
	font-family: var(--normal-font);
	font-style: italic;
	transition: all 0.2s ease;
}
.menu__button:hover {
	background-color: var(--hover-color);
	cursor: pointer;
}

.menu__button:active {
	background-color: var(--active-color);
}
.shopping-cart__wrapper {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	border-radius: 20%;
	padding: 5px;
	animation: camaleon 2s infinite ease-in-out;
}

@keyframes camaleon {
	from {
		background-color: none;
	}
	50% {
		background-color: rgb(0, 0, 0);
	}
	to {
		background-color: none;
	}
}

.shopping-cart__wrapper:hover {
	background-color: rgb(0, 0, 0);
	cursor: pointer;
	animation: none;
}
.shopping-cart__wrapper:hover .shopping-cart__icon,
.shopping-cart__wrapper:hover .shopping-cart__count {
}

.contains-items {
	color: white;
}

.shopping-cart__count {
	font-family: cursive;
	margin: 0;
}

.go-back-up {
	position: fixed;
	top: 80%;
	right: 2%;
	z-index: 10;
	border-radius: 21%;
	background-color: white;
	box-shadow: -2px 2px 6px black;
	cursor: pointer;
}

.footer {
	display: flex;
	background-color: black;
	color: white;
	justify-content: space-around;
	margin-top: 115px;
	bottom: 0px;
}

.footer__info {
	display: flex;
	flex-direction: column;

	align-items: flex-start;
}

.footer__text {
	margin: 10px 0;
	font-family: var(--normal-font);
	transition: all 0.2s ease;
}
.footer__text:hover {
	cursor: pointer;
	color: var(--hover-color);
}

.footer__text:active {
	color: var(--active-color);
}

@media screen and (max-width: 540px) {
	.footer {
		flex-direction: column;
	}
	.footer__info {
		align-items: center;
	}
}
</style>
