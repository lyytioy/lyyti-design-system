import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerMovie = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 22A2.503 2.503 0 010 19.5v-15C0 3.121 1.121 2 2.5 2h19C22.878 2 24 3.121 24 4.5v15c0 1.378-1.122 2.5-2.5 2.5h-19zM1 19.5c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V18H1v1.5zM23 17V7H1v10h22zm0-11V4.5c0-.827-.673-1.5-1.5-1.5h-19C1.673 3 1 3.673 1 4.5V6h22z" />,
    <path d="M9.848 14.85a.839.839 0 01-.599-.249A.843.843 0 019 14v-4a.853.853 0 01.491-.771.846.846 0 01.651-.027l4.559 1.658a1.216 1.216 0 010 2.282l-4.56 1.658a.838.838 0 01-.289.051h-.004zM10 13.786l4.359-1.585a.213.213 0 00.128-.275.213.213 0 00-.128-.128L10 10.214v3.572z" />,
    <circle cx={3.75} cy={4.5} r={0.75} />,
    <circle cx={7.875} cy={4.5} r={0.75} />,
    <circle cx={20.25} cy={4.5} r={0.75} />,
    <circle cx={16.125} cy={4.5} r={0.75} />,
    <circle cx={12} cy={4.5} r={0.75} />,
    <circle cx={3.75} cy={19.5} r={0.75} />,
    <circle cx={7.875} cy={19.5} r={0.75} />,
    <circle cx={20.25} cy={19.5} r={0.75} />,
    <circle cx={16.125} cy={19.5} r={0.75} />,
    <circle cx={12} cy={19.5} r={0.75} />
  );

export default SvgVideoPlayerMovie;
