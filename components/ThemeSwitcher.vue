<template>
  <div>
    <q-btn
      class="btn-switcher"
      @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
      :icon="$q.dark.isActive ? 'nightlight' : 'light_mode'"
      flat
      dense
      round
      no-caps
    />
  </div>
</template>

<style lang="scss" scoped>
.body--dark {
  color: white;
  background-color: black;
}
</style>
