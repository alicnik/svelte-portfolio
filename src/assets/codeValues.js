export const aboutCode = `<script>
import { fade } from 'svelte/transition';
import profilePhoto from '../assets/images/profile-photo.jpg';
import Editor from './Editor.svelte';
import { aboutCode as value } from '../assets/codeValues';
</script>

<section id="about" transition:fade>
<article>
    <figure>
        <img src={profilePhoto} alt="Alex Nicholas headshot" />
        <figcaption>Alex Nicholas</figcaption>
    </figure>
    <div class="content">
        <p>
            I have a natural affinity for solving computing problems with a high degree of both tenacity
            and resourcefulness. Combining a master’s degree in International Business Law with
            experience in client-facing luxury service industries, I am able to deliver logical and
            innovative solutions that prioritise user experience.
        </p>
    </div>
</article>
</section>
<Editor {value} />

<style>
section#about {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--off-white);
    max-width: 1080px;
    margin: 0 auto;
}

article {
    width: 85%;
    display: flex;
    justify-content: space-between;

    div.content {
        max-width: 422px;
        padding: 0 0 2rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: var(--off-white);
        font-size: 1.1rem;
        line-height: 1.5rem;
    }
}

figure {
    img {
        width: clamp(200px, 30vw, 400px);
        outline: 1px solid var(--off-white);
        outline-offset: 3px;
    }
}
</style>`;

export const skillsCode = `<script>
import { onMount } from 'svelte';
import { fade } from 'svelte/transition';
import TagCloud from 'TagCloud';
import Editor from './Editor.svelte';
import { skillsCode as value } from '../assets/codeValues';

const container = '.cloud';
const texts = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Svelte',
    'Docker',
    'Azure DevOps',
    'Sass',
    'Node.js',
    'Express',
    'MongoDB',
    'Mongoose',
    'Python',
    'Flask',
    'PostgreSQL',
    'Git',
    'Snowpack',
    'Jest',
    'React Testing Library',
];
const options = {
    radius: 300,
    maxSpeed: 'slow',
};

onMount(() => {
    const tagCloud = TagCloud(container, texts, options);
    return () => tagCloud.destroy();
});
</script>

<section id="skills" transition:fade>
<article>
    <div class="cloud" />
    <p>
        While I am perhaps most at home on the front end, I take a holistic approach to projects,
        understanding the entire architecture and developing confidence in all areas of the codebase.
        Accordingly, I have built a range of skills to ensure that I am well positioned to improve
        upon and debug any part of an application.
    </p>

    <p>
        I am constantly on the lookout for new ways to hone and improve my skills, as well as new
        languages and frameworks to learn. I used this website as an opportunity to learn Svelte; you
        can see the code by clicking on the banner towards the bottom of the page.
    </p>
</article>
</section>
<Editor {value} />

<style>
section {
    height: 100%;
    display: flex;
    justify-content: center;
    color: var(--off-white);
}

article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 100%;

    p {
        font-size: 1.1rem;
        margin: 1rem;
        text-align: center;
    }
}

div.cloud {
    cursor: default;
}
</style>`;

export const contactCode = `<script>
import Editor from './Editor.svelte';
import { contactCode as value } from '../assets/codeValues';
import { fade } from 'svelte/transition';
import emailjs, { init } from 'emailjs-com';

interface Touched {
    [index: string]: boolean;
    name: boolean;
    email: boolean;
    message: boolean;
}

let name = '';
let email = '';
let message = '';
let touched: Touched = {
    name: false,
    email: false,
    message: false,
};
let success = false;

init('user_Iusuy42LIpjSZSX8bT4a5');

function handleBlur(e: FocusEvent) {
    const input = e.target as HTMLInputElement | HTMLTextAreaElement;
    if (!input) {
        return;
    }
    touched[input.name] = true;
}

function handleSubmit(e: Event) {
    e.preventDefault();
    if (!touched.name || !touched.email || !touched.message) {
        setAllTouched(true);
        return;
    }
    emailjs.send('service_364d88k', 'template_49mrezz', { name, email, message }).then(
        () => {
            name = '';
            email = '';
            message = '';
            success = true;
            setAllTouched(false);
        },
        (err) => {
            console.log(err);
        }
    );
}

function handleInput(e: Event) {
    if (success) {
        success = false;
    }
}

function setAllTouched(value: boolean) {
    for (const input in touched) {
        touched[input] = value;
    }
}
</script>

<section id="contact" transition:fade>
<h2>Get in touch</h2>
<form on:submit={handleSubmit}>
    <label for="name">
        Name
        <input
            on:blur={handleBlur}
            on:input={handleInput}
            id="name"
            name="name"
            bind:value={name}
            type="text"
            required={touched.name}
        />
    </label>
    <label for="email">
        Email address
        <input
            on:blur={handleBlur}
            on:input={handleInput}
            id="email"
            name="email"
            bind:value={email}
            type="email"
            required={touched.email}
        />
    </label>
    <label for="message">
        Message
        <textarea
            on:blur={handleBlur}
            on:input={handleInput}
            id="message"
            name="message"
            bind:value={message}
            rows="5"
            required={touched.message}
        />
    </label>
    <button type="submit" disabled={success} class:success>{success ? 'Sent' : 'Submit'}</button>
</form>
<div class="direct-contact">
    <p>Alternatively, you can email me directly at:</p>
    <address>
        <a href="mailto:me@alexnicholas.dev">me@alexnicholas.dev</a>
    </address>
</div>
</section>
<Editor {value} />

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
        cursor: pointer;
        transition: 0.2s;

        &:not(.success):hover {
            transform: scale(1.03);
        }
    }
}

.success {
    color: rgb(20, 201, 20);
    border-color: rgb(20, 201, 20);
}

div.direct-contact {
    padding-top: 2rem;
}
a {
    color: var(--off-white);
}
</style>`;

export const projectCode = `<script>
import { fade } from 'svelte/transition';
import Editor from './Editor.svelte';
import { projectList } from '../assets/project-list';
</script>

<section id="projects" transition:fade>
<h2 hidden>My projects</h2>
{#each projectList as project}
    <div class="carousel-slide">
        <a href={project.href}>
            <img class="slide-image" src={project.imgSrc} alt={project.imgAltText} />
        </a>
        <div class="slide-text">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <a href={project.github}>View the README on GitHub</a>
        </div>
    </div>
{/each}
</section>
<Editor value="Hello Projects!" />

<style>
section {
    overflow-y: auto;
    height: 100%;
    color: var(--off-white);
    padding: 4rem 0;
}
.carousel-slide {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 2rem;
}

.slide-text {
    width: 20vw;

    h3 {
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    a {
        margin-top: 1rem;
        display: inline-block;
        color: var(--off-white);
    }
}

.slide-image {
    width: 40vw;
    border-radius: 10px;
    overflow: hidden;
}
</style>`;
