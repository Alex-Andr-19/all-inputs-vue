<template>
    <div class="mainPage">
        <div class="mainPage__inputBlock">
            <textInput v-model:modelValue="textInput.value" :meta="textInput.meta" :props="textInput.props">
                <template #functionalBlock>
                    functional block
                </template>

                <template #description>
                    description
                </template>
            </textInput>
        </div>

        <div @click="testFunction" class="mainPage__tex">
            TEST
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>
