import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
	const storedItems = ref({ count: 0, items: {} });
	const cantDeleteMore = ref(false);

	function increment(name, amountToAdd) {
		if (!storedItems.value.items.hasOwnProperty(name)) {
			storedItems.value.items[name] = {
				amount: amountToAdd || 1,
				price:
					name > 10
						? parseFloat(parseInt(name) + 10.99).toFixed(2)
						: parseFloat(parseInt(name) + 20.99).toFixed(2),
			};
		} else {
			storedItems.value.items[name].amount =
				storedItems.value.items[name].amount + (amountToAdd || 1);
		}

		storedItems.value.count = storedItems.value.count + (amountToAdd || 1);
		if (storedItems.value.count > 1) {
			cantDeleteMore.value = false;
		}
	}

	function decrement(name) {
		if (storedItems.value.items.hasOwnProperty(name)) {
			if (storedItems.value.items[name].amount > 1) {
				storedItems.value.items[name].amount -= 1;
				storedItems.value.count = storedItems.value.count - 1;
			} else {
			}
		} else {
		}
	}

	const deleteItem = (name) => {
		if (
			storedItems.value.count > 1 &&
			Object.keys(storedItems.value.items).length > 1
		) {
			storedItems.value.count =
				storedItems.value.count - storedItems.value.items[name].amount;
			delete storedItems.value.items[name];
		} else {
			cantDeleteMore.value = true;
			setTimeout(() => {
				cantDeleteMore.value = false;
			}, 2000);
		}
	};

	return { storedItems, increment, decrement, deleteItem, cantDeleteMore };
});
