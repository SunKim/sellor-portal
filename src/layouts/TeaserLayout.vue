<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-primary">
      <q-toolbar>
        <div class="container flex">
          <a href="/">
            <img
              src="~assets/logo.png"
              alt="링크드마켓"
              style="width:140px;padding-top:10px;"
            />
          </a>
          <q-space></q-space>
          <q-btn flat color="blue-grey-10 text-weight-medium" label="로그인" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer>
      <q-toolbar style="padding: 1.6em 0;">
        <div class="container" style="padding: 0;">
          <img
            class="logo-black"
            src="statics/images/teaser/logo_black_vertical.png"
            srcset="
              statics/images/teaser/logo_black_vertical.png    170w,
              statics/images/teaser/logo_black_vertical@2x.png 340w,
              statics/images/teaser/logo_black_vertical@3x.png 510w
            "
            alt="등록된 내 계좌로 뙇 입금"
          />
          <div class="footer-cont">
            <ul class="ext-link">
              <li class="blog">
                <a
                  href="https://blog.naver.com/linkedmarket"
                  target="_blank"
                  style="background: url(../statics/images/teaser/icon_blog.png) no-repeat 0 0;"
                >
                  링크드마켓 블로그
                </a>
              </li>
              <li class="facebook">
                <a
                  href="https://blog.naver.com/linkedmarket"
                  target="_blank"
                  style="background: url(../statics/images/teaser/icon_facebook.png) no-repeat 0 0;"
                >
                  링크드마켓 페이스북
                </a>
              </li>
            </ul>
            <!-- <hr style="border-top: 1px solid #333 !important;" /> -->
            <hr
              style="background-color: #333; height: 1px; border: 0; margin: 2em 0;"
            />
            <ul class="int-link">
              <li>공지사항</li>
              <li>자주묻는 질문</li>
              <li>이용약관</li>
              <li>개인정보 처리방침</li>
              <li>앱 다운로드 페이지</li>
            </ul>

            <div class="comp-addr">
              <p>서울특별시 금천구 가산디지털1로 168 201호</p>
              <p>T. 1661-9012 / F.02-2026-3201</p>
              <p>EMAIL : cs@linkedmarket.co.kr</p>
            </div>

            <div class="copyright">
              <p>
                본 컨텐츠의 저작권은 저작권자에 있으며, 이를 무단으로 이용하는
                경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.
              </p>
              <p>Copyright (C) 2019 TRIPATH. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </q-toolbar>
    </footer>
    <!-- <q-footer reveal class="bg-grey-10 text-white">
      <q-toolbar>
        <div class="container">
          여기에 footer 작성
        </div>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>

<script>
export default {
  name: 'TeaserLayout'
}
</script>

<style lang="css" scoped>
footer { text-align: center;background: #111; color: #fff; }
li { display: inline-block; }
p { margin: 0; }

ul.ext-link { display: block; }
ul.ext-link li { margin-left: 1.4em; }
ul.ext-link li:first-child { margin-left: 0; }
ul.ext-link li a { overflow: hidden; text-indent: -9999px; display: inline-block; width: 50px; height: 50px; }

ul.int-link { display: block; padding:0 1em; line-height: 2.6em; }
ul.int-link li { font-size: 1.4rem; }
ul.int-link li::after { content: " | "; display: inline-block; width: 2rem; text-align: center; }
ul.int-link li:last-child::after { content: ""; }

img.logo-black { width: 170px; display: none; }
.comp-addr { font-size: 1.2rem; padding: 0 1em; }
.copyright { font-size: 1.2rem; margin-top: 1em; padding: 1em; }

/* 768px 이하 -> 모바일 */
@media (max-width: 768px) {
}
/* 768~1200 -> 태블릿 */
@media (min-width: 769px) {
  ul.int-link li { font-size: 1.2rem; }
}
/* 1200px 이상 -> PC */
@media (min-width: 1200px) {
  footer hr { display: none; }
  footer .container { text-align: left; }
  footer .container > div { display: inline-block; width: 900px; }
  img.logo-black { display: inline-block; float: left; margin-top: 32px; margin-right: 30px; }
  ul.ext-link { display: inline-block; float: right; }
  ul.int-link { display: inline-block; padding:0 1em; line-height: 2.6em; }

  ul.int-link li { font-size: 0.9rem; }
  .comp-addr { font-size: 0.8rem; }
  .comp-addr p { display: inline-block; margin-right: 40px; }
  .copyright { font-size: 0.8rem; }
}
</style>
