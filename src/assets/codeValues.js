export const aboutCode = `<script>\r\n    import { fade } from \"svelte\/transition\";\r\n    import profilePhoto from \"..\/assets\/images\/profile-photo.jpg\";\r\n    import Editor from \".\/Editor.svelte\";\r\n<\/script>\r\n\r\n<style>\r\n    section#about {\r\n        height: 100%;\r\n        display: flex;\r\n        justify-content: space-around;\r\n        align-items: center;\r\n        color: var(--off-white);\r\n    }\r\n\r\n    article {\r\n        width: 70%;\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n\r\n        div.content {\r\n            max-width: 422px;\r\n            padding: 0 2rem 2rem;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-around;\r\n            color: white;\r\n        }\r\n    }\r\n\r\n    figure {\r\n        img {\r\n            width: clamp(200px, 30vw, 400px);\r\n            outline: 1px solid white;\r\n            outline-offset: 3px;\r\n        }\r\n    }\r\n<\/style>\r\n\r\n<section id=\"about\" in:fade>\r\n    <article>\r\n        <figure>\r\n            <img src={profilePhoto} alt=\"Alex Nicholas headshot\" \/>\r\n            <figcaption>Alex Nicholas<\/figcaption>\r\n        <\/figure>\r\n        <div class=\"content\">\r\n            <p>\r\n                I have a natural affinity for solving computing problems with a\r\n                high degree of both tenacity and resourcefulness. Combining a\r\n                master\u2019s degree in International Business Law with experience in\r\n                client-facing luxury service industries, I am able to deliver\r\n                logical and innovative solutions that prioritise user\r\n                experience.\r\n            <\/p>\r\n            <p>\r\n                I am driven to actively seek out and resolve inefficiencies and\r\n                am an advocate of automation and collaborative working\r\n                technologies. As a graduate of the Software Engineering\r\n                Immersive coding boot camp at General Assembly, I am now ready\r\n                to move forward and thrive in a workplace characterised by bold\r\n                ambition and outstanding achievement where growth and learning\r\n                are among the core values of the business.\r\n            <\/p>\r\n        <\/div>\r\n    <\/article>\r\n<\/section>`;

export const skillsCode = `<script>\r\n    import { onMount } from \"svelte\";\r\n    import { fade } from \"svelte\/transition\";\r\n    import TagCloud from \"TagCloud\";\r\n    import Editor from \".\/Editor.svelte\";\r\n\r\n    const container = \".cloud\";\r\n    const texts = [\r\n        \"HTML\",\r\n        \"CSS\",\r\n        \"JavaScript\",\r\n        \"TypeScript\",\r\n        \"React\",\r\n        \"Svelte\",\r\n        \"Docker\",\r\n        \"Azure DevOps\",\r\n        \"Sass\",\r\n        \"Node.js\",\r\n        \"Express\",\r\n        \"MongoDB\",\r\n        \"Mongoose\",\r\n        \"Python\",\r\n        \"Flask\",\r\n        \"PostgreSQL\",\r\n        \"Git\",\r\n        \"Snowpack\",\r\n        \"Jest\",\r\n        \"React Testing Library\",\r\n    ];\r\n    const options = {\r\n        radius: 200,\r\n        maxSpeed: \"slow\",\r\n    };\r\n\r\n    onMount(() => {\r\n        const tagCloud = TagCloud(container, texts, options);\r\n        return () => tagCloud.destroy();\r\n    });\r\n<\/script>\r\n\r\n<style>\r\n    section {\r\n        height: 100%;\r\n        display: flex;\r\n        justify-content: space-around;\r\n        align-items: center;\r\n        color: var(--off-white);\r\n    }\r\n\r\n    div.cloud {\r\n        cursor: default;\r\n    }\r\n<\/style>\r\n\r\n<section id=\"skills\" in:fade>\r\n    <article>\r\n        <p>\r\n            While I am perhaps most at home on the front end, I prefer to take a\r\n            holistic approach to projects, understanding the entire architecture\r\n            and developing confidence in all areas of the codebase. Accordingly,\r\n            I have built a range of skills to ensure that I am well positioned\r\n            to improve upon and debug any part of an application.\r\n        <\/p>\r\n\r\n        <p>\r\n            I am constantly on the lookout for new ways to hone and improve my\r\n            skills, as well as new languages and frameworks to learn. I used\r\n            this website as an opportunity to learn Svelte; you can see the code\r\n            by clicking on the banner towards the bottom of the page.\r\n        <\/p>\r\n    <\/article>\r\n    <div class=\"cloud\" \/>\r\n<\/section>`;

export const contactCode = `<script>
    import Editor from "./Editor.svelte";
</script>

<style>
    section {
        color: var(--off-white);
    }
    form {
        display: flex;
        flex-direction: column;
    }
</style>

<section id="contact">
    <h2>Contact me</h2>
    <form>
        <label for="name">Name<input type="text" /></label>
        <label for="email">Email address<input type="text" /></label>
        <label for="message">Message<textarea /></label>
        <button>Submit</button>
    </form>
</section>`;
