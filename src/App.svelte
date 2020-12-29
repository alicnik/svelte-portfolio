<script>
    import Router from "svelte-spa-router";
    import Footer from "./components/Footer.svelte";
    import Header from "./components/Header.svelte";
    import routes from "./routes";
</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,900;1,900&display=swap");

    :global(:root) {
        --dark-bg: #1f2124;
        --dark-text: #1f2124;
        --raleway: "Raleway", Arial, sans-serif;
    }

    :global(*) {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :global(body) {
        height: 100vh;
        background-color: var(--dark-bg);
        display: grid;
        grid-template-columns: minmax(300px, 15vw) auto;
        grid-template-rows: 95.5vh auto;
        font-family: var(--raleway);
    }

    main {
        position: relative;
        overflow: hidden;
    }
</style>

<Header />
<main>
    <Router {routes} />
</main>

<Footer />
