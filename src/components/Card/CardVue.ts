import { QCard, QCardSection, QIcon } from 'quasar';
import { defineComponent, h } from 'vue';
import { Card } from '../models';

export default defineComponent({
  name: 'CardVue',
  props: {
    cardInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    cardShape(value: 'heart'| 'spade'| 'clover'| 'diamond') {
      switch(value) {
        case 'heart':
          return 'favorite';
        case 'spade':
          return 'mdi-cards-spade';
        case 'clover':
          return 'mdi-clover';
        case 'diamond':
          return 'mdi-cards-diamond';
      }
    }
  },
  render() {
    return h(QCard,
      {
        class: 'width-66px height-88px',
        border: true
      },
      [
        h(QCardSection,
          {

          },
          [
            h('div',
              {},
              [
                this.$props.cardInfo.number
              ]
            ),
            h(QIcon,
              {
                name: this.cardShape(this.$props.cardInfo.shape),
                size: 'md',
                color: 'dark'
              }
            )
          ]
        )
      ]
    )
  }
})
