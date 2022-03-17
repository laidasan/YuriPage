<template>
  <button @click="go">
    <slot>
      {{ pathName }}
    </slot>
  </button>
</template>

<script>
import VueTypes from 'vue-types'
import { ref } from 'vue'

export default {
  name: 'RouterButton',
  props: {
    path: VueTypes.string.def('/'),
    pathName: VueTypes.string.def('')
  },
  setup (props, context) {
    const user = ref('evan')

    user.value = 'k7'

    return {
      user
    }
  },
  methods: {
    go () {
      console.log('go')
      //   this.$router.push('/')

      //   this.$router.push('/home')
      //   this.$router.push('home')

      // this.$router.push({ path: '/home' })
      // this.$router.push({ path: '/home/root' })
      // this.$router.push({ path: '/home', params: { user: 'Samura' } })
      // this.$router.push({ path: '/home', query: { user: 'Samura' } })
      // this.$router.push({ path: `/home/${this.user}` })

      // this.$router.push({ name: 'hometUser', params: { user: 'Samura', age: '30' } })
      this.$router.push(
        {
          name: 'BarUser',
          params: {
            user: ['123', '123', '12123'],
            name: {
              first: 'nameFrist',
              last: 'nameSecond'
            }
          },
          query: {
            age: 30
          }
        }
      )

      // practice test
      // this.$router.push({
      //   name: 'AboutUser',
      //   params: {
      //     user: 'samura'
      //   }
      // })

      // this.$router.push({
      //   path: 'about'
      // })
    }
  }
}
</script>
