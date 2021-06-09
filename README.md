# Coinone-Server
🦾튼튼 서버🦾
### request body

## add-coin

`path`  : /api/add-coin/
[POST]

```json
{
    "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
    "coinEnglishTitle": "KLAY",
    "coinKoreanTitle": "클레이튼",
    "coinCurrentPrice": "1592",
    "riseOrDescent": "+",
    "degree": "66.8",
    "percentage": "3.64",
    "coinTotalPrice": "8957881877",
    "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png"
}
```

### response body

```json
{
    "_id": "60b742b0655d8e596cf963db",
    "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
    "coinEnglishTitle": "KLAY",
    "coinKoreanTitle": "클레이튼",
    "coinCurrentPrice": "1592",
    "riseOrDescent": "+",
    "degree": "66.8",
    "percentage": "3.64",
    "coinTotalPrice": "8957881877",
    "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png",
    "__v": 0
}
```

## add-user

`path` : /api/add-user/:user_id

### request body

[POST]

```json
{
    "coinList": [
        {
            "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
            "coinEnglishTitle": "BNA",
            "coinKoreanTitle": "바나나톡",
            "coinCurrentPrice": "60.5",
            "riseOrDescent": "+",
            "degree": "66.8",
            "percentage": "0.2",
            "coinTotalPrice": "26006519283",
            "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png"
        },
        {
            "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
            "coinEnglishTitle": "KLAY",
            "coinKoreanTitle": "클레이튼",
            "coinCurrentPrice": "1592",
            "riseOrDescent": "+",
            "degree": "66.8",
            "percentage": "3.64",
            "coinTotalPrice": "8957881877",
            "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png"
        },
        {
            "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
            "coinEnglishTitle": "ETH",
            "coinKoreanTitle": "이더리움",
            "coinCurrentPrice": "3124000",
            "riseOrDescent": "+",
            "degree": "22000",
            "percentage": "0.71",
            "coinTotalPrice": "50203627033",
            "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png"
        }
    ]
}
```

### response body

```json
{
    "_id": "60b74105dfb2cc51ac007d93",
    "id": "2",
    "coin": [
        {
            "_id": "60b74105dfb2cc51ac007d94",
            "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
            "coinEnglishTitle": "BNA",
            "coinKoreanTitle": "바나나톡",
            "coinCurrentPrice": "60.5",
            "riseOrDescent": "+",
            "degree": "66.8",
            "percentage": "0.2",
            "coinTotalPrice": "26006519283",
            "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png"
        },
        {
            "_id": "60b74105dfb2cc51ac007d95",
            "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
            "coinEnglishTitle": "KLAY",
            "coinKoreanTitle": "클레이튼",
            "coinCurrentPrice": "1592",
            "riseOrDescent": "+",
            "degree": "66.8",
            "percentage": "3.64",
            "coinTotalPrice": "8957881877",
            "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png"
        },
        {
            "_id": "60b74105dfb2cc51ac007d96",
            "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
            "coinEnglishTitle": "ETH",
            "coinKoreanTitle": "이더리움",
            "coinCurrentPrice": "3124000",
            "riseOrDescent": "+",
            "degree": "22000",
            "percentage": "0.71",
            "coinTotalPrice": "50203627033",
            "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png"
        }
    ],
    "__v": 0
}
```

## my-coin

`path` : /api/my-coin/:id

해당 유저의 관심 코인 뜬다

더미데이터로 id가 1인 유저 넣어뒀습니다

### Response Body

[GET]

```json
{
    "coin": [
        {
            "_id": "60b740e7dfb2cc51ac007d90",
            "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
            "coinEnglishTitle": "BNA",
            "coinKoreanTitle": "바나나톡",
            "coinCurrentPrice": "60.5",
            "riseOrDescent": "+",
            "degree": "66.8",
            "percentage": "0.2",
            "coinTotalPrice": "26006519283",
            "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png"
        },
        {
            "_id": "60b740e7dfb2cc51ac007d91",
            "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
            "coinEnglishTitle": "KLAY",
            "coinKoreanTitle": "클레이튼",
            "coinCurrentPrice": "1592",
            "riseOrDescent": "+",
            "degree": "66.8",
            "percentage": "3.64",
            "coinTotalPrice": "8957881877",
            "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png"
        },
        {
            "_id": "60b740e7dfb2cc51ac007d92",
            "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
            "coinEnglishTitle": "ETH",
            "coinKoreanTitle": "이더리움",
            "coinCurrentPrice": "3124000",
            "riseOrDescent": "+",
            "degree": "22000",
            "percentage": "0.71",
            "coinTotalPrice": "50203627033",
            "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png"
        }
    ]
}
```

## coin-list

`path` : /api/coin-list/:sort/:ascending

`sort` 값이

 `title` 이면 `코인명` 기준

`current-price` 이면 `현재가` 기준

`degree` 이면 `등락률` 기준

`total-price` 이면 `거래대금` 기준

`ascending` 값이

`1` 이면 오름차순

`-1` 이면 내림차순 

### Response Body

[GET]

[`/api/coin-list/title/1`]

```json
[
    {
        "_id": "60b742a8655d8e596cf963da",
        "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
        "coinEnglishTitle": "BNA",
        "coinKoreanTitle": "바나나톡",
        "coinCurrentPrice": "60.5",
        "riseOrDescent": "+",
        "degree": "66.8",
        "percentage": "0.2",
        "coinTotalPrice": "26006519283",
        "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png",
        "__v": 0
    },
    {
        "_id": "60b74337655d8e596cf963dd",
        "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
        "coinEnglishTitle": "ASTA",
        "coinKoreanTitle": "아스타",
        "coinCurrentPrice": "87.66",
        "riseOrDescent": "+",
        "degree": "5.26",
        "percentage": "6.38",
        "coinTotalPrice": "29179278449",
        "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png",
        "__v": 0
    },
    {
        "_id": "60b74332655d8e596cf963dc",
        "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
        "coinEnglishTitle": "ETH",
        "coinKoreanTitle": "이더리움",
        "coinCurrentPrice": "3124000",
        "riseOrDescent": "+",
        "degree": "22000",
        "percentage": "0.71",
        "coinTotalPrice": "50203627033",
        "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png",
        "__v": 0
    },
    {
        "_id": "60b742b0655d8e596cf963db",
        "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
        "coinEnglishTitle": "KLAY",
        "coinKoreanTitle": "클레이튼",
        "coinCurrentPrice": "1592",
        "riseOrDescent": "+",
        "degree": "66.8",
        "percentage": "3.64",
        "coinTotalPrice": "8957881877",
        "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png",
        "__v": 0
    }
]
```

[`/api/coin-list/title/-1`]

```json

[
    {
        "_id": "60b742b0655d8e596cf963db",
        "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
        "coinEnglishTitle": "KLAY",
        "coinKoreanTitle": "클레이튼",
        "coinCurrentPrice": "1592",
        "riseOrDescent": "+",
        "degree": "66.8",
        "percentage": "3.64",
        "coinTotalPrice": "8957881877",
        "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png",
        "__v": 0
    },
    {
        "_id": "60b74332655d8e596cf963dc",
        "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
        "coinEnglishTitle": "ETH",
        "coinKoreanTitle": "이더리움",
        "coinCurrentPrice": "3124000",
        "riseOrDescent": "+",
        "degree": "22000",
        "percentage": "0.71",
        "coinTotalPrice": "50203627033",
        "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png",
        "__v": 0
    },
    {
        "_id": "60b74337655d8e596cf963dd",
        "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
        "coinEnglishTitle": "ASTA",
        "coinKoreanTitle": "아스타",
        "coinCurrentPrice": "87.66",
        "riseOrDescent": "+",
        "degree": "5.26",
        "percentage": "6.38",
        "coinTotalPrice": "29179278449",
        "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png",
        "__v": 0
    },
    {
        "_id": "60b742a8655d8e596cf963da",
        "coinLogoImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY.png",
        "coinEnglishTitle": "BNA",
        "coinKoreanTitle": "바나나톡",
        "coinCurrentPrice": "60.5",
        "riseOrDescent": "+",
        "degree": "66.8",
        "percentage": "0.2",
        "coinTotalPrice": "26006519283",
        "graphImage": "https://sopt-8-coinone.s3.ap-northeast-2.amazonaws.com/KLAY_graph.png",
        "__v": 0
    }
]
```
