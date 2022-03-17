<template>
  <div class="user">
    <h1>User</h1>
    <h2>{{ user }}</h2>
  </div>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <router-view />
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'User',
  props: {
    route: VueTypes.object.def({}),
    user: VueTypes.string.def('In Use View Id')
  },
  mounted () {
    console.log('Use mounted')
    console.log(this.route)
  }
}
</script>
