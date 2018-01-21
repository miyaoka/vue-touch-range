<template>
  <input
    type="range"
    :step="step"
    :min="min"
    :max="max"
    :disabled="disabled"
    :value="value"
    @input="emit($event.target.value)"
    @touchmove="touchmove"
    @touchstart="touchmove"
  >
</template>

<script>
export default {
  name: 'TouchSlider',
  props: {
    value: { type: Number, default: 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 1 },
    step: { type: [Number, String], default: 'any' },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    range() {
      return this.max - this.min
    }
  },
  methods: {
    emit(val) {
      this.$emit('input', Number(val))
    },
    touchmove(e) {
      e.preventDefault()
      const cw = e.target.clientWidth
      const rate = Math.max(0, Math.min(cw, e.touches[0].pageX - e.target.offsetLeft)) / cw
      console.log(e.target.offsetLeft, e.touches[0].pageX, e.target.offsetLeft + cw, rate)
      this.emit(rate * this.range + this.min)
    }
  }
}
</script>
