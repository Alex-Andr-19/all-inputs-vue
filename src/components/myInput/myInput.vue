<template>
    <div class="myInput">
        <div class="myInput__firstRow">
            <label v-if="meta.label?.length > 0" :for="name" class="myInput__firstRow__label">
                {{ meta.label }}
            </label>
            <div v-else class="space"></div>

            <div class="myInput__firstRow__functionalBlock">
                <slot name="functionalBlock"></slot>
            </div>
        </div>

        <div class="myInput__inputBlock">
            <component
                :is="`input-${type}`"
                
                v-model:modelValue="value"
                
                :id="id"
                :meta="meta"
                :props="props"
            />
        </div>
        
        <div class="myInput__additionalBlock">
            <Transition name="fromTop">
                <div v-if="meta.errorText?.length > 0" class="myInput__additionalBlock__error">
                    <div class="myInput__additionalBlock__error__img">
                        <img src="/img/icons/errorImg.svg" alt="">
                    </div>
                    <div class="myInput__additionalBlock__error__text">
                        {{ meta.errorText }}
                    </div>
                </div>
            </Transition>
            <div v-if="meta.errorText?.length === 0 || meta.errorText === undefined" class="space"></div>

            <div class="myInput__additionalBlock__description">
                <slot name="description"></slot>
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>
