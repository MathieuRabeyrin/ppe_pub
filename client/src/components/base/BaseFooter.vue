<template>
    <footer>
        <p>&copy; - Streaming - 2021</p>
    </footer>
</template>

<script>
    export default {
        name: "BaseFooter"
    }
</script>

<style scoped>
footer {
    background-color: var(--secondary-color);
    padding: 1.5rem;
    margin-top: auto;
}

footer p {
    color: #fff;
    text-align: center;
}
</style>