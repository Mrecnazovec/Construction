document.addEventListener('DOMContentLoaded', () => {
	const counters = document.querySelectorAll('.counter span');
	
	counters.forEach(counter => {
			const updateCount = () => {
					const target = +counter.getAttribute('data-target');
					const count = +counter.innerText;
					const speed = 50; // Lower is faster

					const increment = target / speed;

					if (count < target) {
							counter.innerText = Math.ceil(count + increment);
							setTimeout(updateCount, 30); // Adjust delay as needed
					} else {
							counter.innerText = target + "%";
					}
			};

			updateCount();
	});
});