<template>
  <div>
    <app-forum></app-forum>
  </div>
</template>

<script>
export default {
  components: {
    AppForum: () => import('../components/Submit/AppForum')
  }
}
</script>
