import { ReactNode } from "react";
import { css } from "@emotion/react";

interface TextProps {
	color: string;
	type: "h1" | "h2" | "h3" | "normal";
	weight?: "normal" | "bold";
	children: ReactNode;
}

function Text({ color, type, weight = "normal", children }: TextProps) {
	return (
		<div
			css={css`
				color: ${color};
				font-weight: ${weight === "bold" && 700};
			`}
			className={"text " + type}
		>
			{children}
		</div>
	);
}

export default Text;
