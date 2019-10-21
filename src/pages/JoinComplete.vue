<template>
  <div class="bg">
    <div class="container">
      <img class="logo" src="statics/images/logo_vertical.png" />
      <div class="text-h4 text-weight-bold mt20">링크드마켓 셀러 가입 완료</div>
      <div class="text-h5 text-weight-bold mt20">
        <span class="text-primary">{{ params.nickname }}</span
        >님 구글플레이스토어, 앱스토어를 통해
        <b>앱을 다운로드하신 후 이용</b>
        해주세요.
      </div>
      <img class="howto mt40" src="statics/images/teaser/howto_use.png" />
      <q-banner class="text-grey-9 mt20" style="background: #eee;">
        <div class="text-h4 text-weight-bold text-pink-5 pt10">
          공지사항 및 서비스 이용 안내
        </div>
        <div class="row items-center mt20">
          <div style="width: 40px;">
            <img src="statics/images/teaser/icon_naver_blog.png" />
          </div>
          <div
            class="text-h6 tl text-weight-bold"
            style="width: calc(100% - 40px); padding: 10px; word-break: break-all;"
          >
            <span>블로그</span>
            :
            <a
              target="_blank"
              class="q-link text-grey-9"
              href="https://blog.naver.com/linkedmarket/221476335741"
            >
              https://blog.naver.com/linkedmarket/221476335741
            </a>
          </div>
        </div>
        <!-- <div class="mt20">
          <div>
            <img src="statics/images/teaser/icon_naver_blog.png" />
          </div>
          <div
            class="text-h6 tc text-weight-bold"
            style="padding: 0 10px; word-break: break-all;"
          >
            <a
              target="_blank"
              class="q-link text-grey-9"
              href="https://blog.naver.com/linkedmarket/221476335741"
            >
              링크드마켓 블로그 바로가기
            </a>
          </div>
        </div> -->
      </q-banner>

      <div class="mt20 text-h5">
        링크드마켓에서는
        <b>
          <span class="text-primary">{{ params.nickname }}</span>
          님의 셀러활동을 위한 다양한 정보를 제공
        </b>
        하고 있습니다.<br />
        링크드마켓에서 <b>기분좋은 혜택</b>을 누리세요!
      </div>

      <q-btn
        class="mt30 mb40"
        :size="$q.screen.width > 1200 ? 'lg' : 'md'"
        color="primary"
        label="링크드마켓 홈페이지"
        style="width: 100%;"
        @click="goToMain"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'JoinComplete',
  // Options / Data
  // data () { return {} },
  // props: [],
  // propsData: {},
  computed: {
    params: function () {
      return this.$route.params
    }
  },
  methods: {
    goToMain () {
      this.$router.push('/')
    }
  },
  // watch: {},
  // Options / DOM
  // el () {},
  // template: '',
  // render () {},
  // Options / Lifecycle Hooks
  // beforeCreate () {},
  // created () {},
  // beforeMount () {},
  mounted () {
    // console.log(this.params)
  }
  // beforeUpdate () {},
  // updated () {},
  // activated () {},
  // deactivated () {},
  // beforeDestroy () {},
  // destroyed () {},
  // Options / Assets
  // directives: {},
  // filters: {},
  // components: {},
  // Options / Misc
  // parent: null,
  // mixins: [],
  // name: '',
  // extends: {},
  // delimiters: [ '{{', '}}' ],
  // functional: false
}
</script>

<style lang="css" scoped>
html, body { font-size: 14px; }
div.bg { width: 100vw; min-height: calc(100vh - 0px); }
div.container { background: #fff; width: 100%; max-width: 460px; min-height: calc(100vh - 0px); padding: 2rem; padding-bottom: 6rem; text-align: center; }

img.logo { max-width: 30vw; }
img.howto { width: 80%; }

/* 768px 이하 -> 모바일 */
@media (max-width: 768px) {
}
/* 768~1200 -> 태블릿 */
@media (min-width: 769px) {
  /* 회원가입 페이지는 화면이 커져도 font-size는 모두 동일하게 */
  html, body { font-size: 14px !important; }
  img.howto { width: 100%; }
}
/* 1200px 이상 -> PC */
@media (min-width: 1200px) {
  /* 회원가입 페이지는 화면이 커져도 font-size는 모두 동일하게 */
  html, body { font-size: 14px !important; }
  div.container { max-width: 600px; }
}
</style>
