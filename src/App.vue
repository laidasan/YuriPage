<template>
  <div
    id="nav"
  >
    <img
      :src="url"
      class="url-none"
      alt="Image"
      @click="emit('toggle',event)"
    >
    <router-link to="/">
      Home {{ $t('common.message') }}
    </router-link> |
    <router-link to="/bar">
      bar
    </router-link> |
    <router-link to="/about">
      About
    </router-link>

    <div>
      <button @click="toggle">
        Toggle
      </button>

      <test-ani
        :is-show="isShow"
      />

      <!-- <transition name="opacity">
        <div
          v-show="isShow"
          class="test"
        >
          test
        </div>
      </transition> -->
    </div>
    <modal
      :error-message="testMessage"
      @change-message="changeMessage"
    />
  </div>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <router-view />
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import TestAni from '../src/components/TestAni.vue'
import Modal from '../src/components/Modal.vue'

const createImageLoader = () => {
  const imageLoader = new Image()
  let onLoad = null
  let onError = null

  imageLoader.onload = function (event) {
    onLoad && onLoad(event)
  }

  imageLoader.onerror = function (error) {
    onError && onError(error)
  }

  const loadImage = (src) => { imageLoader.src = src }

  const useOnLoad = (onLoadCallBack) => {
    if (typeof onLoadCallBack === 'function') {
      onLoad = onLoadCallBack
    }
  }

  const useOnError = (onErrorCallback) => {
    if (typeof onErrorCallback === 'function') {
      onError = onErrorCallback
    }
  }

  return {
    loadImage,
    useOnLoad,
    useOnError
  }
}

const imageLoader = createImageLoader()

export default {

  components: {
    TestAni,
    Modal
  },

  props: {
    useName: {
      type: String,
      default: ''
    }
  },
  setup (props, context) {
    const {
      state
      // dispatch
    } = useStore()
    const url = ref(null)
    const message = computed(() => state.test)

    // const isShow = ref(false)

    // console.log(message.value)

    // dispatch('getExampleAjax')
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    imageLoader.useOnLoad(event => {
      const { currentSrc } = event.path[0]
      url.value = currentSrc
    })

    imageLoader.loadImage('https://fakeimg.pl/300/')

    onMounted(() => {
    })

    const testMessageFunction = () => {}

    // const toggle = () => {
    //   console.log('toggle')
    //   isShow.value = !isShow.value
    //   console.log(isShow.value)
    // }

    return {
      url,
      message,
      testMessageFunction
      // isShow,
      // toggle
    }
  },

  data () {
    return {
      isShow: false,
      testMessage: 'testMessage'
    }
  },
  mounted () {
    // console.log('mounted router', this.$router)
    // console.log('mounted route', this.$route)
    console.log('tset this', this)
  },
  created () {
    console.log(this)
  },
  methods: {
    toggle () {
      this.isShow = !this.isShow
    },

    changeMessage () {
      this.testMessage = 'new Message'
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

<style lang="scss" scoped>
.url-none {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;

  &:not([src]) {
    visibility: hidden;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #ddd;
    visibility: visible;
  }
}

// transition

// .opacity-enter-active,
// .opacity-leave-active {
//   transition: opacity 0.3s;
// }

// .opacity-enter-to,
// .opacity-leave-from {
//   opacity: 1;
// }

// .opacity-enter-from {
//   opacity: 0;
// }

// .opacity-leave-to {
//   opacity: 0;
// }

</style>
