<template>
    <article>
        <h2>Prêt à regarder? Remplissez le formulaire proposé dans cette page</h2>
        <p>Tous les mois profitez de toutes les nouveautés série et cinéma. A partir du mois
            prochain on vous propose tous les classiques du cinéma. Où que vous soyez. Tous
            les films en VO, VOST, VF et plus d'options</p>
        <MovieGrid :movies="movies"/>
        <router-link to="/register">Cliquez ici pour commencer</router-link>
    </article>
</template>

<script>
    import MovieGrid from "../components/MovieGrid.vue"

    export default {
        components: {
            MovieGrid
        },
        data() {
            return {
                movies: []
            }
        },
        async created() {
            const response = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=cfd28171c3e2ccd8fdb64b5a8e13a97d")
            const data = await response.json()
            this.movies = data.results.slice(0, 15)
        }
    }
</script>

<style>
    article h2 {
        color: #fff;
        text-align: center;
        margin-bottom: 2rem;
    }

    article > p {
        color: #fff;
        background-color: var(--secondary-color);
        text-align: center;
        width: 100%;
        padding: 3rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 .4rem .5rem rgba(0, 0, 0, 0.2);
    }

    article a {
        display: block;
        background-color: var(--tertiary-color);
        color: #222;
        padding: 1.5rem;
        margin: 2rem auto;
        max-width: 25rem;
        text-align: center;
        box-shadow: 0 .4rem .5rem rgba(0, 0, 0, 0.2);
        font-weight: bold;
    }

    @media only screen and (max-width: 1024px) {
        article > p {
            margin-bottom: 2rem;
        }

        main {
            margin: 0 2rem;
            margin-top: 3rem;
        }
    }
</style>