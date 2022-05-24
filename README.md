## Heroku에 React + Express 서비스 자동 배포하기 (HM #1)

https://www.youtube.com/watch?v=ntFeJ30GE40

> mkdir client
> mkdir server
> git init

> npx create-react-app --template typescript .

서버폴더로 이동해서

> npm init

typescript 컴파일러 설치

> npm install -g typescript

tsconfig.json 파일 생성됨

> tsc --init

아래 주석을 해제한다.
"moduleResolution": "node",

> npm i express

> npm i --save-dev @types/express

컴파일

> tsc

> node app.js

localhost 접속하면 메세지가 뜬다.

> npm i -g ts-node

> ts-node app.ts

라고 하면
tsc로 컴파일하고 node app.js 를 자동으로 실행해준다.

## 10분 30초 구간 : 기본적인 프론트와 백엔드 코드 완성됨

client 폴더에서

> npm run build

자동화 해야할일 순서 정리

// client 폴더로 이동
// npm ci
// npm run build
// client /build -> server/build 폴더로 이동

// server 폴더로 이동
// npm ci
// tsc
// node app.js

루트폴더에 package.json파일을 만들어서 여기에 자동화 스크립트를 작성한다.
루트 폴더에서 아래 명령을 수행하면 package.json 파일이 생성된다.

> npm init

헤로쿠에서는 start 명령이 60초 이내에 빌드를 끝내고 실행을 해야하는 제약이 있다.
모든 과정을 한번에 처리하면 시간이 초과 될수 있기 때문에 
과정을 몇개로 나누어서 처리한다. 즉 start 스크립트 전에 미리 build를 마무리한다.

