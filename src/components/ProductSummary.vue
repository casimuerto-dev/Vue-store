<template>
	<div class="summary">
		<img src="https://picsum.photos/seed/makia/100/100" />
		<div>
			<p>Porduct name</p>
			<p>amount</p>
			<div class="actions">
				<button>less</button>
				<button>more</button>
				<button>delete</button>
			</div>
		</div>
	</div>
</template>
<script setup></script>
<style scoped>
.summary {
	display: flex;
	justify-content: space-evenly;
	width: 100%;
}
</style>
