<template>
  <div>
      <photo-gallery/>
  </div>
</template>

<script>
export default {
    components: {
        photoGallery: () => import('../components/Photos/PhotoGallery')
    }
}
</script>
