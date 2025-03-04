# VueJs-Learn
VueJs-Learn


Vue.js Tutorial: Beginner to Front-End Developer

https://www.youtube.com/watch?v=1GNsWa_EZdw

https://github.com/tutsplus/vuejs-tutorial-beginner-to-front-end-developer/tree/main


### Loops

```html
<li v-for="link in links" class="nav-item">
    <a class="nav-link"  aria-current="page" :href="#">{{ links[0] }}</a>
</li>
```

### Binding Data

```html
v-bind:href="{{ link.href }}"
-- shorten
:href="link.href"
-- with string interpolation
:title="`This link goes to the ${link.text}`" 
```

### Events

```html
-- instead of onclick
v-on:click="activePage = index"
-- shorten
@click="activePage = index"
-- prevent naviaation
@click.prevent="activePage = index"
```

### Binding Css Classes

```html
-- assigning active class
<a 
    class="nav-link" 
    :class="{active: activePage == index}"
/>

-- with conditions
<nav 
    :class="{'navbar-light bg-light': !useDarkNavbar, 'navbar-dark bg-dark': useDarkNavbar}" 
/>
```

### Computed Properties
```html
-- define it in computed section
computed: {
    navbarClasses() {
        return {
            'navbar-dark': this.useDarkNavBar,
            'bg-dark': this.useDarkNavBar,
            'navbar-light': !this.useDarkNavBar,
            'bg-light': !this.pageTitle
        }
    }
},

-- access it from navbar 
<nav 
    :class="navbarClasses" 
/>
```

### Binding Css Classes II

```html
-- with ternary conditions and multiple css
<nav 
:class="[useDarkNavBar ? 'bg-dark' : 'bg-light', 'navbar', 'navbar-expand-lg']">
```

### Functions

```html
methods: {
    changeTheme() {
        let theme = 'light';

        if (this.theme == 'light') {
            theme = 'dark';
        }

        this.theme = theme;
    }
}
```

### Components

```html
-- Register the component
app.component('page-viewer', {
    props: ['pageTitle', 'pageContent'],
    template: `
        <div class="container">
            <h1>{{ pageTitle }}</h1>
            <p>{{ pageContent }}</p>
        </div>
        `
});

-- Consume the component   
<page-viewer 
    :page-title="pages[activePage].pageTitle" 
    :page-content="pages[activePage].content">
</page-viewer>
```


### Data flow  

```html
-- Execute function from Child level
<a ...
 @click.prevent="navLinkClick(index)"></a>

-- Consume the event from Parent level 
<navbar ...
:nav-link-click="(index) => activePage = index">
</navbar>
```

### Vue CLI
```
-- Create new project
vue create vue-start-spa

-- Install bootstrap
npm install bootstrap --save

-- Import in main.js
import '../node_modules/bootstrap/dist/css/bootstrap.css';
```

### Css scoped
```html
-- Scope css to the current component only
<style scoped>
.emphasize{
    text-decoration: underline !important;
}
</style>
...
<h1 class="emphasize">{{ page.pageTitle }}</h1>
```

### Show or Render upon condition
```html
-- will be rendered if true
    <page-viewer 
        v-if="pages.length > 0"
        :page="pages[activePage]"></page-viewer>
  
-- will be rendered regardless but shown if true
    <page-viewer 
        v-show="pages.length > 0"
        :page="pages[activePage]"></page-viewer>
```

## Define descriptor for a prop
```js
--  with default fallback value
<script>
export default {
    props: {
        page : {
            type: Object,
            default(rawProps) {
                return {
                    pageTitle: '',
                    content: ''
                }
            }
        }
    }
    ...
}
```




Vue JS Crash Course

https://www.youtube.com/watch?v=qZXt1Aom3Cs


