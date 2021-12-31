<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>

<style>
.blind {
  display: none;
}

.can-not-drag {
  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

.hideErrorMessageSlot .q-field__bottom {
  display: none;
}

.ell_wrap {
  max-width: 450px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

@for $i from 1 to 100 {
  .max-height-$(i)vh { max-height: $(i)vh; }
  .max-width-$(i)vw { max-width: $(i)vw; }
  .min-height-$(i)vh { min-height: $(i)vh; }
  .min-width-$(i)vw { min-width: $(i)vw; }

  .height-$(i)pct { height: $(i)%; }
  .width-$(i)pct { width: $(i)%; }
  .height-$(i)vh { height: $(i)vh; }
  .width-$(i)vw { width: $(i)vw; }
}

@for $i from 1 to 2000 {
  .height-$(i)px { height: $(i)px; }
  .width-$(i)px { width: $(i)px; }
  .line-height-$(i)px { line-height: $(i)px; }
  .max-height-$(i)px { max-height: $(i)px; }
  .max-width-$(i)px { max-width: $(i)px; }
  .min-height-$(i)px { min-height: $(i)px; }
  .min-width-$(i)px { min-width: $(i)px; }
}

@for $i from 1 to 1000 {
  .fs-$i { font-size: calc($(i)em / 100); }
}
</style>

<style lang="sass">
p
  margin: 0 !important

*::-webkit-scrollbar
  width: 6px
  height: 6px

*::-webkit-scrollbar-thumb
  background-color: rgba(120, 144, 156, 0.7)
  border-radius: 6px

*::-webkit-scrollbar-track 
  background-color: rgba(176, 190, 196, 1)
  border-radius: 6px
  box-shadow: inset 0 0 5px white

.draggable
  cursor: grab

.draggable:active
  cursor: grabbing
</style>
