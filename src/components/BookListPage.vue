<template>
  <div>
    <div class="flex justify-center items-center md:h-80 min-h-full px-3"
    :class="{
    'border':screenWidth >= 768,
    'border-black':screenWidth >= 768}"
    >
      <swiper
      v-if="screenWidth >= 768"
      class="md:h-72"
      :slides-per-view="3"
      :space-between="15"
      :pagination="{ clickable: true }"
      >
        <swiper-slide class="border border-black" v-for="(item, num) in state.books" :key="num" :class="{'bg-yellow-100': item.id === id}">
          <router-link :to="`/books/${item.id}`">
            <img class="object-contain object-center max-h-52 mx-auto my-2" :src="item.image" :alt="item.name">
            <h5 class="text-center text-sm py-1">{{ item.name }}</h5>
          </router-link>
        </swiper-slide>
      </swiper>
      <div class="flex-grow" v-else>
        <div class="border border-black" v-for="(item, num) in state.books" :key="num" :class="{'bg-yellow-100': item.id === id}">
          <router-link :to="`/books/${item.id}`">
            <img class="object-contain object-center max-h-52 mx-auto my-2" :src="item.image" alt="">
            <h5 class="text-center text-sm py-1">{{ item.name }}</h5>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'
import { apiGetBooks } from '@/api/books.js'
import SwiperCore, { Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Pagination, A11y])

export default {
  name: 'BookListPage',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const state = reactive({
      books: []
    })
    const screenWidth = ref(document.body.clientWidth)
    watchEffect(() => {
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          screenWidth.value = window.screenWidth
        })()
      }
    })
    function getBooks () {
      apiGetBooks().then(res => {
        state.books = res.data
      })
    }
    getBooks()
    return {
      state,
      screenWidth
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
