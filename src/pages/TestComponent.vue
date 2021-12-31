<template>
  <div class="flex items-center justify-between width-500px">
    <template v-for="(card, index) in cardList" :key="`card-${index}`">
      <CardVue
        :card-info="card"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardVue from 'components/Card';
import { Card } from 'components/models';

export default defineComponent({
  name: 'TestComponent',
  components: {
    CardVue
  },
  setup() {
    const cardList:Card[] = [
      {
        number: 'A',
        shape: 'heart'
      },
      {
        number: 'J',
        shape: 'spade'
      },
      {
        number: 'Q',
        shape: 'clover'
      },
      {
        number: 'K',
        shape: 'diamond'
      }
    ];

    return { cardList };
  },
})
</script>
