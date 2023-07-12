export default {
    props: {
        id: {
            type: String,
            default: "input-" + new Date().getTime(),
        },

        modelValue: {
            type: String,
            require: true,
        },

        type: {
            type: String,
            default: "text",
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