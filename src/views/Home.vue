<template>
  <div
    class="home"
    style="height: 1200px;"
  >
    home
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <hello-world msg="Welcome to Your Vue.js App" />
    <h1>HOme</h1>
    <!-- {{ message }} -->
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue'
// import { mapState, useStore } from 'vuex'
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist'
import HelloWorld from '@/components/HelloWorld.vue'

const NameSpace = 'home'
const { useState } = createNamespacedHelpers(NameSpace)

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },

  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    console.log('to', to)
    console.log('from', from)
    next()
    console.log('after next')
  },

  setup (props, content) {
    // const { message } = useState([
    //   'message'
    // ])

    const { myMessage } = useState({
      myMessage: 'message'
    })

    // const store = useStore()

    // console.log('cool store', store)
    // console.log('useState', message)
    console.log('useState', myMessage)
    // // console.log(message.value)

    // return {
    //   message
    // }
  }

  // computed: {
  //   ...mapState(NameSpace, [
  //     'message'
  //   ])
  // }
})
</script>

<style lang="scss" scoped>
.home {
  height: 1200px;
}
</style>
