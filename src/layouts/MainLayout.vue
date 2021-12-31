<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-secondary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar style="border: 2px solid #fff">
            <q-icon name="view_carousel" size="sm" class="absolute-center"></q-icon>
          </q-avatar>
          Tichu
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/guide" label="Guide" />
        <q-route-tab to="/test" label="Test" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    
  },

  setup () {
    return {

    }
  }
})
</script>
