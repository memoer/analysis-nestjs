NestJs 완벽히 파헤치기

# 순서

- middleware -> gql context -> guard -> before interceptor -> decorator -> pipe -> resolver -> exception filter catch || after interceptor
- exception Filter -> gql formatError -> gql formatResponse
  - exception Filter에서 return을 할 경우 gql formatError로 넘어간다.

# interceptor/pipe

- interceptor은 아직 사용하진 않을 것 같음
- pipe같은 경우, 어쩌면 사용할 수 있을 것 같음

# FileStructure

- 앱을 실행하는 데에 있어서 필수적인 모듈 / Global모듈에 대해서는 파일명 앞에 '\_' 를 붙였습니다. (직관적으로 구분하기 위함)
