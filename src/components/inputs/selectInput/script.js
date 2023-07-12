import defaultInputMixin from "@/mixins/defaultInputMixin";

export default {
    name: "input-select",

    mixins: [
        defaultInputMixin,
    ],

    data() {
        return {
            isOpened: false,
        }
    },

    computed: {
        showAnswer() {
            if (typeof this.value === "object") {
                let answersText = [];

                this.value.forEach(el => {
                    console.log(el);
                    answersText.push(this.meta.answers.find(ans => ans.value === el).text);
                    // console.log(this.meta.answers.find(ans => ans.value === el).text);
                })

                return answersText.join(", ");
            }

            return this.meta.answers.find(ans => ans.value === this.value).text;
        },
    },

    methods: {
        toggleAnswer() {
            this.isOpened = !this.isOpened;
        },

        hideAnswers() {
            this.isOpened = false;
        },

        setNewValue(value) {
            if (this.meta.isMulty) {
                if (this.value.includes(value)) {
                    this.value = this.value.filter(ans => ans !== value);
                } else {
                    this.value = [...this.value, value];
                }
            } else {
                this.value = value;

                this.hideAnswers();
            }
        },

        checkIsSelected(value) {
            if (this.meta.isMulty) {
                return this.value.includes(value)
            }

            return this.value === value;
        },
    },
}