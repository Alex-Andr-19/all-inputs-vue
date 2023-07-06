<template>
    <div class="textInput">
        <div class="textInput__firstRow">
            <label v-if="meta.label.length > 0" :for="name" class="textInput__firstRow__label">
                {{ meta.label }}
            </label>
            <div v-else="meta.label.length === 0" class="space"></div>
            
            <div class="textInput__firstRow__functionalBlock">
                <slot name="functionalBlock"></slot>
            </div>
        </div>

        <input
            v-model="value"
            
            :id="name"
            :placeholder="props.placeholder"
            :disabled="props.disabled"
            
            type="text"
            class="textInput__input"
        >

        <div class="textInput__additionalBlock">
            <Transition name="fromTop">
                <div v-if="meta.errorText.length > 0" class="textInput__additionalBlock__error">
                    <div class="textInput__additionalBlock__error__img">
                        <img src="/img/icons/errorImg.svg" alt="">
                    </div>
                    <div class="textInput__additionalBlock__error__text">
                        {{ meta.errorText }}
                    </div>
                </div>
            </Transition>
            <div v-if="meta.errorText.length === 0" class="space"></div>

            <div class="textInput__additionalBlock__description">
                <slot name="description"></slot>
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>