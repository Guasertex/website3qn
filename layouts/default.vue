<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="header q-header bg-header text-slate-600">
      <q-toolbar class="flex">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="">
          <NuxtLink to="/" class="heading no-underline">Cute Blog</NuxtLink>
        </q-toolbar-title>
        <MenuButtons />
        <ThemeSwitcher />
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="200"
      :breakpoint="700"
      :show-if-above="false"
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <Menu />
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>
    <q-footer elevated class="footer text-slate-600">
      <q-toolbar>
        <q-toolbar-title class="flex justify-between pt-3">
          <NuxtLink to="/feedback" class="fb-btn pr-6">
            <q-icon name="feedback" />
          </NuxtLink>
          <p class="">
            <q-icon name="copyright" class="black" />
            Copyright by
            <strong>Cute Blog</strong>
          </p>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script lang="ts" setup>
import FeedBack from "../pages/FeedBack.vue";
import MenuButtons from "../components/MenuButtons.vue";
import ThemeSwitcher from "../components/ThemeSwitcher.vue";

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss" scoped>
.header,
.footer {
  background-color: white;
}
.fb-btn {
  color: black;
}
.body--dark {
  .header,
  .footer {
    color: white;
    background-color: black;
  }
  .heading {
    color: whitesmoke;
  }
  .fb-btn {
    color: whitesmoke;
  }
}
</style>
