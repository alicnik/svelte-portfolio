<script>
    import { faCode } from "@fortawesome/free-solid-svg-icons";
    import Icon from "fa-svelte";

    let expanded = false;
</script>

<style>
    aside {
        position: absolute;
        top: 91vh;
        background: gray;
        right: 0;
        left: 0;
        bottom: 0;
        transition: 1.1s cubic-bezier(0.5, 0, 0.5, 1);
        padding: 7px 2rem 0;
    }

    .expanded {
        top: 0vh;
        padding: 2rem;
    }

    header {
        display: flex;
        justify-content: space-between;
    }

    :global(.icon) {
        font-size: 1.5rem;
        transition: 0.2s ease;

        &:hover {
            transform: scale(1.2);
            cursor: pointer;
        }
    }
</style>

<aside class:expanded>
    <header>
        Click here to see this page's code &#8594;
        <div on:click={() => (expanded = !expanded)}>
            <Icon class="icon" icon={faCode} />
        </div>
    </header>
</aside>
