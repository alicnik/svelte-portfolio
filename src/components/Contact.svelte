<script>
    import Editor from "./Editor.svelte";
    import { contactCode as value } from "../assets/codeValues";
    import { fade } from "svelte/transition";
</script>

<style>
    section {
        color: var(--off-white);
        padding: 7rem 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            font-size: 4rem;
            align-self: flex-start;
            text-transform: uppercase;
            font-style: italic;
            margin-bottom: 2rem;
        }
    }
    form {
        display: flex;
        width: clamp(300px, 20vw, 600px);
        flex-direction: column;
        justify-content: space-around;
        height: 500px;

        label {
            display: flex;
            flex-direction: column;
            margin-bottom: 4px;
        }

        input,
        textarea {
            padding: 0.6rem 0.3rem 0.3rem;
            font-size: 1.1rem;
            background: none;
            border: none;
            border-bottom: 1px solid var(--off-white);
            color: var(--off-white);
            font-family: var(--raleway);
        }

        button {
            align-self: flex-end;
            padding: 0.8rem 1.8rem;
            font-size: 1.1rem;
            border: 1px solid var(--off-white);
            background: none;
            color: var(--off-white);
        }
    }
</style>

<section id="contact" transition:fade>
    <h2>Get in touch</h2>
    <form>
        <label for="name">Name<input
                id="name"
                name="name"
                type="text"
                required /></label>
        <label for="email">Email address<input
                id="email"
                name="email"
                type="email"
                required /></label>
        <label for="message">Message<textarea
                id="message"
                name="message"
                rows="5"
                required /></label>
        <button>Submit</button>
    </form>
    <div class="direct-contact">
        <p>Alternatively, you can email me directly at:</p>
        <address>
            <a href="mailto:me@alexnicholas.dev">me@alexnicholas.dev</a>
        </address>
    </div>
</section>
<Editor {value} />
