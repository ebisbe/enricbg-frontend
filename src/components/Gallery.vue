<template>
  <div 
    v-if="photos.length" 
    class="gallery">
    <div 
      class="modal" 
      tabIndex="-1"><div class="inner">
        <img 
          src="" 
          alt="Modal image">
      </div>
    </div>
    <div class="group span-3">
      <photo-gallery 
        :photo="photos[0]" 
        position="bottom" 
        class-span="span-3"/>
      <photo-gallery 
        :photo="photos[1]" 
        position="center" 
        class-span="span-1-5"/>
      <photo-gallery 
        :photo="photos[2]" 
        position="bottom" 
        class-span="span-1-5"/>
    </div>
    <photo-gallery 
      :photo="photos[3]" 
      position="top" 
      class-span="span-2-5"/>
    <div class="group span-4-5">
      <photo-gallery 
        :photo="photos[4]" 
        position="top" 
        class-span="span-3"/>
      <photo-gallery 
        :photo="photos[5]" 
        position="center" 
        class-span="span-1-5"/>
      <photo-gallery 
        :photo="photos[6]" 
        position="bottom" 
        class-span="span-1-5"/>
      <photo-gallery 
        :photo="photos[7]" 
        position="top" 
        class-span="span-3"/>
    </div>
    <photo-gallery 
      :photo="photos[8]" 
      position="right" 
      class-span="span-2-5"/>
  </div>
</template>
<script>
import PhotoGallery from './PhotoGallery.vue'

export default {
  components: { PhotoGallery },
  data() {
    return {
      photos: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.axios.get('photos').then(({ data }) => {
        this.photos = data
      })
    }
  }
}
</script>