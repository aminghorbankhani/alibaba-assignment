const mixins = {
    methods: {
        setTitle(title) {
            const titleMeta = document.querySelector('head title');
            titleMeta.textContent = `${title} - WikiCountry (Vue2)`;
        },
    }
}

export default mixins;
