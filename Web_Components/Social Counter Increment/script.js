const values = document.querySelectorAll(".values");

values.forEach(value => {
    value.innerHTML = '0';

    function updateCount() {

        const target = +value.getAttribute("data-target");
        const currVal = +value.innerHTML;

        const increment = target / 200;

        if (currVal < target) {
            value.innerHTML = Math.ceil(currVal + increment);
            setTimeout(updateCount, 1); // asynchronous js
        } else {
            value.innerHTML = target;
        }
    }

    updateCount();
});