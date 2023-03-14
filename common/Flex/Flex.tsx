import { css } from "@emotion/react";
import { ReactNode } from "react";

interface FlexProps {
	direction?: "row" | "column";
	align?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline";
	content?:
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"; // justify-content
	children: ReactNode;
}

function Flex({
	direction = "row",
	align = "flex-start",
	content = "flex-start",
	children,
}: FlexProps) {
	return (
		<div
			css={css`
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: ${direction};
				align-items: ${align};
				justify-content: ${content};
			`}
		>
			{children}
		</div>
	);
}

export default Flex;
