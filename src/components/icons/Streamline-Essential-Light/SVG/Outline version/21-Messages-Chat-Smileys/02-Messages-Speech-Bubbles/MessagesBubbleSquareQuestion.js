import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7.5 23a.498.498 0 01-.5-.5V19H1.5C.673 19 0 18.327 0 17.5v-15C0 1.673.673 1 1.5 1h21c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5H11.707l-3.854 3.854A.495.495 0 017.5 23zm-6-21a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h6a.5.5 0 01.5.5v2.793l3.146-3.146A.496.496 0 0111.5 18h11a.5.5 0 00.5-.5v-15a.5.5 0 00-.5-.5h-21z" />,
    <path d="M12.5 13a.5.5 0 01-.5-.5v-.416a2.498 2.498 0 011.5-2.292A2.5 2.5 0 1010 7.5a.5.5 0 01-1 0C9 5.57 10.57 4 12.5 4a3.48 3.48 0 012.474 1.026 3.497 3.497 0 01-1.074 5.682c-.547.239-.9.779-.9 1.376v.416a.5.5 0 01-.5.5z" />,
    <circle cx={12.5} cy={15} r={0.75} />
  );

export default SvgMessagesBubbleSquareQuestion;
