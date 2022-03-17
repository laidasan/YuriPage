<template>
  <div class="game">
    <h1>Game</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Game',
  mounted () {
    console.log('Game mounted')
  }
}
</script>
