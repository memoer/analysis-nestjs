NestJs 완벽히 파헤치기

# 순서

- middleware -> guard -> interceptor -> decorator -> pipe -> resolver -> interceptor
- exception Filter -> gql formatError -> gql formatResponse

- interceptor은 아직 사용하진 않을 것 같음
- pipe같은 경우, 어쩌면 사용할 수 있을 것 같음

# FileStructure

- 앱을 실행하는 데에 있어서 필수적인 모듈 / Global모듈에 대해서는 파일명 앞에 '\_' 를 붙였습니다. (직관적으로 구분하기 위함)
