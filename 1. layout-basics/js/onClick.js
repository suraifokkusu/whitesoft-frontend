function onClick(event) {
    if (event.id == "button_right") {
        event.className = "main-landing__button-active";
        button_left.className = "main-landing__button-choose";
    }
    if (event.id == "button_left") {
        event.className = "main-landing__button-active";
        button_right.className = "main-landing__button-choose";
    }

};