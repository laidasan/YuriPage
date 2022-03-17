<template>
  <!-- css transition -->

  <transition name="opacity">
    <div
      v-show="isShow"
      class="test"
    >
      <h1>
        tests
      </h1>
    </div>
  </transition>

<!-- css animation  -->
<!-- <transition name="scale">
  <div v-show="isShow" class="test">
      <h1>tests</h1>
  </div>
</transition> -->

<!--override css  -->
<!-- <transition
  name="opacity"
  enter-active-class="scale-enter-active"
  leave-active-class="scale-leave-active"
>
  <div v-show="isShow" class="test">
      <h1>tests</h1>
  </div>
</transition> -->

<!-- js livecicyle -->
<!-- v-bind:css="fasle"  用來跳過 css 的檢測 , 可以避免 css 的影響 -->
<!-- 這裡指的 css 是指 transition 自己本身提供的  'name-enter' etc... -->
<!-- <transition
  :css="false"
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @enter-cancelled="enterCancelled"
  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave"
  @leave-cancelled="leaveCancelled"
>
  <div v-show="isShow" class="test">
      <h1>tests</h1>
  </div>
</transition> -->
</template>

<script>

const ANIMATION_NAME = {
  opacity: 'opacity',
  scale: 'scale'
}

export default {
  name: 'TestAni',

  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }

  //   methods: {
  //     beforeEnter (el) {
  //       console.log('beforeEnter')
  //       // el.classList.add('opacity-enter')
  //       // el.classList.add('opacity-enter-active')
  //     },

  //     enter (el, done) {
  //       console.log('enter')

  //       console.log(el)
  //       console.log(done)
  //       // el.classList.add('opacity-enter-to')
  //       done()
  //     },

  //     afterEnter (el) {
  //       console.log('afterEnter')
  //       // el.classList.remove('opacity-enter')
  //       // el.classList.remove('opacity-enter-active')
  //       // el.classList.remove('opacity-enter-to')
  //     },

  //     enterCancelled (el) {
  //       console.log('enterCancelled')
  //     },

  //     beforeLeave (el) {
  //       console.log('beforeLeave')
  //     },

  //     leave (el, done) {
  //       console.log('leave')
  //       done()
  //     },

  //     afterLeave (el) {
  //       console.log('afterLeave')
  //     },

//     leaveCancelled (el) {
//       console.log('leaveCancelled')
//     }
//   }
}
</script>

<style lang="scss" scoped>
.test {
  text-align: center;
}

// transition
.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 0.3s, transform 0.5s;
  // transition: transform 0.5s;
}

.opacity-enter-to,
.opacity-leave-from {
  // transform: translateX(30px);
  opacity: 1;
}

.opacity-enter-from {
  // transform: translateX(0);
  opacity: 0;
}

.opacity-leave-to {
  // transform: translateX(0);
  opacity: 0;
}

//animation
// .scale-enter-active {
//   animation-name: scale;
//   animation-duration: 0.5s;
//   transition: opacity 0.5s;
// }

// .scale-leave-active {
//   animation-name: scale;
//   animation-duration: 0.5s;
//   animation-direction: reverse;
//   transition: opacity 0.5s;
// }

// @keyframes scale {
//   0% {
//     transform: scale(0);
//   }

//   50% {
//     transform: scale(1.5);
//   }

//   100% {
//     transform: scale(1);
//   }
// }

</style>
