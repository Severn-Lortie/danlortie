// mixin for handeling two way data binding between components
const model = {
    props: ['value'],
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            }
        }
    }
}

export default model;