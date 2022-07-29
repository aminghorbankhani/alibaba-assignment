const mixins = {
    methods: {
        setTitle(title) {
            const titleMeta = document.querySelector('head title');
            titleMeta.textContent = `${title} - Alibaba Assignment`;
        },
    }
}

export default mixins;
