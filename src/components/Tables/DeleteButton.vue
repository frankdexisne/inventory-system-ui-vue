<template>
  <q-btn label="Delete" @click="onClick" size="xs" flat color="negative" />
</template>

<script>
export default {
  props: ["props"],
  emits: ["onClick"],
  methods: {
    onClick() {
      console.log(this.props);
      this.$emit("onClick");
    },
  },
};
</script>
