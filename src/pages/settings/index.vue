<template>
  <q-tabs align="left" inline-label>
    <q-route-tab icon="person" label="Users" to="/settings/users" />
    <q-route-tab icon="manage_accounts" label="Roles" to="/settings/roles" />
  </q-tabs>
  <router-view />
</template>
