<template>
  <q-page class="row items-center justify-evenly">
    <q-card bordered flat class="bg-white">
      <q-card-section class="flex justify-between items-center">
        <div>
          방
        </div>
        <div>
          <q-input
            dense
            placeholder="검색"
          >
            <template #prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    
    
  }
});
</script>
