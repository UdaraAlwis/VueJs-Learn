import { createApp } from "vue";

createApp({{
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
    },
}}).mount('#app');