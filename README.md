# Unnotech test

## 如何執行此專案
* 將此專案下載下來後，使用編輯器打開後用終端機執行npm install將插件載入。
* 載入完成後執行npm run serve 完成後即可打開專案瀏覽
```
npm install   # 安裝相依套件
npm run serve # 建立開發環境
```

### 專案的架構、邏輯
```
|--public 靜態的資源
|--src
   |--api 與後端API交互使用相關方式配置
      |--book.js 使用的api與存取方式
   |--assets 放置靜態資源像是CSS、圖片等等
   |--components 共用的組件
   |--router vue-router相關配置
      |--index.js 導出的路由配置
   |--utils 封裝的工具函數等等
      |--request.js 封裝使用的ajax方式(這邊使用axios)
   |--views 所有的路由組件
   |--App.vue 路由組件的頂層
   |--main.js vue文件的入口
```

### 有使用到的第三方 library，以及為何使用它

* 使用到的第三方 library
  * [axios](https://www.npmjs.com/package/axios)、[vue-axios](https://www.npmjs.com/package/vue-axios) | 方便串接 API
  * [swiper](https://swiperjs.com/) | 讓畫面可以達到左右滾動的功能
  * [tailwindcss](https://tailwindcss.com/) | 使用內建許多設計好的元件加速畫面切版呈現
  * [ESLint](https://eslint.org/) | 提高程式碼品質、刪掉多餘的程式碼、統一 coding style


### 遇到的困難、問題，以及解決的方法

* 遇到的困難、問題
  * 想使用vue3做開發但對vue3的寫法不如vue2的熟悉
  * 第一次接觸tailwind css，所以不太解如何引入tailwind css到專案中
* 解決的方法
  * 多利用網路查詢資料還有多藉鑑參考使用vue3撰寫出的專案寫法
  * 官方文件重複看，觀看網路教學影片

