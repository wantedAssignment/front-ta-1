# HayanMind Technical Assignment

## Assignment #1
### Requirement
* Implement the user's comment data list with infinite scrolling.
### Data API
* The user's dummy comment data can be called through the API below.
  * https://jsonplaceholder.typicode.com/comments
* The following parameters are supported:
  * `_page`
    * it starts at 1.
  * `_limit`
    * Please set the `_limit` parameter to 10.
* Example of the first comment page
  * https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10  
* Sample data
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
* You can use `id` as comment id, `email` as user's email and `body` as comment text
### Design
* Please look at the following design guide link and reflect the design.
* You don't have to make it into a responsive design.
* You don't have to specify a font for the text.

### Note
* Please fork this repository into your account.
<img width="410" alt="스크린샷 2021-07-13 오후 10 07 51" src="https://user-images.githubusercontent.com/6203798/125465421-8d3c9d4a-1742-4e17-beef-aedd522e5714.png">
* Please make a new branch based on `master`
* You can start to implement by modifying the `InfiniteScrollList.tsx` file.
* You can modify all other files if you need.
* You can use the third party library.
* Please use TypeScript only.

## Assignment #2

### Requirement
* Make pull request for assigment #1 on your repository.
* Please leave a self-review comment reviewing your own code to help reviewers.

### Note
* Please make a pull request assuming that the result is actually reviewed.
* Please make a pull request based on the master branch of your repository.
<img width="943" alt="스크린샷 2021-07-13 오후 10 35 35" src="https://user-images.githubusercontent.com/6203798/125465665-98bf05fc-4855-4c35-b073-97ef1e931bec.png">

