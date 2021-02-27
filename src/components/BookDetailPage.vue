<template>
  <div class="my-5 border mx-3 md:mx-0 py-4 border-black" v-if="id">
    <div class="flex justify-around items-center px-2 md:px-0">
      <div>
        <div>
          <label class="mr-1" for="count">數量</label>
          <button @click="removeCount(state.bookDetail.count)" class="border bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-2 mr-1">-</button>
          <input @change="checkNumber(state.bookDetail.count)" name="count" id="count" class="text-center w-2/5 md:w-auto border bg-gray-200 hover:bg-gray-300 focus:bg-gray-300" :class="{'border-red-600': state.bookDetail.count < 0 }" type="text" v-model.number="state.bookDetail.count">
          <button @click="state.bookDetail.count+=10" class="border bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-2 ml-1">+</button>
        </div>
        <div class="mt-2">
          <label class="mr-1" for="price">價格</label>
          <button @click="removePrice(state.bookDetail.price)" class="border bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-2 mr-1">-</button>
          <input @change="checkNumber(state.bookDetail.price)"  name="price" id="price" class="text-center w-2/5 md:w-auto border bg-gray-200 hover:bg-gray-300 focus:bg-gray-300" :class="{'border-red-600': state.bookDetail.price < 0 }" type="text" v-model.number="state.bookDetail.price">
          <button @click="state.bookDetail.price+=50" class="border bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-2 ml-1">+</button>
        </div>
      </div>
      <button class="w-1/4 md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="pathBookDetail">確認修改</button>
    </div>
  </div>
</template>

<script>
import { reactive, watchEffect } from 'vue'
import { apiGetBook, apiGetBookDetail, apiPathBookDetail } from '@/api/books.js'

export default {
  name: 'BookListPage',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    const state = reactive({
      book: {},
      bookDetail: {
        count: '',
        id: '',
        price: ''
      }
    })
    watchEffect(() => {
      apiGetBookDetail(props.id).then(res => {
        state.bookDetail = res.data
      })
      apiGetBook(props.id).then(res => {
        state.book = res.data
      })
    })
    function pathBookDetail () {
      if (state.bookDetail.count < 0 || state.bookDetail.price < 0) {
        alert('數量或是價格有誤')
      } else {
        apiPathBookDetail(state.bookDetail).then(() => {
          alert(`${state.book.name} 修改成功！！`)
          apiGetBookDetail(props.id)
        })
      }
    }
    function removeCount (count) {
      if (count <= 0) {
        alert('數量不得小於0')
      } else {
        state.bookDetail.count -= 10
      }
    }
    function removePrice (price) {
      if (price <= 0) {
        alert('價格不得小於0')
      } else {
        state.bookDetail.price -= 50
      }
    }
    function checkNumber (num) {
      if (num < 0) {
        alert('數量不得小於0')
      }
    }
    return {
      state,
      pathBookDetail,
      removeCount,
      removePrice,
      checkNumber
    }
  }
}
</script>
