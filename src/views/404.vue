<template>
<div class="text-center ma-12">
  <h1 class="display-1">
      It looks looks like the page you are looking for no longer exists.
  </h1>
  <app-btn color="accent" to="/" class="mt-8">
      Take me home
  </app-btn>
</div>
</template>

<script>
export default {
    components: {
        appBtn: () => import('../components/core/AppButton')
    }
}
</script>
