<template>
  <div class="container mx-auto mt-5">
    <BookListPage :id="id"/>
    <BookDetailPage :id="id" />
  </div>
</template>

<script>
// @ is an alias to /src
import BookListPage from '@/components/BookListPage.vue'
import BookDetailPage from '@/components/BookDetailPage.vue'
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'

export default {
  name: 'Home',
  components: {
    BookListPage,
    BookDetailPage
  },
  setup () {
    const route = useRoute()
    const id = ref(0)
    watchEffect(() => {
      id.value = Number(route.params.id)
    })
    return {
      id
    }
  }
}
</script>
