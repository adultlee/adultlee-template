# 소개

[Adultlee - template]는 개인 프로젝트를 개발하며 반복되는 초기 셋팅에 대한 비용을 줄이기 위해서 기획되었습니다.

# 기술 스택

-   React : 18.2.0
-   Next : 13.2.3
-   typescript : 4.9.5
-   emotion : 11.10.6
-   sass : 1.58.3

# 스타일링

많은 고민을 했으나, 익숙한 styeld-component 방식이 아닌 emotion 에서 제공하는 css prop 방식을 통한 스타일링을 사용하기로 하였습니다.

styled-component의 컴포넌트명을 정하는 부분에서 발생하는 비용을 줄이고 싶었습니다.
거기에 추가로, 복잡한 css가 요구 되는 경우 scss를 사용하여 ui개발에 대한 다양성을 확보했습니다.

# Version 1 목표

1. emotion, sass 기반의 common 컴포넌트를 개발합니다.
   -> 해당 컴포넌트의 종류로는 Text, button, Flex, Margin, layout(header , mian, footer)
2. 1번에서 개발한 컴포넌트들을 이용하여 간단한 페이지를 구성합니다.
3. npm 에 업로드
