<template>
  <div class="bg">
    <div class="container">
      <div class="text-h4 text-weight-bold">링크드마켓 셀러 가입</div>
      <div class="info">
        <q-input
          type="email"
          v-model="email"
          label="이메일"
          placeholder="example@linkedmarket.co.kr"
          style="margin-top: 20px;"
          :dense="$q.screen.lt.md"
          value="sjmarine97@gmail.com"
        >
          <template v-slot:after>
            <q-btn color="grey-10" label="중복확인" @click="checkUniqEmail" />
          </template>
        </q-input>
        <p>sjmarine97@gmail.com</p>

        <q-input
          type="password"
          v-model="pwd"
          label="비밀번호"
          placeholder="비밀번호는 8자리 이상 입력해주세요."
          style="margin-top: 20px;"
          :dense="$q.screen.lt.md"
        />
        <q-input
          type="password"
          v-model="pwd2"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한 번 입력해 주세요."
          style="margin-top: 20px;"
          :dense="$q.screen.lt.md"
        />

        <q-input
          v-model="nickname"
          label="닉네임"
          placeholder="링크드마켓"
          style="margin-top: 20px;"
          :dense="$q.screen.lt.md"
        />

        <q-input
          v-model="userMobile"
          label="휴대폰번호"
          placeholder="-는 제외하고 입력"
          style="margin-top: 20px;"
          :dense="$q.screen.lt.md"
        />
        <q-btn
          color="primary"
          label="인증번호 받기"
          style="width: 100%; margin-top: 8px;"
        />
        <p
          class="desc"
          style="color: #999; font-size: 12px; margin-top: 6px; text-align: left;"
        >
          재전송 이후에도 인증번호가 오지 않을 경우 고객센터(1661-9012)로 문의해
          주세요.
        </p>

        <q-input
          v-model="authNo"
          :label="authNoLabel"
          placeholder="5자리"
          style="margin-top: 10px;"
          :dense="$q.screen.lt.md"
        >
          <template v-slot:after>
            <q-btn color="grey-10" label="확인" />
          </template>
        </q-input>

        <div style="margin-top: 10px; text-align: left;">
          <q-btn color="grey-10" label="재전송" size="sm" />
          <span style="color: #999; font-size: 12px; margin-left: 6px;"
            >인증번호가 오지 않을 경우 재전송을 눌러주세요.</span
          >
        </div>
      </div>

      <div
        class="survey mt20 tl pt20 pb10 pl10 pr10"
        style="background: #f5f5f5;"
      >
        <div style="font-size: 15px;">
          [필수] 더 나은 서비스 제공을 위해
          <span class="text-red-5">꼭! 알려주세요.</span>
        </div>

        <div
          class="survey-content"
          style="font-size: 14px; padding: 10px; padding-bottom: 0;"
        >
          <div>
            1. 링크드마켓에서 하고 싶은 일은 무엇인가요?
          </div>
          <div class="row">
            <div class="col">
              <q-radio v-model="surveyWill" val="1" label="쇼핑" />
            </div>
            <div class="col">
              <q-radio v-model="surveyWill" val="2" label="상품판매" />
            </div>
          </div>

          <div class="mt10">
            2. 온라인에서 상품을 판매해보신 적이 있나요?
          </div>
          <div>
            <div>
              <q-radio v-model="surveyExperience" val="1" label="아니오" />
            </div>
            <div style="margin-top: -14px;">
              <q-radio
                v-model="surveyExperience"
                val="2"
                label="네, 네이버 스마트스토어"
              />
            </div>
            <div style="margin-top: -14px;">
              <q-radio
                v-model="surveyExperience"
                val="3"
                label="네, SNS (인스타, 밴드, 블로그 등)"
              />
            </div>
            <div style="margin-top: -14px;">
              <q-radio
                v-model="surveyExperience"
                val="4"
                label="네, 오픈마켓 / 개인쇼핑몰"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="terms-container" style="margin-top: 10px;">
        <div class="q-gutter-xs row items-center">
          <q-checkbox
            v-model="agreeTermsYn"
            label="(필수) 이용약관"
            true-value="1"
            false-value="0"
          />
          <a
            target="_blank"
            href="/#/terms"
            style="font-size: 14px; color: #a0a0a0; padding-top: 2px;"
            >내용보기</a
          >
        </div>
        <div class="q-gutter-xs row items-center" style="margin-top: -14px;">
          <q-checkbox
            v-model="agreePrivacyYn"
            label="(필수) 개인정보 수집이용"
            true-value="1"
            false-value="0"
          />
          <a
            target="_blank"
            href="/#/privacy"
            style="font-size: 14px; color: #a0a0a0; padding-top: 2px;"
            >내용보기</a
          >
        </div>
        <div class="row" style="margin-top: 10px;">
          <q-btn color="grey-10" label="취 소" style="width: 48%;" />
          <q-space />
          <q-btn color="primary" label="회원가입" style="width: 48%;" />
        </div>
      </div>
    </div>
    <!-- container -->
  </div>
  <!-- bg -->
</template>

<script>
export default {
  name: 'Join',
  data () {
    return {
      step: 1,
      email: null,
      pwd: null,
      pwd2: null,
      nickname: null,
      userMobile: null,
      authNo: null,
      authNoLabel: '인증번호',
      surveyWill: null,
      surveyExperience: null,
      agreePrivacyYn: 0,
      agreeTermsYn: 0
    }
  },
  methods: {
    checkUniqEmail: function () {
      console.log(this.email)
      /* eslint-disable-next-line */
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!re.test(this.email)) {
        alert('올바른 이메일 형식이 아닙니다.')
      } else {
        // alert(this.email)
        // https://chat.linkedmarket.co.kr/api/account/email/exist

        let body = { mail: this.email }
        // const CHAT_API_BASE_URL = 'https://chat.linkedmarket.co.kr'
        // const CHAT_API_BASE_URL = 'http://localhost:9090'
        // const CHAT_API_URL = CHAT_API_BASE_URL + '/api/account/email/exist'

        // /api/checkEmailDuplication
        // const WEB_API_BASE_URL = 'http://localhost:16080'
        const WEB_API_BASE_URL = 'https://linkedmarket.com'
        const WEB_API_URL = WEB_API_BASE_URL + '/api/checkEmailDuplication'

        this.$axios
          .post(WEB_API_URL, body)
          .then(res => {
            // console.log(res.data)
            let data = res.data
            if (data.resCode === '0000') {
              alert('사용 가능한 이메일입니다.')
            } else {
              alert(data.resMsg)
            }
          })
          .catch(e => {
            alert('오류가 발생했습니다. 고객센터로 문의 바랍니다.')
          })
      }
    },
    getAuthNo: function () {}
  }
}
</script>

<style lang="css" scoped>
html, body { font-size: 14px; }
/* div.bg { background: #d0d0d0; width: 100vw; min-height: calc(100vh - 0px); } */
div.bg { width: 100vw; min-height: calc(100vh - 0px); }
div.container { background: #fff; width: 100%; max-width: 460px; min-height: calc(100vh - 0px); padding: 2rem; padding-bottom: 6rem; text-align: center; }

/* 768px 이하 -> 모바일 */
@media (max-width: 768px) {
}
/* 768~1200 -> 태블릿 */
@media (min-width: 769px) {
  /* 회원가입 페이지는 화면이 커져도 font-size는 모두 동일하게 */
  html, body { font-size: 14px !important; }
}
/* 1200px 이상 -> PC */
@media (min-width: 1200px) {
  /* 회원가입 페이지는 화면이 커져도 font-size는 모두 동일하게 */
  html, body { font-size: 14px !important; }
}
</style>
