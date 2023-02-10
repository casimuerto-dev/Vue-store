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

	function decrement(name) {
		console.log("decrement");
		if (storedItems.value.items.hasOwnProperty(name)) {
			console.log("exists");
			if (storedItems.value.items[name].amount > 1) {
				console.log("can be decreased");
				storedItems.value.items[name].amount -= 1;
				storedItems.value.count = storedItems.value.count - 1;
				console.log("store:", storedItems.value);
			} else {
				console.log("can't be decreased");
			}
		} else {
			console.log("does not exist");
		}
	}

	return { storedItems, increment, decrement };
});
