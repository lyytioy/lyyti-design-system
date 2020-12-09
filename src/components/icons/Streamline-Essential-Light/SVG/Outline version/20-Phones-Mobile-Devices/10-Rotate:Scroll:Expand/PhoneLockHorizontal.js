import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneLockHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={11} cy={13.5} r={0.75} />,
    <path d="M8.5 17c-.827 0-1.5-.673-1.5-1.5v-4c0-.64.41-1.205 1-1.414V10c0-1.654 1.346-3 3-3s3 1.346 3 3v.086c.59.209 1 .774 1 1.414v4c0 .827-.673 1.5-1.5 1.5h-5zm0-6a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-5zm4.5-1c0-1.103-.897-2-2-2s-2 .897-2 2h4z" />,
    <circle cx={21.5} cy={12} r={0.75} />,
    <path d="M2.5 19A2.503 2.503 0 010 16.5v-9C0 6.121 1.121 5 2.5 5h19C22.878 5 24 6.121 24 7.5v9c0 1.378-1.122 2.5-2.5 2.5h-19zm19-1c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5H20v12h1.5zM2.5 6C1.673 6 1 6.673 1 7.5v9c0 .827.673 1.5 1.5 1.5H19V6H2.5z" />
  );

export default SvgPhoneLockHorizontal;
