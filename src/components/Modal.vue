<template>
  <div>
    {{ error }}
    {{ errorMessage }}
    error
    <button @click="$emit('change-message',$event)">
      test
    </button>
  </div>
</template>

<script>

import { toRefs } from 'vue'

export default {
  name: 'Modal',

  props: {
    errorMessage: {
      type: String,
      default: ''
    }
  },

  setup (props) {
    const { errorMessage: error } = props
    const { errorMessage } = toRefs(props)
    console.log(errorMessage)
    console.log(props)
    console.log(props.errorMessage)
    console.log(error)

    return {
      error
    }
  }
}
</script>
