<template>
    <a :href="urlPhoto" :class="classAtt"
       data-position="bottom">
        <img :src="urlPhoto" :alt="photo.title" :data-position="position"/>
    </a>
</template>
<script>
  export default {
    props: ['photo', 'classSpan', 'position'],
    computed: {
      urlPhoto: function () {
        return 'https://farm' + this.photo.farm + '.staticflickr.com/' + this.photo.server + '/' + this.photo.id + '_' + this.photo.secret + '_b.jpg'
      },
      classAtt: function () {
        return 'image filtered ' + this.classSpan
      }
    }
  }
</script>