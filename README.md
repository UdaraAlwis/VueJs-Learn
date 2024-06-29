# VueJs-Learn
VueJs-Learn


Vue.js Tutorial: Beginner to Front-End Developer

https://www.youtube.com/watch?v=1GNsWa_EZdw

https://github.com/tutsplus/vuejs-tutorial-beginner-to-front-end-developer/tree/main


### Loops

```
<li v-for="link in links" class="nav-item">
    <a class="nav-link"  aria-current="page" :href="#">{{ links[0] }}</a>
</li>
```

### Binding Data

```
v-bind:href="{{ link.href }}"
-- shorten
:href="link.href"
-- with string interpolation
:title="`This link goes to the ${link.text}`" 
```

### Events

```
-- instead of onclick
v-on:click="activePage = index"
-- shorten
@click="activePage = index"
-- prevent naviaation
@click.prevent="activePage = index"
```

### Binding Css Classes

```
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
```
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


Vue JS Crash Course

https://www.youtube.com/watch?v=qZXt1Aom3Cs


