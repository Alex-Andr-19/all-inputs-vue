import textInput from "@/components/textInput/textInput.vue";

export default {
    components: {
        textInput,
    },

    data() {
        return {
            textInput: {
                value: "",
                props: {
                    placeholder: "placeholder",
                    disabled: true,
                },
                meta: {
                    errorText: "",
                    label: "Input title",
                },
            },
        }
    },

    methods: {
        testFunction() {
            this.textInput.meta.errorText = this.textInput.meta.errorText.length > 0 ? "" : "asdf"
        },
    },
}