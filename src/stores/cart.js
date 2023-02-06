import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
	const storedItems = ref({ count: 0, items: {} });

	function increment(name, amountToAdd) {
		console.log("increment");
		if (!storedItems.value.items.hasOwnProperty(name)) {
			console.log("does not exist");
			storedItems.value.items[name] = { amount: amountToAdd || 1 };
		} else {
			console.log("does exist");
			storedItems.value.items[name].amount =
				storedItems.value.items[name].amount + (amountToAdd || 1);
		}

		storedItems.value.count = storedItems.value.count + (amountToAdd || 1);
		console.log("store:", storedItems.value);
	}

	return { storedItems, increment };
});
