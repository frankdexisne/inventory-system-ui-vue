<template>
  <base-table title="Users">
    <template v-slot:top-left-component>
      <q-btn color="primary" label="Add row" @click="add" />
    </template>
    <template v-slot:top-right-component>
      <q-input borderless dense debounce="300" placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>

    <template v-slot:row-actions="props">
      <edit-button />
      <delete-button :props="props" />
    </template>
  </base-table>

  <modal :show="show" title="User Form">
    <user-form @onClose="onClose" />
  </modal>
</template>

<script>
import BaseTable from "../../../components/Tables/BaseTable.vue";
import EditButton from "../../../components/Tables/EditButton.vue";
import DeleteButton from "../../../components/Tables/DeleteButton.vue";
import UserForm from "./UserForm.vue";
import Modal from "../../../components/base/Modal.vue";

export default {
  components: {
    BaseTable,
    EditButton,
    DeleteButton,
    UserForm,
    Modal,
  },
  data() {
    return { show: false, updating: false };
  },
  methods: {
    add() {
      this.show = true;
      this.updating = false;
    },
    editRow(row) {
      // Handle edit action
      console.log(row);
    },
    deleteRow(row) {
      // Handle delete action
    },
    onClose() {
      this.show = false;
      this.updating = false;
    },
  },
};
</script>
