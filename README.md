# 하얀 마을 기술 과제

### 결과물 (100%)

### 요구사항

1. 인피니트 스크롤링을 활용하여 10개씩 요청하여 순차적인 구조로 보여주는 컴포넌트 개발
2. 타입스크립트 베이스
3. 브랜치 꼭 새로 발행하기

### Data API

- https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10
- page와 limit를 조작하여 해당 페이지의 데이터와 개수를 파라미터로 전송

```JSON
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
]
```

### Design

- 피그마 링크 [https://www.figma.com/file/T9P3B5qjnTqhWi1Ou5BmIL/HayanMind-FrontEnd-TA](https://www.figma.com/file/T9P3B5qjnTqhWi1Ou5BmIL/HayanMind-FrontEnd-TA)

- 디자인 프리뷰
<table align="center">
  <tr>
    <td valign="center">
      <img width="450" src="https://user-images.githubusercontent.com/6203798/125565329-c6144364-a519-4028-84bc-5786b5d2af40.png" />
    </td>
    <td valign="center" align="center" width=239>
      <img width="239" alt="스크린샷 2021-07-14 오후 2 47 16" src="https://user-images.githubusercontent.com/6203798/125576636-9dfb1b81-404d-4d6c-8794-2a782579044a.png">
      <img width="239" alt="스크린샷 2021-07-14 오후 2 47 28" src="https://user-images.githubusercontent.com/6203798/125576642-a6bc7695-6b5f-4751-b874-f8a770e55496.png">
    </td>
  </tr>
</table>

### Note

- Please fork this repository into your account.
<p align="center">
<img width="410" alt="스크린샷 2021-07-13 오후 10 07 51" src="https://user-images.githubusercontent.com/6203798/125465421-8d3c9d4a-1742-4e17-beef-aedd522e5714.png">
</p>

---

## Assignment #2

추가적인 코드 리뷰를 위해 Pull Request 보내기

### Requirement

- 코멘트 남기기
- master에다 바로 push하지 않고 github에서 pullrequest 활용하기

<img width="600" alt="스크린샷 2021-07-13 오후 10 35 35" src="https://user-images.githubusercontent.com/6203798/125465665-98bf05fc-4855-4c35-b073-97ef1e931bec.png">
