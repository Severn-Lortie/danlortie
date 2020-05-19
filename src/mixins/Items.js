const items = {
    computed: {
        item() {
            return this.$store.state[this.module][this.items][this.$route.params.id] || {};
        },
    },
};

export default items;
