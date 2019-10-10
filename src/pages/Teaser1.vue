<template>
  <div class="wrap">
    <div class="carousel-container">
      <swiper
        :options="swiperOption"
        ref="mainSwiper"
        @someSwiperEvent="callback"
      >
        <!-- slides -->
        <swiper-slide class="main-slide slide1">
          <div class="mainCon">
            <div class="mainConLeft">
              <div class="mainTxt">혜택 가득-<br />마법이 시작되는</div>
              <div class="mainTit mt40">웰컴, 링크드마켓 :)</div>
              <button class="btnSkyBlue">무료 회원가입</button>
              <!-- <q-btn class="btnSkyBlue">무료 회원가입</q-btn> -->
            </div>
            <div class="mainConRight"></div>
          </div>
        </swiper-slide>
        <swiper-slide class="main-slide slide2">
          <div class="mainCon">
            <div class="mainConLeft">
              <div class="mainTxt">
                세상에 없던, 단 하나의 마켓<br />
                <strong>구매해도 판매해도 혜택</strong>이 쌓이는 곳.
              </div>
              <div class="MainTxtS mt30">
                누구나 돈을 벌고 싶죠.<br />
                누구나 온라인 최저가 수준으로 쇼핑을 하고 싶죠.<br />
                그래서, 링크드마켓은 이 모든 바람이 충족되는 마켓을<br />
                만들기 위해 생각했습니다.
              </div>
              <div class="mainImg">
                <img
                  src="statics/images/teaser/mainTagImg.png"
                  alt="누구나, 쉽게, 링크공유, 현금적립, 쓩뙁!"
                />
              </div>
            </div>
            <div class="mainConRight">
              <div class="mainGif">
                <img
                  src="statics/images/teaser/brand.gif"
                  alt="구매하고 판매해도"
                />
              </div>
              <button class="btnSkyBlue">최대 20% 적립 받기</button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="main-slide slide3">
          <div class="mainCon">
            <div class="mainConLeft">
              <div class="MainTxtS">
                소소하게 용돈을 벌고 싶은 ,<br />
                평소 맛집과 상품을 주변 지인에게 추천하는 ,<br />
                최저가 쇼핑을 즐기는 ,<br />
                투잡을 갖고 싶은 ,<br />
                SNS에 사진과 글을 올리는,
              </div>
              <div class="mainTit"><span>모두,</span> 링크드마켓</div>
              <button class="btnWhite">부담없이 알아보세요</button>
            </div>
            <div class="mainConRight"></div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="dummy" style="height:2000px;"></div>
  </div>
</template>

<script>
// vue awesome swiper
// https://surmon-china.github.io/vue-awesome-swiper/
// https://github.com/surmon-china/vue-awesome-swiper
// https://swiperjs.com/api/
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Teaser1',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 400000
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // Enable debugger
        debugger: true
      }
    }
  },
  methods: {
    callback: function () {}
  }
}
</script>

<style lang="css" scoped>
.carousel-container { background-color: #110e38; }
.main-slide { min-height:400px; display: flex; color: white; }
.swiper-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 3rem;
  left: 50%;
  margin-left: -3.6rem;
  background: #1f5995 !important;
  width: 7.4rem;
  height: 3rem;
  border: 1px solid #1f5995;
  border-radius: 4rem;
  box-sizing: border-box;
}

.mainCon {
  display: block;
  width: 117rem;
  padding: 0 1rem;
  box-sizing: border-box;
  margin: 0 auto;
  height: 75.4rem;
}
.mainCon .mainTxt {
    font-size: 3.8rem;
    line-height: 4.8rem;
    color: #ffffff;
}
.mainCon .mainTxt strong{
    font-size: 4.4rem;
    color: #2b90d9;
    font-size: bold;
}
.mainCon .mainTit {
    font-size: 4.4rem;
    font-weight: bold;
    color: #2b90d9;
}
.mainCon .MainTxtS {
    font-size: 2.2rem;
    color: #ffffff;
    line-height: 3.4rem;
}

.mainConLeft { float: left; }
.mainConRight { float: right; }

.slide1 .mainConLeft { margin-top: 20rem; }
.slide1 .mainConRight {
    float: right;
    margin-top: 16rem;
    width: 73.1rem;
    height: 60rem;
    background: url(../statics/images/teaser/mainBg1.png) no-repeat 0 0;
}
.slide1 .btnSkyBlue { margin-top: 6rem; }
.mainImg {
    margin-top: 5rem;
    width: 51.1rem;
    height: 18.6rem;
}

.slide2 .mainConLeft { margin-top: 15rem; }
.slide2 .mainConRight .mainGif {
    width: 36rem;
    height: 7.5rem;
    margin-top: 29.5rem;
}
.slide2 .mainConRight .btnSkyBlue {
    width: 35.5rem;
    height: 6rem;
    line-height: 6rem;
    float: right;
}

.slide3 {
    background: #1e6dc7 url(../statics/images/teaser/mainBg3.png) no-repeat center bottom;
}
 .slide3 .mainConLeft {
    margin-top: 20rem;
}
.slide3 .mainTit {
    color: #ffffff;
    margin: 4rem 0 5rem;
}
.slide3 .btnWhite {
  width: 27.5rem;
  height: 6rem;
  line-height: 6rem;
}
.slide3 .mainConRight {
    margin-top: 15.4rem;
    background: url(../statics/images/teaser/mainBg3_1.png) no-repeat 0 0;
    width: 42.8rem;
    height: 60rem;
}
</style>
