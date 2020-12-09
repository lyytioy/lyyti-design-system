import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageLayout = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 22.5A2.503 2.503 0 010 20V4c0-1.379 1.121-2.5 2.5-2.5h19C22.878 1.5 24 2.621 24 4v16c0 1.378-1.122 2.5-2.5 2.5h-19zm19-1c.827 0 1.5-.673 1.5-1.5v-5.5H7v7h14.5zM1 20c0 .827.673 1.5 1.5 1.5H6v-14H1V20zm22-6.5v-6H7v6h16zm0-7V4c0-.827-.673-1.5-1.5-1.5h-19C1.673 2.5 1 3.173 1 4v2.5h22z" />,
    <circle cx={4} cy={4.5} r={0.75} />,
    <circle cx={7} cy={4.5} r={0.75} />,
    <circle cx={10} cy={4.5} r={0.75} />
  );

export default SvgBrowserPageLayout;
