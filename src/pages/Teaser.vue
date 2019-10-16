<template>
  <div class="wrap">
    <div class="carousel-container">
      <swiper
        :options="swiperOption"
        ref="mainSwiper"
        @someSwiperEvent="swipeCallback"
      >
        <!-- slides -->
        <swiper-slide class="main-slide slide1">
          <div class="slide-container">
            <!-- <img src="statics/images/teaser/mainBg1.png" /> -->
            <img
              src="statics/images/teaser/slide1_bg.png"
              srcset="
                statics/images/teaser/slide1_bg.png     731w,
                statics/images/teaser/slide1_bg@2x.png 1462w,
                statics/images/teaser/slide1_bg@3x.png 2193w
              "
              alt="링크드마켓 마법 폭죽"
            />

            <div class="slide-cont-left">
              <h4 class="teaser-h4">
                혜택 가득-
              </h4>
              <h4 class="teaser-h4">
                마법이 시작되는
              </h4>
              <h3 class="teaser-h3 cmain1" style="margin-top: 1rem;">
                <b>웰컴, 링크드마켓 :)</b>
              </h3>
              <button class="btn-blue" style="margin-top:2rem;" @click="goToJoin">
                무료 회원가입
              </button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="main-slide slide2">
          <div class="slide-container">
            <div class="slide-cont-left">
              <h4 class="teaser-h4">
                세상에 없던, 단 하나의 마켓
              </h4>
              <h4>
                <span class="cmain1">구매해도 판매해도 혜택</span>이 쌓이는 곳.
              </h4>
              <div class="resp-text">
                누구나 돈을 벌고 싶죠.<br />
                누구나 온라인 최저가 수준으로 쇼핑을 하고 싶죠.<br />
                그래서, 링크드마켓은 이 모든 바람이 충족되는 마켓을<br />
                만들기 위해 생각했습니다.
              </div>
              <img
                class="tag-image"
                src="statics/images/teaser/slide2_tag.png"
                srcset="
                  statics/images/teaser/slide2_tag.png     515w,
                  statics/images/teaser/slide2_tag@2x.png 1030w,
                  statics/images/teaser/slide2_tag@3x.png 1545w
                "
                alt="누구나, 쉽게, 링크공유, 현금적립, 쓩뙁!"
              />
            </div>
            <div class="slide-cont-right">
              <img
                src="statics/images/teaser/brand.gif"
                alt="구매해도 판매해도"
              />
              <button class="btn-blue" @click="goToJoin">최대 20% 적립 받기</button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="main-slide slide3">
          <div class="slide-container">
            <!-- <img style="position:absolute;right:1rem;bottom:0;width:14rem;" src="statics/images/teaser/mainBg3_1.png" /> -->
            <img
              src="statics/images/teaser/slide3_hand.png"
              srcset="
                statics/images/teaser/slide3_hand.png     376w,
                statics/images/teaser/slide3_hand@2x.png  752w,
                statics/images/teaser/slide3_hand@3x.png 1128w
              "
              alt="링크드마켓 추천"
            />

            <div class="slide-cont-left">
              <h6 class="teaser-h6" style="white-space:nowrap;">
                소소하게 용돈을 벌고 싶은,<br />
                평소 맛집과 상품을 주변 지인에게 추천하는,<br />
                최저가 쇼핑을 즐기는,<br />
                투잡을 갖고 싶은,<br />
                SNS에 사진과 글을 올리는,
              </h6>
              <h3 style="margin-top:1.2rem;">
                <b>모두, 링크드마켓</b>
              </h3>
              <button class="btn-white" style="margin-top:1.2rem;" @click="goToJoin">
                부담없이 알아보세요
              </button>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <section style="background:#f7f7f7;">
      <h2 class="teaser-h2">시작은, <b>간단</b>해요!</h2>
      <h5 class="teaser-h5" style="margin-top: 4.5rem; line-height: 1.4em;">
        무료회원가입을 시작으로 마법같은 링크를 통해 현금이 쌓인다는 사실.
      </h5>
      <h5 class="teaser-h5" style="margin-top: 4.5rem; line-height: 1.4em;">
        단, 5초만의 간단한 무료 회원가입
      </h5>
      <button class="btn-blue" style="margin-top: 1rem;" @click="goToJoin">시작이 반이죠</button>
      <h5 class="teaser-h5" style="margin-top: 4.5rem; line-height: 1.4em;">
        링크드마켓앱도 있다는 사실, 기억하세요!
      </h5>
      <button class="btn-blue" style="margin-top: 1rem; margin-bottom: 5rem;" @click="openAppDownloadPopup">
        앱 다운로드 링크 받기
      </button>
    </section>
    <section>
      <h2 class="teaser-h2">
        <p>내가 할 수 있을까?</p>
        <p><b>뭐부터 해야하지?</b></p>
      </h2>
      <h5 class="teaser-h5" style="margin-top: 4.5rem; line-height: 1.4em;">
        "친구, 특정 누군가에게<br />
        <b>내 상품링크를 공유</b>하세요."
      </h5>

      <!-- <div
        class="step-container row justify-center items-center"
        style="margin: 3rem auto; padding: 0 1rem; max-width: 60em;"
      >
        <div class="col">
          <img src="statics/images/teaser/icon_cart.png" style="width:100%;" />
          <div>
            <h6
              class="teaser-h6"
              style="white-space:nowrap; text-align: center; margin-left: -50%;"
            >
              상품선택
            </h6>
          </div>
        </div>
        <div class="col" style="font-size: 6vw; color: #ddd; font-weight: 900;">
          >
        </div>
        <div class="col">
          <img src="statics/images/teaser/icon_share.png" style="width:100%;" />
          <h6 class="teaser-h6"></h6>
        </div>
        <div class="col" style="font-size: 6vw; color: #ddd; font-weight: 900;">
          >
        </div>
        <div class="col">
          <img
            src="statics/images/teaser/icon_checkbox.png"
            style="width:100%;"
          />
        </div>
        <div class="col" style="font-size: 6vw; color: #ddd; font-weight: 900;">
          >
        </div>
        <div class="col">
          <img src="statics/images/teaser/icon_krw.png" style="width:100%;" />
        </div>
      </div> -->
      <img
        class="info"
        src="statics/images/teaser/info1_m.png"
        srcset="
          statics/images/teaser/info1_m.png     640w,
          statics/images/teaser/info1_m@2x.png 1280w,
          statics/images/teaser/info1_m@3x.png 1920w
        "
        alt="링크드마켓 공유"
      />

      <h2 class="teaser-h2">조금 더 <b>수익을 내볼까?</b></h2>
      <h5 class="teaser-h5">"<b>SNS에 내 상품링크</b>를 올려보세요."</h5>

      <img
        class="info"
        src="statics/images/teaser/info2_m.png"
        srcset="
          statics/images/teaser/info2_m.png     640w,
          statics/images/teaser/info2_m@2x.png 1280w,
          statics/images/teaser/info2_m@3x.png 1920w
        "
        alt="링크드마켓 수익"
      />
    </section>

    <section
      class="manual"
      style="background:url(../statics/images/teaser/bgMain4.png) repeat 0 0;"
    >
      <div class="container">
        <div class="manual-desc">
          <h2 class="teaser-h2 cwhite">
            <p>구매하거나 판매하면</p>
            <p><b>최대 20% 현금 수익</b></p>
          </h2>
          <h5 class="teaser-h5 cwhite">
            링크드마켓에서 마음에 드는 상품을 선택합니다.<br />
            내 상품링크를 주변에 공유하거나,<br />
            SNS에 올려보세요.<br />
            공유한 링크에서 판매해도, 내가 구매해도<br />
            최대 20%까지 현금으로 적립됩니다.
          </h5>

          <button
          class="btn-white"
          style="margin-top: 1.8rem; margin-bottom: 5rem;"
          @click="goToJoin"
          >
          공유 한번으로, 최대 20% 수익금 받기
        </button>
      </div>
      <div class="manual-board">
        <p>링크드마켓 상품 선택하기</p>
        <div class="item-list row flex justify-center q-gutter-md">
          <div v-for="product in products" :key="product.id" @click="click_product($event, product.id)" class="col-3">
            <img :src="'statics/images/teaser/' + product.fileName + (product.isActive ? '_active' : '') + '.png'" />
          </div>
          <!-- <div class="col-3"><img src="statics/images/teaser/product1.png" alt="링크드마켓 상품1" /></div>
          <div class="col-3"><img src="statics/images/teaser/product2.png" alt="링크드마켓 상품2" /></div>
          <div class="col-3"><img src="statics/images/teaser/product3.png" alt="링크드마켓 상품3" /></div> -->
        </div>

        <p style="margin-top: 25px;">수익금 받는 방법1.</p>
        <p><b>내 상품링크 공유(홍보)하고 수익금 받기</b></p>
        <div>
          <input type="text" class="link" :value="selectedPrdUrl" readonly />
          <button class="share" @click="share">공유하기</button>
        </div>

        <p style="margin-top: 25px;">수익금 받는 방법2.</p>
        <p><b>상품 구매하고 수익금 받기</b></p>
        <div>
          <input type="text" class="link" :value="selectedPrdName" readonly />
          <button class="share" @click="purchase">구매하기</button>
        </div>

        <p style="margin-top: 25px;">내가 받는 수익금</p>
        <div class="input-container">
          <label>판매가격(원)</label>
          <input type="text" class="money" :value="selectedPrdPrice" readonly />
        </div>
        <div class="input-container">
          <label>수익금(원)</label>
          <input type="text" class="money" :value="selectedPrdProfit" readonly />
        </div>

        <button style="width: 100%; margin-top: 12px;" @click="gerProfit">수익금 받기</button>
      </div>
      </div>
    </section>

    <section>
      <h2 class="teaser-h2">
        아직, 상품링크 공유는 망설여져요.<br />
        <b>다른 방법 없을까요?</b>
      </h2>
      <h5 class="teaser-h5">
        당장 수익을 내려고 무리하지 마세요.<br />
        일단, 필요한 상품을 구매해보세요.<br />
        그래도 똑같이 최대 20% 현금수익금이 쌓이니까요.
      </h5>
      <hr
        style="margin: 0 auto; margin-top: 2em !important; width: 10%; max-width: 4em;"
      />
      <h5 class="teaser-h5">
        "링크드마켓은
        <b>
          내가 할 수 있을 때,<br />
          편하게
        </b>
        하시면 돼요."
      </h5>

      <img
        class="info"
        src="statics/images/teaser/info3_m.png"
        srcset="
          statics/images/teaser/info3_m.png     640w,
          statics/images/teaser/info3_m@2x.png 1280w,
          statics/images/teaser/info3_m@3x.png 1920w
        "
        alt="링크드마켓 자가구매"
      />
    </section>

    <section
      style="padding-bottom: 0 !important; background:url(../statics/images/teaser/bgMain6.png) repeat-x center center; background-size: 2560px;"
    >
      <h2 class="teaser-h2 cwhite">
        내가 받은 <b>수익금은 어떻게 찾아가죠?</b>
      </h2>
      <h5 class="teaser-h5 cwhite">
        쌓인 수익금은 정산일에 내 계좌로 입금돼요.
      </h5>
      <hr
        style="margin: 0 auto; margin-top: 2em !important; width: 10%; max-width: 4em;"
      />
      <h5 class="teaser-h5 cwhite">
        "수익금은 <b>무한대로 마음껏 적립</b>하실 수 있고,<br />
        링크드마켓은 정산일에 맞춰<br />
        <b>바로바로 회원님의 계좌로 입금</b>해드려요."
      </h5>

      <div
        class="profit-container row justify-between q-gutter-md"
        style="margin-top:2.4em;"
      >
        <div class="col">
          <p class="profit-step-desc">
            구매, 판매로 적립된 수익금
          </p>
        </div>
        <div class="col">
          <p class="profit-step-desc">
            한 달에 4번 정산일<br />(7일 정산 주기)
          </p>
        </div>
        <div class="col">
          <p class="profit-step-desc">
            등록된 내 계좌로<br />
            <!-- '뙇' 입금 -->
            <pre style="margin: 0;">'뙇' 입금</pre>
          </p>
        </div>
      </div>
      <div class="profit-container row justify-between q-gutter-md">
        <div class="col">
          <img
            class="profit_step"
            src="statics/images/teaser/profit1_m.png"
            srcset="
              statics/images/teaser/profit1_m.png    177w,
              statics/images/teaser/profit1_m@2x.png 354w,
              statics/images/teaser/profit1_m@3x.png 531w
            "
            alt="링크드마켓 구매, 판매로 적립된 수익금"
          />
        </div>
        <div class="col">
          <img
            class="profit_step"
            src="statics/images/teaser/profit2_m.png"
            srcset="
              statics/images/teaser/profit2_m.png    182w,
              statics/images/teaser/profit2_m@2x.png 362w,
              statics/images/teaser/profit2_m@3x.png 543w
            "
            alt="한 달에 4번 정산일(7일 정산 주기)"
          />
        </div>
        <div class="col">
          <img
            class="profit_step"
            src="statics/images/teaser/profit3_m.png"
            srcset="
              statics/images/teaser/profit3_m.png    178w,
              statics/images/teaser/profit3_m@2x.png 356w,
              statics/images/teaser/profit3_m@3x.png 534w
            "
            alt="등록된 내 계좌로 뙇 입금"
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="teaser-h2">
        언제/어디서나/간편하게<br />
        링크드마켓을 하려면!
      </h2>
      <h5 class="teaser-h5">링크드마켓 앱을 다운로드 하세요.</h5>
      <button class="btn-blue" style="margin-top: 2.5rem; margin-bottom: 5rem;" @click="openAppDownloadPopup">
        최대 20% 혜택을 앱으로 받기
      </button>
    </section>

    <!-- 앱 다운로드 Dialog -->
    <q-dialog content-class="appDownloadPopup" v-model="appDownloadPopup" :position="$q.screen.width > 1200 ? 'standard' : 'top'">
      <q-card class="appDownloadCard">
        <q-card-section class="row items-center" style="position: relative;">
          <img style="margin-left: 50%; transform: translateX(-50%); margin-top: 20px;" src="statics/images/logo_simple.png" />

          <!-- 기본 close 버튼 -->
          <!-- <q-btn size="xl" icon="close" flat round dense v-close-popup style="position: absolute; right: 20px; top: 10px; color: #666;" /> -->
          <q-btn flat round dense v-close-popup style="position: absolute; right: 30px; top: 20px;">
            <img src="statics/images/teaser/icon_close.png" style="width: 24px;"/>
          </q-btn>
        </q-card-section>

        <q-card-section>
          <h4 class="teaser-h4">
            웰컴, 링크드마켓!<br />
            편하고 쉽게 앱으로 시작하세요!
          </h4>
        </q-card-section>

        <q-card-section class="appDownloadInput" style="padding: 10px 30px;">
          <p style="font-size: 13px; color: #2b90d9; ">앱 다운로드 주소 메세지로 받기</p>
          <q-input v-model="userMobile" label="휴대폰번호" placeholder="-는 제외하고 입력" style="margin-top: 10px;">
            <template v-slot:after>
              <q-btn flatl color="primary" label="받기" />
            </template>
          </q-input>
          <q-input v-model="authNo" label="인증번호" placeholder="" style="margin-top: 10px;">
            <template v-slot:after>
              <q-btn flatl color="primary" label="확인" />
            </template>
          </q-input>
          <p v-show="sendAuthSMS" style="font-size: 13px; color: #666; margin-top: 6px;">인증번호가 발송되었습니다. (남은시간 00:00)</p>
        </q-card-section>

        <q-card-section class="appDownloadInput" style="margin: 10px 0; padding: 10px 20px; padding-bottom: 40px;">
          <div class="q-gutter-sm row justify-center items-center">
            <q-checkbox v-model="agreePrivacyYn" label="개인정보 수집이용에 동의합니다." true-value="1" false-value="0" />
            <a target="_blank" href="/#/privacy" style="font-size: 14px; color: #a0a0a0; padding-top: 2px;">내용보기</a>
          </div>
          <table class="tbl-privacy">
            <colgroup>
                <col width="34%" />
                <col width="33%" />
                <col width="33%" />
            </colgroup>
            <thead>
              <tr>
                <th>개인정보 수집 항목</th>
                <th>수집 및 이용 목적</th>
                <th>보유기간</th>
              </tr>
            </thead>
            <tbody>
              <td>휴대폰 번호</td>
              <td>SMS 발송</td>
              <td>7일 후 파기</td>
            </tbody>
          </table>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="purchasePopup">
      <q-card style="min-width: 300px;">
        <q-card-section>
          <img :src="selectedPrdPurchaseImg" style="width:100%;max-width:747px;cursor:pointer;" @click="purchasePopup=false" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- 앱 다운로드 Dialog -->
    <q-dialog v-model="sharePopup">
      <q-card style="width: 100%; max-width: 992px;">
        <q-card-section class="row items-center" style="position: relative;">
          <img style="margin-left: 50%; transform: translateX(-50%); margin-top: 20px;" src="statics/images/logo_simple.png" />

          <!-- 기본 close 버튼 -->
          <q-btn flat round dense v-close-popup style="position: absolute; right: 30px; top: 20px;">
            <img src="statics/images/teaser/icon_close.png" style="width: 24px;"/>
          </q-btn>
        </q-card-section>

        <q-card-section>
          <h4 class="text-h4 tc">공유하기</h4>
        </q-card-section>
      </q-card>
    </q-dialog>
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
  name: 'Teaser',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 4000
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // Enable debugger
        debugger: true
      },
      products: [
        { id: 1, name: '[한국도자기] 홈 세트', url: 'https://linkedmarket.com/product/A', price: '99,000원', profit: '9,900원', fileName: 'product1', isActive: false },
        { id: 2, name: '[에스티로더] 6세대 갈색병', url: 'https://linkedmarket.com/product/B', price: '169,900원', profit: '8,000원', fileName: 'product2', isActive: false },
        { id: 3, name: '[랩노쉬] 그로서리 곤약면 4종', url: 'https://linkedmarket.com/product/C', price: '20,800원', profit: '3,120원', fileName: 'product3', isActive: false }
      ],
      appDownloadPopup: false,
      userMobile: '',
      authNo: '',
      sendAuthSMS: false,
      agreePrivacyYn: '0',
      purchasePopup: false,
      sharePopup: false
    }
  },
  methods: {
    swipeCallback: function () {},

    // 상품 클릭시
    click_product: function (e, prdId) {
      // console.log('clicked : ' + prdId)

      // 전체 상품을 우선 deactivate
      this.products.forEach((product, index) => {
        product.isActive = false
      })
      // 해당 id만 active
      this.products.find(product => product.id === prdId).isActive = true
    },
    goToJoin: function () {
      this.$router.push('/join')
    },
    openAppDownloadPopup: function () {
      this.appDownloadPopup = true
    },
    purchase: function () {
      if (typeof (this.products.find(product => product.isActive === true)) === 'undefined') {
        alert('상품을 먼저 선택해주세요.')
      } else {
        this.purchasePopup = true
      }
    },
    share: function () {
      if (typeof (this.products.find(product => product.isActive === true)) === 'undefined') {
        alert('상품을 먼저 선택해주세요.')
      } else {
        this.sharePopup = true
      }
    },
    gerProfit: function () {
      alert('수익금은 7일 이내에 본인 계좌로 송금됩니다.')
    }
  },
  computed: {
    selectedPrdUrl: function () {
      const selectedPrd = this.products.find(product => product.isActive === true)
      return typeof (selectedPrd) === 'undefined' ? '' : selectedPrd.url
    },
    selectedPrdName: function () {
      const selectedPrd = this.products.find(product => product.isActive === true)
      return typeof (selectedPrd) === 'undefined' ? '' : selectedPrd.name
    },
    selectedPrdPrice: function () {
      const selectedPrd = this.products.find(product => product.isActive === true)
      return typeof (selectedPrd) === 'undefined' ? '' : selectedPrd.price
    },
    selectedPrdProfit: function () {
      const selectedPrd = this.products.find(product => product.isActive === true)
      return typeof (selectedPrd) === 'undefined' ? '' : selectedPrd.profit
    },
    selectedPrdPurchaseImg: function () {
      const selectedPrd = this.products.find(product => product.isActive === true)
      return typeof (selectedPrd) === 'undefined' ? '' : ('statics/images/teaser/purchase_sample' + selectedPrd.id + '.png')
    }
  },
  created: function () {
    // console.log(this.$q.screen.width)
  }
}
</script>

<style lang="css" scoped>
section { text-align: center; padding: 2rem;font-size: 1.6rem; }

.teaser-h2 { width: 100%; margin-top: 5rem; font-size: 3rem; line-height: 3.8rem; font-weight: 500; }
.teaser-h3 { width: 100%; font-size: 2.8rem; font-weight: 500; }
.teaser-h4 { width: 100%; font-size: 2rem; }
.teaser-h5 { width: 100%; font-size: 1.6rem; margin-top: 2.5rem; line-height: 2rem; }
.teaser-h6 { width: 100%; font-size: 1.4rem; line-height: 1.8rem; }

.carousel-container { background-color: #110e38; }
.main-slide { width:100%; height:28rem; color: white; }
.slide-container { max-width: 48rem; height: 100%; position: relative;margin: 0 auto; padding:0 1.6rem; }

.swiper-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  background: #1f5995 !important;
  border: 1px solid #1f5995;
  box-sizing: border-box;
  bottom: 10px;
  margin-left: -36px;
  width: 74px;
  height: 30px;
  border-radius: 40px;
}

.carousel-container button, section button { text-align: center; background: none; min-width: 16rem; border: 1px solid #2b90d9; color: #2b90d9; font-size: 1.6rem; padding-top: 0.6rem; padding-bottom: 0.6rem; }
.carousel-container button:hover, section button:hover { cursor: pointer; }

.btn-white { color: #ffffff !important; border: 1px solid #ffffff !important; }
.btn-white:hover, .btn-white:active { background: #2b90d9 !important; color: #ffffff !important; border: 1px solid #2b90d9 !important; }
.btn-blue { color: #2b90d9; border: 1px solid #2b90d9; }
.btn-blue:hover, .btn-blue:active { background: #2b90d9; color: #ffffff; border: 1px solid #2b90d9; }

div.profit-container { max-width: 1170px; margin-left: auto; margin-right: auto; }
img.info { display: block; width: 100%; max-width: 48rem; margin: 4rem auto; }
img.profit_step { width:100%; height: 100%; max-width: 190px; }
p.profit-step-desc { color: #fff; height: 4rem; font-size: 1.2rem; margin: 0; }

div.manual-board { width: 100%; max-width: 400px; background: #315374; margin: 0 auto; padding: 22px 16px; color: #fff; text-align: left; font-size: 14px; font-weight: 600; }
div.manual-board p { margin-left: 0; }
div.manual-board .item-list { margin-top: 0px; }
div.manual-board .item-list img { width: 100%; }
div.manual-board .item-list img:hover { cursor: pointer; }
div.manual-board input { padding: 8px; background: #365a7e; color: #dfdfdf; font-size: 14px; border: 0; border-radius: 0; border-style:solid; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
div.manual-board input.link { width: 68%; }
div.manual-board input.money { width: 100%; text-align: right; }
div.manual-board button { color: #fff; border: 0; background: #282c37; margin-top: 10px; font-size: 14px; padding:8px 0; }
div.manual-board button:hover, div.manual-board button:active { background: #181b23; }
div.manual-board button.share { width: 30%; min-width: 30%; margin-left: 2%; }
/* input에 금액과 label이 같이 들어가있어서 처리 */
div.manual-board div.input-container { position: relative; margin-top: 10px; }
div.manual-board div.input-container label { color: #dfdfdf; position: absolute; left: 8px; top: 50%; transform: translateY(-50%); }

.appDownloadCard { font-size: 12px; min-width: 300px; text-align: center; background: #f6f6f6; }
.tbl-privacy { border-collapse: collapse; }
.tbl-privacy th, .tbl-privacy td { border: 1px solid #d7d7d7; padding: 4px; }
.tbl-privacy th { background: #939393; color: #fff; }

/* 768px 이하 -> 모바일 */
@media (max-width: 768px) {
  .slide1 img { position: absolute; right: 1rem; bottom: 0; width:50%; }

  .slide1 .slide-cont-left { position: absolute; left: 0; top: 1em; padding: 2rem; }
  .slide2 .slide-cont-left { position: absolute; left: 0; top: 2em; padding: 2rem; text-align: center; }
  .slide2 .resp-text { display: none; }
  .slide2 .tag-image { display: block; width: 76%; min-width: 28rem; margin: auto; margin-top: 2.2rem; }
  .slide2 .slide-cont-right { display: none; }

  .slide3 { background: #1e6dc7 url(../statics/images/teaser/mainBg3_m.png) repeat-x center bottom; }
  .slide3 .slide-cont-left { position: absolute; left: 0; top: 1rem; padding: 2rem; }
  .slide3 img { position: absolute; right: 1rem; bottom: 0; width:40%; max-width: 120px; }
}
/* 768~1200 -> 태블릿 */
@media (min-width: 769px) {
  .main-slide { min-height:340px; }
  .slide-container { max-width: 760px; }
  .slide1 img { position: absolute; right: 3rem; bottom: 0; width:40%; max-width: 380px; }

  .slide1 .slide-cont-left { position: absolute; left: 0; top: 3rem; padding: 3rem; }

  .slide2 .slide-cont-left { position: absolute; left: 0; top: 3rem; padding: 2rem; }
  .slide2 .resp-text { display: none; }
  .slide2 .tag-image { width: 76%; min-width: 28rem; max-width: 30rem; margin-top: 2.2rem; }
  .slide2 .slide-cont-right { max-width: 50%; position: absolute; right: 2em; top: 50%; transform: translateY(-50%); text-align: right; }
  .slide2 .slide-cont-right img { width: 80%; display: block; float: right; }
  .slide2 .slide-cont-right button { width: 76%; display: block; float: right; }

  .slide3 { background: #1e6dc7 url(../statics/images/teaser/mainBg3_m.png) repeat-x center bottom; }
  .slide3 .slide-cont-left { position: absolute; left: 0; top: 3rem; padding: 3rem; }
  .slide3 img { position: absolute; right: 1rem; bottom: 0; width:40%; max-width: 200px; }

  section p { display: inline-block; margin-left: 1rem; }
  section p:first-child { margin-left: 0; }
  p.profit-step-desc { font-size: 1.2rem; }

  .appDownloadCard { font-size: 12px; min-width: 596px; }
  .appDownloadInput { padding-left: 90px !important; padding-right: 90px !important; }
}
/* 1200px 이상 -> PC */
@media (min-width: 1200px) {
  .main-slide { min-height:600px; }
  .slide-container { max-width: 1170px; }
  .slide1 img { position: absolute; right: 3rem; bottom: 0; width:54%; max-width: 60%; }

  .slide1 .slide-cont-left { position: absolute; left: 0; top: 5rem; padding: 3rem; }

  .slide2 .slide-cont-left { position: absolute; left: 0; top: 5rem; padding: 2rem; }
  .slide2 .resp-text { display: block; margin-top: 20px; font-size: 1.3rem; }
  .slide2 .tag-image { width: 76%; min-width: 28rem; max-width: 30rem; margin-top: 2.2rem; }
  .slide2 .slide-cont-right { max-width: 36%; position: absolute; right: 2em; top: 50%; transform: translateY(-50%); text-align: right; }
  .slide2 .slide-cont-right img { width: 100%; display: block; float: right; }
  .slide2 .slide-cont-right button { width: 96%; display: block; float: right; }

  .slide3 { background: #1e6dc7 url(../statics/images/teaser/mainBg3.png) no-repeat center bottom; }
  .slide3 .slide-cont-left { position: absolute; left: 4rem; top: 5rem; padding: 3rem; }
  .slide3 img { position: absolute; right: 6rem; bottom: 0; width:40%; max-width: 320px; }

  p.profit-step-desc { font-size: 1.4rem; }

  .manual-desc { display: inline-block; width: 50%; }
  .manual-board { display: inline-block; width: 50%; float: left; margin-left: 10% !important; }
}
</style>
