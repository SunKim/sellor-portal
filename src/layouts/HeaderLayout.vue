<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-primary">
      <q-toolbar>
        <div class="container flex">
          <a href="/">
            <img
              src="~assets/logo.png"
              alt="링크드마켓"
              style="width:140px;padding-top:10px;"
            />
          </a>
          <q-space></q-space>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'HeaderLayout',
  data () {
    return {}
  }
}
</script>
