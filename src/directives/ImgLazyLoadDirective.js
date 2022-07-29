export default {
    inserted: el => {
        const loadImage = () => {
            const imageElement = Array.from(el.children).find(
                el => el.nodeName === "IMG"
            );
            if (imageElement) {
                imageElement.addEventListener("load", () => {
                    setTimeout(() => {
                        el.classList.remove("opacity-0");
                    }, 100);
                });
                imageElement.addEventListener("error", () => console.log("error"));
                imageElement.src = imageElement.dataset.src;
            }
        }
        const createObserver = () => {
            const options = {
                threshold: 0,
            };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        loadImage();
                        observer.unobserve(el);
                    }
                });
            }, options);
            observer.observe(el);
        }

        if (window["IntersectionObserver"]) {
            createObserver();
        } else {
            loadImage();
        }
    }
};
