function registerKeyBindings() {
    document.addEventListener('keypress', (e) => {
        if (e.key === 'e') {
            document.getElementById('education').scrollIntoView({
                behavior: "smooth"
            });
        } else if (e.key === 'i') {
            document.getElementById('interests').scrollIntoView({
                behavior: "smooth"
            });
        } else if (e.key === 's') {
            document.getElementById('skills').scrollIntoView({
                behavior: "smooth"
            });
        } else if (e.key === 'l') {
            document.getElementById('links').scrollIntoView({
                behavior: "smooth"
            });
        } else if (e.key === 'c') {
            document.getElementById('employment').scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

registerKeyBindings();