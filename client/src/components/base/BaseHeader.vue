<template>
    <header>
        <img src="../../assets/img/logo.png" alt="logo">
        <h1>Films, séries TV et bien plus en illimité.</h1>
    </header>
</template>

<script>
    export default {
        name: "BaseHeader"
    }
</script>

<style scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--secondary-color);
        padding: 1rem;
        box-shadow: 0 .4rem .5rem rgba(0, 0, 0, 0.2);
    }

    header h1 {
        color: #fff;
        font-size: 5rem;
    }

    header img {
        height: 10rem;
        margin-right: 1rem;
    }
</style>