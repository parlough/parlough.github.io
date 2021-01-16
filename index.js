function registerKeyBindings() {
    document.addEventListener('keypress', (e) => {
        switch (e.key) {
            case 'e':
                document.getElementById('education').scrollIntoView({
                    behavior: "smooth"
                });
                break;
            case 'i':
                document.getElementById('interests').scrollIntoView({
                    behavior: "smooth"
                });
                break;
            case 's':
                document.getElementById('skills').scrollIntoView({
                    behavior: "smooth"
                });
                break;
            case 'l':
                document.getElementById('links').scrollIntoView({
                    behavior: "smooth"
                });
                break;
            case 'c':
                document.getElementById('employment').scrollIntoView({
                    behavior: "smooth"
                });
                break;
            case 'h':
                document.getElementById('home').scrollIntoView({
                    behavior: "smooth"
                });
                break;
        }
    });
}

registerKeyBindings();