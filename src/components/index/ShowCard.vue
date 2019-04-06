<template>
  <div>
    <div class="card-header">
        <div class="header-title">{{title}}</div>
        <div class="header-change" @click="changImg">换一换</div>
    </div>
    <ul class="card-ul">
      <li v-for="(item, index) in imgUrls" :key="index" class="card-img">
          <image :src="item" class="card-img" ></image>
          <p class="card-name">{{showName[index]}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    props: ['title', 'imgUrls', 'changImg', 'showName']
  }
</script>

<style scoped>
.card-header{
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 0 50rpx;
  height: 80rpx;
  margin-top: 40rpx;
}
.header-title{
  font-weight: bold;
  position: relative;
}
.header-title:before{
  position: absolute;
  content: "";
  display:inline-block;
  width: 10rpx;
  height: 26rpx;
  background: #6faefe;
  left: -20rpx;
  top: 16rpx;
}
.header-change{
  font-size: 16px;
  color:#6faefe ;
  cursor: pointer;
}
.card-ul{
  display: flex;
  justify-content: space-around;
  flex-flow:wrap;

}
.card-img{
    margin-top: 20rpx;
    width: 220rpx;
}
.card-img image{
    width: 220rpx;
    height:300rpx;
}
.card-name{
  font-size: 16px;
  text-align: center;
}
</style>
