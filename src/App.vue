<template>
  <div id="app">
    <section
      v-for="router in [
        { to: '/', name: 'Home' },
        { to: '/Dashboard/Index', name: 'Dashboard-index' },
        { to: '/Dashboard/Github', name: 'Dashboard-github' }
      ]"
      :key="router.to">
      <router-link
        :to="router.to">
        - {{router.name}}
      </router-link>
    </section>
    <router-view/>
  </div>
</template>
