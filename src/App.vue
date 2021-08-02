<template>
  <div id="app">
    <!-- Header at top of page - total width -->
    <header>
      <strong>Portfolio Page </strong>
    </header>

    <!-- Sidebar 1fr -->
    <aside>
      <nav id="nav">
        <ul>
          <li>
            <router-link v-bind:to="{name: 'Home'}">Home</router-link> 
          </li>
          <li>
            <router-link v-bind:to="{name: 'AboutMe'}">About Me</router-link>
          </li>
          <li>
            <router-link v-bind:to="{name: 'Gallery'}">Travel Gallery</router-link>
          </li>
          <li>
            <router-link v-bind:to="{name: 'AboutVue'}">Vue Resources</router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content (Active Page) 4fr+ -->
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">



@import "./styles/colors.scss";

// Import the bootstrap styles. If you want to override Bootstrap colors, it needs to happen above this line
//@import "../node_modules/bootstrap/scss/bootstrap";


html {
  background-color: $background;
  color: $light;
  margin: 0;
  padding: 0;
}
//override default body & html padding & margin to eliminate scrollbar
body{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dark;
 
  display: grid;
  grid-template-areas: "head head"
  "sidebar main";
  grid-template-columns: 1fr 5fr;
  grid-template-rows: auto 1fr;

  
  height: 100vh;
  width: 100vw;

}

#app > header {
  grid-area: head;
  background-color: $accentDark;
  height: 2.5rem;
  color: $light;
  font-size: 200%;
  padding: 0.5rem 0;
}

#app > aside {
  grid-area: sidebar;
  background-color: $dark;
  color: $light;
 
}

#app > main {
  grid-area: main;
}


#nav {

  a {
    text-align: left;
    font-weight: bold;
    color: $light;

    &.router-link-exact-active {
      color: $attention;
    }
  }

  a:hover {
    color: $background;
  }

  li {
    text-align: left;
    list-style: none;
    margin-bottom: 0.5rem;
  }

}

@media only screen and (max-width: 600px) {
  #app {
     grid-template-areas: "head"
  "sidebar" "main";
  }

#app > header {
  grid-area: head;
  background-color: $accentDark;
  height: 2.5rem;
  color: $light;
  font-size: 150%;
  padding: 0.5rem 0;
  width: 100vw;
}

#app > aside {
  grid-area: sidebar;
  background-color: $dark;
  color: $light;
  width: 100vw; 
}

#app > main {
  grid-area: main;
  width: 100vw;
}

}

</style>
