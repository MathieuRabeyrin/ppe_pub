<template>
    <figure>
        <img :src="url || missingImg" :alt="title">
        <figcaption>
            <p>{{ title }}<span>{{ grade }}</span></p>
        </figcaption>
    </figure>
</template>

<script>
    export default {
        name: "MovieCard",
        data() {
            return {
                missingImg: "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo="
            }
        },
        props: {
            url: {
                type: String
            },
            title: {
                type: String
            },
            grade: {
                type: Number
            }
        }
    }
</script>

<style scoped>
    figure {
        display: flex;
        flex-direction: column;
        box-shadow: 0 .4rem .5rem rgba(0, 0, 0, 0.2);
    }

    figure img {
        height: 30rem;
        width: 100%;
    }

    figure figcaption {
        background-color: var(--secondary-color);
        padding: 1rem;
    }

    figure figcaption p {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
    }

    figure figcaption span {
        color: var(--tertiary-color);
        font-weight: bold;
        background-color: var(--primary-color);
        padding: .6rem;
        box-shadow: 0 0 0.2rem #222;
    }

    @media only screen and (max-width:767px) {
        figure img {
            height: 100%;
        }
    }
</style>