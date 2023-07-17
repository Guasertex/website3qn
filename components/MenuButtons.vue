<template>
  <div class="">
    <NuxtLink to="/login">
      <q-btn class="log-btn" flat label="Log in" />
    </NuxtLink>
    <NuxtLink to="/sing-in">
      <q-btn class="reg-btn" flat label="Sign in" />
    </NuxtLink>
  </div>
</template>
<style lang="scss" scoped>
.log-btn {
  color: black;
}
.reg-btn {
  color: black;
}
.body--dark {
  .log-btn {
    color: white;
  }
  .reg-btn {
    color: whitesmoke;
  }
}
</style>
