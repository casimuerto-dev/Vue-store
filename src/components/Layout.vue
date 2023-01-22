<template>
	<header class="header">
		<img
			class="header__image"
			src="../assets/mainBanner.png"
			alt="welcome to Casimuerto's Fun!"
		/>
	</header>

	<slot></slot>

	<footer class="footer">
		<div class="footer__info">
			<p class="footer__text" style="font-size: 25px; text-decoration: underline">
				Authorized by the state of Rick & Morty
			</p>
			<p class="footer__text">Certified f-boy</p>
			<p class="footer__text">Terms and conditions</p>
			<p class="footer__text">All lefts reserved</p>
		</div>
		<div class="footer__info">
			<p class="footer__text" style="font-size: 25px; text-decoration: underline">
				Follow us on social media!
			</p>
			<p class="footer__text">FaceLedger</p>
			<p class="footer__text">Delayedgram</p>
			<p class="footer__text">Barker</p>
		</div>
	</footer>
</template>

<style scoped>
.header {
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	max-width: 100%;
	margin-bottom: 1px;
}
.header__image {
	width: 100%;
}
.footer {
	display: flex;
	background-color: black;
	color: white;
	justify-content: space-around;
	margin-top: 200px;
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
</style>
