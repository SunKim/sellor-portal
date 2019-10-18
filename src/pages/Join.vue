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
          :readonly="emailCheckPass"
          style="margin-top: 20px;"
          :dense="$q.screen.lt.md"
          value="sjmarine97@gmail.com"
        >
          <template v-slot:after>
            <q-btn
              color="grey-10"
              label="중복확인"
              @click="checkUniqEmail"
              :disabled="emailCheckPass"
            />
          </template>
        </q-input>
        <p class="test">sjmarine97@gmail.com</p>

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
          :readonly="authNoPass"
          style="margin-top: 20px;"
          :dense="$q.screen.lt.md"
        />
        <p class="test">01047866747</p>
        <div v-show="!authNoPass">
          <q-btn
            color="primary"
            label="인증번호 받기"
            :disabled="this.timerCounter <= 0 || this.timer"
            style="width: 100%; margin-top: 8px;"
            @click="getAuthNo"
          />
          <p
            class="desc"
            style="color: #999; font-size: 12px; margin-top: 6px; text-align: left;"
          >
            재전송 이후에도 인증번호가 오지 않을 경우 고객센터(1661-9012)로
            문의해 주세요.
          </p>
          <div style="display: relative;"></div>
          <q-input
            v-model="authNo"
            label="인증번호"
            placeholder="5자리"
            style="margin-top: 10px;"
            :dense="$q.screen.lt.md"
          >
            <template v-slot:append>
              <span style="color: #f43477; font-size: 16px;">
                {{ timerRemain }}
              </span>
            </template>
            <template v-slot:after>
              <q-btn color="grey-10" label="확인" @click="checkAuthNo" />
            </template>
          </q-input>

          <div style="margin-top: 10px; text-align: left;">
            <q-btn
              color="grey-10"
              label="재전송"
              size="sm"
              @click="retryAuthNo"
            />
            <span style="color: #999; font-size: 12px; margin-left: 6px;">
              인증번호가 오지 않을 경우 재전송을 눌러주세요.
            </span>
          </div>
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
          <q-btn
            color="grey-10"
            label="취 소"
            style="width: 48%;"
            @click="cancel"
          />
          <q-space />
          <q-btn
            color="primary"
            label="회원가입"
            style="width: 48%;"
            @click="join"
          />
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
      email: null,
      emailCheckPass: false,
      pwd: null,
      pwd2: null,
      nickname: null,
      userMobile: null,
      authNo: '',
      authNoServer: '', // 서버로부터 받은 인증번호
      authNoPass: false, // SMS 인증 완료여부
      surveyWill: null,
      surveyExperience: null,
      agreePrivacyYn: '0',
      agreeTermsYn: '0',
      timer: null, // setInterval 할당 object
      timerCounter: 180, // 인증번호 타이머 카운터
      timerRemain: ''
    }
  },
  methods: {
    checkUniqEmail: function () {
      // console.log(this.email)

      /* eslint-disable-next-line */
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!re.test(this.email)) {
        alert('올바른 이메일 형식이 아닙니다.')
      } else {
        // alert(this.email)
        // https://chat.linkedmarket.co.kr/api/account/email/exist

        let body = { mail: this.email }

        // const WEB_API_BASE_URL = 'http://localhost:16080'
        // 브라우저는 ajax 요청시 다른 서버(protocol, port, url)일 경우 OPTIONS method로 preflight을 보낸 후 서버에서 CORS 허용시 POST로 다시 보내는데
        // linkedmarket.com의 apache에서 user-agent에 따라 redirection을 하므로 ajax cross-origin 요청시 307 response를 받아서 에러 발생
        // 그래서 모바일일 경우 m.을 붙여서 ajax 요청
        let WEB_API_BASE_URL = 'https://www.linkedmarket.com'
        if (this.$q.platform.is.mobile) {
          WEB_API_BASE_URL = 'https://m.linkedmarket.com'
        }

        const WEB_API_URL = WEB_API_BASE_URL + '/api/checkEmailDuplication'

        this.$axios
          .post(WEB_API_URL, body)
          .then(res => {
            let data = res.data
            if (data.resCode === '0000') {
              alert('사용 가능한 이메일입니다.')
              this.emailCheckPass = true
            } else {
              alert(data.resMsg)
            }
          })
          .catch(e => {
            alert(
              '이메일 중복확인 도중 오류가 발생했습니다. 고객센터(1661-9012)로 문의 바랍니다.'
            )
          })
      }
    },
    getAuthNo: function () {
      /* eslint-disable-next-line */
      const re = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/

      if (!re.test(this.userMobile)) {
        alert('올바른 휴대폰번호 형식이 아닙니다.')
        return
      }
      // 서버에서 폰번호에 -을 안붙이면 fail이 떨어져서 -없이 입력해도 -를 넣어서 보내줌
      let body = {
        rcvrMbilno: this.userMobile.replace(
          /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
          '$1-$2-$3'
        )
      }

      let WEB_API_BASE_URL = 'https://www.linkedmarket.com'
      if (this.$q.platform.is.mobile) {
        WEB_API_BASE_URL = 'https://m.linkedmarket.com'
      }
      const WEB_API_URL = WEB_API_BASE_URL + '/api/sendAuthSMS'

      this.$axios
        .post(WEB_API_URL, body)
        .then(res => {
          let data = res.data
          if (data.resCode === '0000') {
            // 서버로부터 인증번호를 바로 받음.
            this.authNoServer = data.authNum
            console.log('this.authNoServer : ' + this.authNoServer)

            alert('인증번호가 전송되었습니다.')
            this.timerStart()
          } else {
            alert(data.resMsg)
          }
        })
        .catch(e => {
          alert(
            '인증번호 SMS 전송 도중 오류가 발생했습니다. 고객센터(1661-9012)로 문의 바랍니다.'
          )
        })
    },
    checkAuthNo: function () {
      if (this.authNo.length !== 5) {
        alert('인증번호 5자리를 입력해주세요')
        return
      }
      if (this.timerCounter <= 0) {
        alert('제한시간이 만료되었습니다. 인증번호를 재전송 받아주세요.')
        return
      }
      if (this.authNo !== this.authNoServer) {
        alert('인증번호가 맞지 않습니다. 다시 확인 후 입력해 주세요.')
        return
      }
      alert('인증번호 확인이 완료되었습니다.')
      this.authNoPass = true
    },
    cancel: function () {
      this.$router.go(-1)
    },
    join: function () {
      /* eslint-disable-next-line */
      // const re = /^[A-Za-z0-9]{8,12}$/ //숫자/문자를 포함한 8~12자리
      const re = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/ // 특수문자/숫자/문자 포함한 8~15자리

      if (!this.emailCheckPass) {
        alert('이메일 중복확인을 진행해주세요.')
        return
      }
      if (!re.test(this.pwd)) {
        alert('패스워드는 문자/숫자/특수문자를 포함한 8~15자리로 입력해주세요.')
        return
      }
      if (this.pwd !== this.pwd2) {
        alert('입력하신 비밀번호가 일치하지 않습니다.')
        return
      }
      if (this.nickname == null || this.nickname.length < 2) {
        alert('닉네임을 2자 이상 입력해주세요.')
        return
      }
      if (!this.authNoPass) {
        alert('휴대폰번호 인증을 진행해주세요')
        return
      }
      if (this.surveyWill == null) {
        alert('설문조사 1번을 진행해주세요.')
        return
      }
      if (this.surveyExperience == null) {
        alert('설문조사 2번을 진행해주세요.')
        return
      }
      if (this.agreeTermsYn === '0') {
        alert('이용약관에 동의해주세요.')
        return
      }
      if (this.agreePrivacyYn === '0') {
        alert('개인정보 수집이용에 동의해주세요.')
        return
      }

      let tmpMobile = this.userMobile.replace(
        /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
        '$1-$2-$3'
      )
      let body = {
        mail: this.email,
        name: this.nickname,
        password: this.pwd,
        passwordConfirm: this.pwd2,
        phone_first: tmpMobile.split('-')[0],
        phone_middle: tmpMobile.split('-')[1],
        phone_last: tmpMobile.split('-')[2],
        surveyItems: [
          {
            surveyId: 1,
            qstNo: 1,
            choiceNo: this.surveyWill
          },
          {
            surveyId: 1,
            qstNo: 2,
            choiceNo: this.surveyExperience
          }
        ]
      }

      let WEB_API_BASE_URL = 'https://www.linkedmarket.com'
      if (this.$q.platform.is.mobile) {
        WEB_API_BASE_URL = 'https://m.linkedmarket.com'
      }
      const WEB_API_URL = WEB_API_BASE_URL + '/api/requestJoin'

      this.$axios
        .post(WEB_API_URL, body)
        .then(res => {
          let data = res.data
          if (data.resCode === '0000') {
            alert('가입신청이 완료되었습니다.')
            this.$router.push('/join/complete/' + this.nickname)
          } else {
            alert(data.resMsg)
          }
        })
        .catch(e => {
          alert(
            '가입신청 도중 오류가 발생했습니다. 고객센터(1661-9012)로 문의 바랍니다.'
          )
        })
    },
    timerStart: function () {
      // if (this.timerCounter <= 0 || this.timer) {
      //   alert(
      //     '인증번호가 이미 전송되었습니다. 다시 받기를 원하시면 재전송 버튼을 클릭하세요.'
      //   )
      //   return
      // }

      // 1초에 한번씩 timerStart 호출
      this.timer = setInterval(() => {
        this.timerCounter-- // 1찍 감소
        this.timerRemain = this.formatTime()

        if (this.timerCounter <= 0) {
          this.timerStop()
        }
      }, 1000)
    },
    formatTime: function () {
      let minutes = Math.floor(this.timerCounter / 60)
      let seconds = this.timerCounter % 60

      return this.pad(minutes, 2) + ':' + this.pad(seconds, 2)
    },
    pad (n, width) {
      n = n + ''
      return n.length >= width
        ? n
        : new Array(width - n.length + 1).join('0') + n
    },
    timerStop () {
      clearInterval(this.timer)
    },
    // 재전송
    retryAuthNo () {
      clearInterval(this.timer)
      this.timerCounter = 180
      this.getAuthNo()
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="css" scoped>
html, body { font-size: 14px; }
/* div.bg { background: #d0d0d0; width: 100vw; min-height: calc(100vh - 0px); } */
div.bg { width: 100vw; min-height: calc(100vh - 0px); }
div.container { background: #fff; width: 100%; max-width: 460px; min-height: calc(100vh - 0px); padding: 2rem; padding-bottom: 6rem; text-align: center; }
.test { display: none; }

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
