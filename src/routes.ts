import type { RouteDefinition } from 'svelte-spa-router';
import About from './components/About.svelte';
import Contact from './components/Contact.svelte';
import Projects from './components/Projects.svelte';
import Skills from './components/Skills.svelte';

const routes = {
	'/': About,
	'/about': About,
	'/skills': Skills,
	'/projects': Projects,
	'/contact': Contact,
} as RouteDefinition;

export default routes;
