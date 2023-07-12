<template>
    <input
        v-model="value"
        
        :id="name"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        
        type="text"
        class="textInput"
    >
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>