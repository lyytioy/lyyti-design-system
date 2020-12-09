import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionUnread = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 20.454a2.503 2.503 0 01-2.5-2.5v-12a2.48 2.48 0 01.738-1.77 2.485 2.485 0 011.762-.73h19a2.484 2.484 0 011.802.77c.447.461.698 1.078.698 1.73v12c0 1.378-1.122 2.5-2.5 2.5h-19zM1.176 5.253A1.467 1.467 0 001 5.954v12c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-12c0-.248-.06-.486-.176-.701l-10.508 8.589a.499.499 0 01-.632 0L1.176 5.253zM12 12.808l10.078-8.237a1.481 1.481 0 00-.578-.117h-19c-.2 0-.396.04-.578.117L12 12.808z" />
  );

export default SvgEmailActionUnread;
