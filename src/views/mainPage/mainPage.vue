<template>
    <div class="mainPage">
        <div v-for="inputData in inputs" :key="inputData.id" class="mainPage__inputBlock">
            <myInput
                v-model:modelValue="inputData.value"
                
                :type="inputData.type"
                :meta="inputData.meta" :props="inputData.props"
            >
                <template #functionalBlock>
                    functional block
                </template>

                <template #description>
                    description
                </template>
            </myInput>
        </div>

        <div @click="testFunction" class="mainPage__tex">
            TEST
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>
