import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
	const storedItems = ref({ count: 0, items: {} });

	function increment(name) {
		console.log("increment");
		if (!storedItems.value.items.hasOwnProperty(name)) {
			console.log("yes");
			storedItems.value.items[name] = { amount: 1 };
		} else {
			console.log("no");
			storedItems.value.items[name].amount++;
		}

		storedItems.value.count++;
		console.log("store:", storedItems.value);
	}

	return { storedItems, increment };
});
