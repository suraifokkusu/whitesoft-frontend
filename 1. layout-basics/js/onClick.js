function onClick(event) {
    if (event.id == "button_right") {
        event.className = "product-plan__button-monthly-active";
        button_left.className = "product-plan__button-yearly";
    }
    if (event.id == "button_left") {
        event.className = "product-plan__button-yearly-active";
        button_right.className = "product-plan__button-monthly";
    }

};