<template>
    <ul>
        <li v-for="movie in movies" :key="movie.id">
            <MovieCard :title="movie.title || movie.name" :grade="movie.vote_average" :url="setUrl(movie.poster_path)"/>
        </li>
    </ul>
</template>

<script>
    import MovieCard from "./MovieCard.vue"

    export default {
        components: {
            MovieCard
        },
        props: {
            movies: {
                type: Array
            }
        },
        methods: {
            setUrl(posterPath) {
                return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}`
            }
        }
    }
</script>

<style>
    main ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1.5rem;
    }

    @media only screen and (max-width: 767px) {
        main ul {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        main ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media only screen and (max-width: 1024px) {
        main ul {
            gap: 2rem;
        }
    }
</style>