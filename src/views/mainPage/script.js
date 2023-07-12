import myInput from "@/components/myInput/myInput.vue";

export default {
    components: {
        myInput, 
    },

    data() {
        return {
            inputs: [
                {
                    id: "input-" + new Date().getTime(),
                    value: "",
                    type: "text",
                    props: {
                        placeholder: "placeholder",
                        // disabled: true,
                    },
                    meta: {
                        errorText: "",
                        label: "Input title",
                    },
                },
    
                {
                    id: "input-" + (new Date().getTime() + 200),
                    value: "",
                    type: "select",
                    props: {},
                    meta: {
                        isMulty: false,
                        answers: [
                            {
                                text: "1",
                                value: 1,
                            },
                            {
                                text: "2",
                                value: 2,
                            },
                            {
                                text: "3",
                                value: 3,
                            },
                        ],
                    },
                },
            ],
        }
    },

    methods: {
        testFunction() {
            this.inputs[0].meta.errorText = this.inputs[0].meta.errorText.length > 0 ? "" : "asdf"
        },
    },
}