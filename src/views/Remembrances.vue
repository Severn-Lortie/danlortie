<template>
  <div>
    <email-feed/>
  </div>
</template>

<script>
export default {
  components: {
    EmailFeed: () => import("../components/Remembrances/EmailFeed")
  }
};
</script>
