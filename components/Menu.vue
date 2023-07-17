<template>
  <q-scroll-area class="fit">
    <q-list class="dark:bg-black">
      <template class="q-pa-sm" v-for="(menuItem, index) in menuList" :key="index">
        <q-item clickable exact :to="menuItem.link" v-ripple>
          <q-item-section avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>
          <q-item-section>
            {{ menuItem.label }}
          </q-item-section>
        </q-item>
        <q-separator :key="'sep' + index" v-if="menuItem.separator" />
      </template>
    </q-list>
  </q-scroll-area>
</template>
<script lang="ts" setup>
import { Icon } from "@iconify/vue";

interface Item {
  icon: string;
  label: string;
  separator: boolean;
  link: string;
}

const menuList: Item[] = [
  {
    icon: "home",
    label: "Home",
    separator: true,
    link: "/",
  },
  {
    icon: "people",
    label: "About",
    separator: true,
    link: "/about",
  },
  {
    icon: "contact_page",
    label: "Contact us",
    separator: true,
    link: "/contact-us",
  },
  {
    icon: "article",
    label: "Blog",
    separator: true,
    link: "/blog",
  },
  {
    icon: "shopping_cart",
    label: "Merch",
    separator: true,
    link: "/merch",
  },
  {
    icon: "person",
    label: "Account",
    separator: false,
    link: "/account",
  },
];
</script>
