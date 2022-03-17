<template>
  <div class="profile">
    <h1>Profile</h1>
    <router-btn :path-name="'go'" />
  </div>
</template>

<script>
import RouterBtn from '../components/RouterBtn'
export default {
  name: 'Profile',
  components: {
    RouterBtn
  },
  beforeRouteEnter (to, from, next) {
    console.log('profile to', to)
    console.log('profile from', from)
    console.log('this', this)
    if (from.path === '/bar') {
      // next('/')
    }
    next()
  },
  mounted () {
    console.log('Profile mount')
  }
}
</script>
