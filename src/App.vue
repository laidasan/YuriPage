<template>
  <div id="nav">
    <router-link to="/">
      Home {{ $t('common.message') }}
    </router-link> |
    <router-link to="/about">
      About
    </router-link>
  </div>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <router-view />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup (props, context) {
    const {
      state,
      dispatch
    } = useStore()
    const message = computed(() => state.test)
    console.log(message.value)

    dispatch('getExampleAjax')
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })

    return {
      message
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
