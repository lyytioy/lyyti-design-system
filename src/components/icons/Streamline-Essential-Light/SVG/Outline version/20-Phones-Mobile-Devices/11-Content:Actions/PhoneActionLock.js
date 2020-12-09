import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 22.25a.75.75 0 01-.75-.75.75.75 0 01.696-.746l.008-.001A.75.75 0 1112 22.25z" />,
    <path d="M7.5 24A2.503 2.503 0 015 21.5v-19C5 1.121 6.121 0 7.5 0h9C17.878 0 19 1.121 19 2.5v19c0 1.378-1.122 2.5-2.5 2.5h-9zM6 21.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5V20H6v1.5zM18 19V5H6v14h12zm0-15V2.5c0-.827-.673-1.5-1.5-1.5h-9C6.673 1 6 1.673 6 2.5V4h12z" />,
    <path d="M10.5 3a.5.5 0 010-1h3a.5.5 0 010 1h-3z" />,
    <circle cx={12} cy={13.5} r={0.75} />,
    <path d="M9.5 17c-.827 0-1.5-.673-1.5-1.5v-4c0-.64.41-1.205 1-1.414V10c0-1.654 1.346-3 3-3s3 1.346 3 3v.086c.59.209 1 .774 1 1.414v4c0 .827-.673 1.5-1.5 1.5h-5zm0-6a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-5zm4.5-1c0-1.103-.897-2-2-2s-2 .897-2 2h4z" />
  );

export default SvgPhoneActionLock;
