<template>
  <div class="bar">
    <h1>Welcome my bar</h1>
    <!-- <h2>{{ $route.params.user }}</h2> -->
    <h2>{{ user }}</h2>
    <!-- <button @click="go">
      Go
    </button> -->
    <router-btn>Go</router-btn>
    <router-view />
  </div>
</template>

<script>
// import { go } from 'vue-router'
import RouterBtn from '../Bar/components/RouterBtn'
import VueTypes from 'vue-types'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'Bar',
  //   beforeRouteUpdate (to, from, next) {
  // console.log('beforeRouteUpdate')
  // console.log(to)
  // console.log(from)
  // next()
  //   },
  components: {
    RouterBtn
  },
  props: {
    user: VueTypes.oneOfType([String, Array]).def('userId')
  },
  setup (props, context) {
    const router = useRouter()
    const route = useRoute()
    console.log('router', router)
    console.log('route', route)

    const go = () => {
      console.log('go')
      //   go(-1)
      console.log('window history', window.history)
    }

    return {
    //   go
    }
  },
  watch: {
    $route (to, from) {
      console.log('watch $route')
      console.log(to)
      console.log(from)
    }
  },
  mounted () {
    console.log('bar mounted')
    // console.log('this.$router', this.$router)
    // console.log('this.$route', this.$route)
  },
  methods: {
    go () {
    //   this.$router.go(-1)
      this.$router.push('/')
    }
  }
}
</script>
