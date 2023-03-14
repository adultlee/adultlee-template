해당 README는 템플릿에서 공통적으로 사용될 component들에 대한 설계를 설명합니다.  
해당 컴포넌트들을 설계하는 당시 가장 고민했던 부분은 디자인 시스템에 대한 고려입니다.  
하지만 결국 어떠한 디자인 시스템에도 유연하게 대처가 가능하도록 좀더 포괄적인 방식을 고려하게 되었습니다.

## 컴포넌트들의 공통 구조

역할을 명확하게 구분하는것이 목적이었습니다.

1. 가독성을 고려했을 때, props를 통해서 styling의 변화가 필요한 경우는 대부분 emotion 의 css function 을 통해서 변경합니다.
2. 컴포넌트 내부의 css 요소가 과도하게 많아지며, 스타일링이 복잡해 지는 경우 scss를 통해서 스타일링을 조절합니다.

## TEXT 컴포넌트

해당 컴포넌트는 프로젝트 전체에서 사용되는 글자들에 대한 기능을 모두 포함합니다.

현재는 초기 상태로 가장 기본적인 형태만 유지합니다.

```ts
interface TextProps {
	type: "h1" | "h2" | "h3" | "normal"; //
	color: string; // red, #ffffff 등과 같이 string 자체를 받습니다.
	weight?: "normal" | "bold"; // font-weight 를 조절합니다.
	children: ReactNode;
}
```

## FLEX 컴포넌트

해당 컴포넌트는 프로젝트 전체에서 사용되는 정렬에 대한 기본 요소들 만을 포함합니다.

현재는 초기 상태로 가장 기본적인 형태만 유지합니다.

```ts
interface FlexProps {
	direction: "row" | "column"; //
	align: string;
	content: string; // justify-content
	children: ReactNode;
}
```

## Button 컴포넌트

해당 컴포넌트는 프로젝트 전체에서 사용되는 버튼에 대한 기본 요소를 포함합니다.

초기 상태로 가장 기본적인 형태만 유지합니다.

```ts
interface ButtonProps {
	type: "primary" | "secondary" | "tertiary";
	size: "large" | "medium" | "small";
	disabled?: boolean;
}
```
