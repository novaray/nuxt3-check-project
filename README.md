# Nuxt3 연구소

## 변경된 것들
### HTML - Head 부분
기존 `Nuxt2`에서는 `nuxt.config.js` 파일에서 head부분을 세팅했었음.  
여기에서 favicon, meta, html lang, ... 등등의 것들을 세팅했다면 Nuxt3에서는 `useHead`라는 `composable`을 제공함.  
해당 예제에서는 `app.vue`에서 세팅하도록 함.  
> https://v3.nuxtjs.org/api/composables/use-head#usehead

## 사라진 것들
### static 폴더
`public` 폴더로 바뀜. favicon 같은 것들은 다 `public` 폴더 안으로 넣으면 됨. 
> https://v3.nuxtjs.org/guide/directory-structure/public

## IDE 문제
Nuxt에서는 자동 `import`가 제공되기에 명시적으로 `import`문을 제공하기에 굳이 `import`문을 사용할 필요가 없음.  
그러나, 현재 WebStorm 2022.2버전에서는 제대로 못잡아내어 `import`문을 명시하라고 warning이 발생함.  
해당 문제는 2022.3버전에서 수정될 예정  
> https://youtrack.jetbrains.com/issue/WEB-56566/Nuxt-3-global-components-are-unresolved-whereas-they-are-exposed-in-componentsdts
