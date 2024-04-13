<template>
  <q-dialog :model-value="show" @update:model-value="updateShow">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>
      <q-card-section style="margin-top: -40px">
        <slot />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateShow(value) {
      this.$emit("update:show", value);
    },
  },
};
</script>
