<template>
    <navbar :pages="pages" :active-page="activePage" :nav-link-click="(index) => activePage = index">
    </navbar>

    <page-viewer :page="pages[activePage]"></page-viewer>
</template>

<script>
import PageViewer from './components/PageViewer.vue';
import Navbar from './components/Navbar.vue';

export default {
    components: {
        PageViewer, Navbar
    },
    data() {
        return {
            activePage: 0,
            pages: [
                {
                    link: { text: 'Home', url: 'index.html' },
                    pageTitle: 'Home page',
                    content: 'This is the home content',
                },
                {
                    link: { text: 'About', url: 'about.html' },
                    pageTitle: 'About page',
                    content: 'This is the about content',
                },
                {
                    link: { text: 'Contact', url: 'contact.html' },
                    pageTitle: 'Contact page',
                    content: 'This is the contact content',
                }
            ]
        };
    }
}
</script>