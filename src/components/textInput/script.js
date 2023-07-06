export default {
    props: {
        id: {
            type: String,
            default: "input-text-" + new Date().getTime(),
        },

        modelValue: {
            type: String,
            require: true,
        },

        meta: {
            type: Object,
            default: {
                label: "Input title",
                errorText: "",
            },
        },

        props: {
            placeholder: "placeholder",
        },
    },

    data() {
        return {
            value: this.modelValue,
        }
    },

    watch: {
        value() {
            this.$emit("update:modelValue", this.value);
        },
    },
}