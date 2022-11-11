# Nuxt3 연구소
해당 프로젝트를 실행한다면,  
`/backend` 디렉토리의 서버를 띄우고 실행해야합니다(인프런 - 캡틴판교님의 Nuxt 강의 backend를 가져옴).  
ui library는 element plus를 기반으로 이것저것 가지고 놀아본다. 

## 변경된 것들
### HTML - Head 부분
기존 `Nuxt2`에서는 `nuxt.config.js` 파일에서 head부분을 세팅했었음.  
여기에서 favicon, meta, html lang, ... 등등의 것들을 세팅했다면 Nuxt3에서는 `useHead`라는 `composable`을 제공함.  
해당 예제에서는 `app.vue`에서 세팅하도록 함.  
> https://v3.nuxtjs.org/api/composables/use-head#usehead

### server directory
#### api routes
Next.js의 API routes와 일맥 상통하다고 보면 된다.  
client side에서 데이터를 가져오는 것이 아닌 server side에서 데이터를 가져와 화면으로 뿌려준다.

Next.js와 Nuxt.js 둘 다 똑같이 html body 태그의 script에 데이터를 보내주는 걸로 확인.  
차이점이라면 Next.js에서는 script에 id에 `__NEXT_DATA__`로 붙여서 왔는데 Nuxt.js에서는 `window.__NUXT__` 전역 객체에 담아서 준다.
```javascript
window.__NUXT__={data:{$f$PslAyef5YX:{api:"works"}},state:{},_errors:{},serverRendered:true,config:{public:{},app:{baseURL:"\u002F",buildAssetsDir:"\u002F_nuxt\u002F",cdnURL:""}}}
```

query params, body를 실어서 보내줄 수도 있는데 실어서 보내는 방식은 axios랑 비슷하다.  
queryString에서 객체를 추출하려면 `getQuery`라는 `composable`을 사용해서 추출해야 한다.  
body를 추출하려면 `readBody`라는 `composable`을 사용하면 된다. 단, `readBody`를 사용할 땐 비동기로 가져오므로 promise 처리를 해야 한다.

#### middleware
Nuxt2때는 `/middleware` 디렉토리 안에 선언했다면 이제는 `/server/middleware` 디렉토리에 만들어야 한다.

추가로 이전에는 `export default function`으로 `function`을 `export`했다면, 이제는 api routes처럼 `defineEventHandler`를 `export default` 하면 된다.  
이 의미는 Nuxt2때는 `context` 객체를 접근하여 사용했다면 이제는 `defineEventHandler`에서 제공하는 `event`에 접근해서 사용하면 된다. 

#### Catch-all Route
pages의 디렉토리 dynamic route처럼 api에서도 dynamic route설정이 가능하다고 보면 된다.

#### Matching HTTP Method
각 api routes를 특정 메서드에만 동작하도록 설정할 수 있다. get, post, delete, ... 에만 동작하도록 말이다.  
잘못된 HTTP method로 호출하면 `405 에러`를 보내준다.

### Nuxt Config
Nuxt2에서는 개발자가 순수 모든 걸 세팅했야되서 처음 생성시에 파일이 길었지만, Nuxt3에서는 기본적으로 어느정도 세팅이 되어 있는 상태에서 변경이 필요하면 변경하면 된다.  
그래서 Nuxt3 App을 처음 만들면 다음과 같이 텅 비어있다.
```typescript
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
});
```

### asyncData, fetch
Nuxt3부터는 `useFetch`, `useLazyFetch`, `useAsyncData`, `useLazyAsyncData` 총 4개의 data fetching 방식이 추가되었다.  
Nuxt2에서의 `asyncData`는 PageComponent에서만 사용 가능하고, `fetch`는 Page Component, 일반 Component 둘 다 사용하는 차이가 있었는데,  
그런 차이가 사라졌다.

Nuxt3에서 `useFetch`와 `useAsyncData`의 차이점은 좀 더 복잡한 로직을 넣을 수 있느냐 없느냐의 차이다.  
`useAsyncData`가 복잡한 로직을 넣을 수 있고 `useFetch`는 간단한 호출 용도로 쓸 수 있다고 구분 지어 놨다.

> https://v3.nuxtjs.org/getting-started/data-fetching#data-fetching

## 사라진 것들
### static 폴더
`public` 폴더로 바뀜. favicon 같은 것들은 다 `public` 폴더 안으로 넣으면 됨. 
> https://v3.nuxtjs.org/guide/directory-structure/public

### axios
사라졌다고 표현을 해도 무방할 것 같아서 여기에 넣었다. Nuxt에서 밀고 있는 것은 fetch API를 좀 더 포장한 `ohmyfetch`라는 라이브러리를 공식적으로 채택하며 쓰고 있으며 권장한다.  
기존 Nuxt2에서 사용했던 Nuxt/axios는 2021년 6월 기준으로 업데이트 되지 않으며 문서에서도 fetch를 쓰라고 권장(강요)한다.
> https://github.com/unjs/ohmyfetch  
> https://axios.nuxtjs.org/

가장 우려했던 것은 `interceptor`가 있느냐 없느냐가 나한텐 가장 큰 관심사라서 해당 기능이 있는지 살펴보았는데, 해당 기능이 있는 것을 확인했다.  
근데 사용법에 차이가 있어 기존 쓰던대로 쓸 수 있을 지는 좀 더 확인이 필요한 상태.

얘네들은 왜 계속 `fetch`로 밀고 나가는지도 잘 모르겠음.

## Vue3
### script setup, 위치
vue3에서 컴포지션 API를 사용할 경우 권장되는 문법이다.  
react에서 하듯이 순수 타입스크립트를 적으면 되는 것이라 마음에 든다. 불필요한 import문을 제거하고, 로직에만 집중이 가능하다.

이 때까지 개발을 진행할 때 `<template>, <script>, <style>` 이런 순으로 선언했는데, SFC로 구성한다면 다음의 순서를 지켜달라고 추천한다.  
`<script>, <tempalte>, <style>`
> https://v3-docs.vuejs-korea.org/api/sfc-script-setup.html  
> https://vuejs.org/style-guide/rules-recommended.html#single-file-component-top-level-element-order

### store(Pinia)
Vuex5 라고 사실상 보면 된다. 이름이 Pinia로 바뀌었다.

## Element Plus
Nuxt3에서 Element Plus를 사용하려면 사전작업이 좀 필요한데, 다음의 의존성을 추가로 설치해야 한다.
- sass
- @element-plus/icons-vue
- unplugin-vue-components
- unplugin-auto-import

이 중에서 `sass`, `unplugin-vue-components`, `unplugin-auto-import`는 개발단에서만 사용하면 되니 dev 디펜던시 목록에 넣도록 한다.
```shell
npm i element-plus @element-plus/icons-vue
npm i -D sass unplugin-auto-import unplugin-vue-components
```

> https://element-plus.org/en-US/  
> https://github.com/element-plus/element-plus-nuxt-starter

## test(vitest)
vite 번들러로 바뀌면서 Jest말고 vite사용을 권한다.  
Jest에 비해서 vitest는 vite에 특화되어 있으므로 더 빠르다고 주장하고, Jest의 기능들을 많이 가져왔기에 사용에 부담없다고 한다.  
옆동네 svelte에서도 vite을 쓰는데 vitest를 차용해서 많이 쓰는 것 같다.

한글 자료도 잘 없을 뿐더러, 괜찮은 소개 블로그가 없을까 찾다가 다음의 괜찮은 소개 블로그를 발견했다.
특히나 React에선 dom에 부착할 때 React Testing Library를 사용하여 `render` 함수를 사용하여 부착 후 Test를 진행할 수 있었는데,  
Nuxt Test Utils에서는 제공해주지 않는 것 같고, vitest에서도 제공해주지 않아 찾아보니 `@vue/test-utils`를 추가로 설치해주어야되는 것을 확인도 했다.  
일본어 자료지만 구글 번역을 돌리면 된다. 영어보단 번역이 잘 되는 느낌.
> https://zenn.dev/ytr0903/articles/8f4e3c0e529c6f

추가로 `js-dom`도 설치를 해주어야 한다.
```shell
npm i -D jsdom
```

## IDE 문제
Nuxt에서는 자동 `import`가 제공되기에 명시적으로 `import`문을 제공하기에 굳이 `import`문을 사용할 필요가 없음.  
그러나, 현재 WebStorm 2022.2버전에서는 제대로 못잡아내어 `import`문을 명시하라고 warning이 발생함.  
해당 문제는 2022.3버전에서 수정될 예정  
> https://youtrack.jetbrains.com/issue/WEB-56566/Nuxt-3-global-components-are-unresolved-whereas-they-are-exposed-in-componentsdts

## 좋은 참조 사이트
일본 블로그에 좋은 자료가 굉장히 많은 것 같다.  
Vue, Nuxt가 강세인 나라..라서?

> https://zenn.dev/azukiazusa/articles/676d88675e4e74 - Vue 3.2 setup 스크립트 설명  
> https://zenn.dev/azukiazusa/articles/nuxt3-new-features - Nuxt3 새로운 기술 설명  
> https://zenn.dev/coedo/articles/cc000738a0f069 - data fetching 설명. 특히 lazy쪽 이해에 도움되었음

# 트러블 슈팅
Element UI 컴포넌트를 테스트할 때 다음과 같은 워닝이 발생했었다.
```text
[Vue warn]: Failed to resolve component: el-button
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. 
```
테스트는 진행되는데, 워닝 뜬다는 것 자체가 거슬려서 찾아본 결과 `vitest.config.ts`에 추가 설정을 해주어야했다.  
`el-`로 시작하는 태그에 문제가 있기에 이것저것 뒤져본 결과 다음 사이트에서 힌트를 알게되어 수정했더니 워닝이 사라졌다.
> https://stackoverflow.com/questions/71601714/how-to-set-compileroptions-iscustomelement-for-vuejs-3-in-laravel-project

`vitest.config.ts`파일의 plugin 설정에 다음과 같이 추가했다.
```typescript
  plugins: [
    Vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('el-')
        }
      }
    })
  ]
```
해당 컴파일러 옵션을 추가하니 워닝도 사라지고 테스트도 정상적으로 돌아가는 것을 확인했다.
