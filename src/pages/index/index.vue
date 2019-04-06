<template>
  <div>
      <swiper v-if="imgUrls.length > 0" autoplay="ture"  class="banner-img">
      <block v-for="(item, index) in imgUrls" :key="index" >
        <swiper-item >
          <image :src="item"  class="banner-img"></image>
        </swiper-item>
      </block>
    </swiper>
    <ShowCard  title="猜你喜欢" :imgUrls="showUrls" :changImg="changImg" :showName="showName"></ShowCard>
  </div>
</template>

<script>

import ShowCard from '@/components/index/ShowCard'

export default {
  components: {
    ShowCard
  },

  data () {
    return {
      imgUrls: [
        'https://rs.sfacg.com/web/m/images/homePush/2019/04/47e25400-07b4-43f2-b82b-159836769b9f.jpg',
        'https://rs.sfacg.com/web/m/images/homePush/2019/03/02238dd4-f610-4937-b45d-7e90c88da9fc.jpg',
        'https://rs.sfacg.com/web/m/images/homePush/2019/03/7276b369-b58e-4653-bb0d-9a0f58e0cf46.jpg',
        'https://rs.sfacg.com/web/m/images/homePush/2019/03/b3ee35af-ccbe-4dbc-bedd-3ada46b8dda6.jpg',
        'https://rs.sfacg.com/web/m/images/homePush/2019/03/fee6210d-5d36-4163-84d6-984d350a4eb2.jpg',
        'https://rs.sfacg.com/web/m/images/homePush/2019/03/fee6210d-5d36-4163-84d6-984d350a4eb2.jpg'
      ],
      showUrls: [
        'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/06/7f999278-0ce3-46ea-8b34-8ebbcbb075ac.jpg',
        'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2019/02/4dfd20b8-907a-424a-a255-481a6e9ed5a0.jpg',
        'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2019/01/d15e7839-9faf-4292-9879-1cbaa552778b.jpg',
        'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2017/01/58dfbe8c-2beb-4597-9454-ab91916688b5.jpg',
        'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2019/02/29bd3852-d58c-45b1-9468-325f7a4ef0e1.jpg',
        'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2019/03/175294e1-dfcf-40cc-a4b1-126731e01153.jpg'
      ],
      showName: [
        '我才不当人渣娶她们为妻呢丨真香',
        '诸天之最强BOSS',
        '复苏崛起',
        '寻唐',
        '病娇支配下支离破碎的生活',
        '拯救世界后总是能捡到女孩子'
      ]
    }
  },
  methods: {
    changImg () {
      console.log(1)
    }
  }
}
</script>

<style>
.banner-img {
  width: 750rpx;
  height:300rpx;
}

</style>
