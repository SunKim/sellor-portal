<template>
  <div class="bg">
    <q-stepper v-model="step" vertical color="primary" animated>
      <div class="text-h4 text-weight-bold tc mb10">
        링크드마켓 셀러 가입
      </div>

      <q-step :name="1" title="기본정보 입력" icon="settings" :done="step > 1">
        <q-input
          v-model="email"
          label="이메일"
          placeholder="example@linkedmarket.co.kr"
          style="margin-top: 20px;"
          :dense="$q.screen.lt.md"
        >
          <template v-slot:after>
            <q-btn color="grey-10" label="중복확인" />
          </template>
        </q-input>

        <q-input
          type="password"
          v-model="pwd"
          label="비밀번호"
          placeholder="비밀번호는 8자리 이상 입력해주세요."
          style="margin-top: 24px;"
          :dense="$q.screen.lt.md"
        />
        <q-input
          type="password"
          v-model="pwd2"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한 번 입력해 주세요."
          style="margin-top: 4px;"
          :dense="$q.screen.lt.md"
        />

        <q-input
          v-model="nickname"
          label="닉네임"
          placeholder="링크드마켓"
          style="margin-top: 20px;"
          :dense="$q.screen.lt.md"
        />

        <q-stepper-navigation style="margin-top: 20px;">
          <q-btn @click="step = 2" color="primary" label="계속하기" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="휴대폰번호 인증"
        icon="mobile_friendly"
        :done="step > 2"
      >
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
        <p style="color: #999; font-size: 13px; margin-top: 6px;">
          재전송 이후에도 인증번호가 오지 않을 경우 고객센터로 문의해 주세요.
        </p>

        <q-input
          v-model="authNo"
          label="인증번호"
          placeholder="00000"
          style="margin-top: 20px;"
          :dense="$q.screen.lt.md"
        >
          <template v-slot:after>
            <q-btn color="grey-10" label="확인" />
          </template>
        </q-input>

        <div style="margin-top: 10px;">
          <q-btn color="grey-10" label="재전송" size="sm" />
          <span style="color: #999; font-size: 11px; margin-left: 6px;"
            >인증번호가 오지 않을 경우 재전송을 눌러주세요.</span
          >
        </div>

        <q-stepper-navigation style="margin-top: 20px;">
          <q-btn @click="step = 3" color="primary" label="계속하기" />
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="뒤로"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="약관 동의" icon="assignment">
        <div class="text-h5">
          [설문] 더 나은 서비스 제공을 위해
          <span class="text-red-5">꼭! 알려주세요.</span>
        </div>

        <div class="survey" style="padding: 10px;">
          <div class="text-h5">
            1. 링크드마켓에서 하고 싶은 일은 무엇인가요?
          </div>
          <div class="q-gutter-lg">
            <q-radio v-model="surveyWill" val="1" label="쇼핑" />
            <q-radio v-model="surveyWill" val="2" label="상품판매" />
          </div>
        </div>

        <q-stepper-navigation style="margin-top: 20px;">
          <q-btn color="primary" label="회원가입" />
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            label="뒤로"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
export default {
  name: 'Join1',
  data () {
    return {
      step: 1,
      email: null,
      pwd: null,
      pwd2: null,
      nickname: null,
      userMobile: null,
      authNo: null
    }
  }
}
</script>

<style lang="css" scoped>
html, body { font-size: 14px; }
div.bg { background: #d0d0d0; width: 100vw; min-height: calc(100vh - 0px); }
div.container { background: #fff; width: 90%; min-height: calc(100vh - 0px); padding: 2rem; padding-bottom: 6rem; text-align: center; }

/* 768px 이하 -> 모바일 */
@media (max-width: 768px) {
}
/* 768~1200 -> 태블릿 */
@media (min-width: 769px) {
}
/* 1200px 이상 -> PC */
@media (min-width: 1200px) {
}
</style>
