import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
	const storedItems = ref({ count: 0, items: {} });
	const cantDeleteMore = ref(false);

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
		if (storedItems.value.count > 1) {
			cantDeleteMore.value = false;
		}
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
				if (storedItems.value.count === 1) {
					cantDeleteMore.value = true;
				}
			}
		} else {
			console.log("does not exist");
		}
	}

	const deleteItem = (name) => {
		console.log("delete");
		if (
			storedItems.value.count > 1 &&
			Object.keys(storedItems.value.items).length > 1
		) {
			console.log("more than 1");
			storedItems.value.count =
				storedItems.value.count - storedItems.value.items[name].amount;
			delete storedItems.value.items[name];
		} else {
			cantDeleteMore.value = true;
		}
	};

	return { storedItems, increment, decrement, deleteItem, cantDeleteMore };
});
