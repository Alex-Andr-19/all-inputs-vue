<template>
    <div class="selectInput" :class="{ 'opened': isOpened }">
        <div @click="toggleAnswer" class="selectInput__mainRow">
            <div v-if="value.length === 0" class="selectInput__mainRow__answer placeholder">
                {{ props.placeholder }}
            </div>
            <div v-else class="selectInput__mainRow__answer">
                {{ showAnswer }}
            </div>

            <img class="selectInput__mainRow__image" src="/img/icons/arrow-down.svg" alt="">
        </div>

        <Transition name="fromTop">
            <div v-if="isOpened" class="selectInput__answers">
                <div v-for="answer in meta.answers" :key="answer.value" @click="setNewValue(answer.value)"
                    class="selectInput__answers__item">
                    <div class="selectInput__answers__item__point"
                        :class="{ 'multy': !meta.isMulty, 'selected': checkIsSelected(answer.value) }">
                        <img src="/img/icons/selected.svg" alt="">
                    </div>
                    <div class="selectInput__answers__item__text">
                        {{ answer.text }}
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>   
