<template>
  <form @submit.prevent="submitHandler" class="w-[400px]">
    <q-card-section>
      <q-input v-model="form.name" label="Name" />
      <q-input v-model="form.email" label="Email" />
      <q-input v-model="form.password" label="Password" />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Save" color="primary" />
      <q-btn flat label="Cancel" @click="onClose" />
    </q-card-actions>
  </form>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: false,
      default: null,
    },
    updating: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        role: "",
      },
    };
  },
  emits: ["onSave", "onClose"],
  methods: {
    submitHandler() {},
    storeHandler() {},
    updateHandler() {},
    onClose() {
      this.$emit("onClose");
    },
  },
};
</script>
