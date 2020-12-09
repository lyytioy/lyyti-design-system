import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingWinner = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 21.5C.673 21.5 0 20.827 0 20v-9c0-.827.673-1.5 1.5-1.5H7V4c0-.827.673-1.5 1.5-1.5h7c.827 0 1.5.673 1.5 1.5v9.5h5.5c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5h-21zm21-1a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5H17v6h5.5zm-6.5 0V4a.5.5 0 00-.5-.5h-7A.5.5 0 008 4v16.5h8zm-14.5-10a.5.5 0 00-.5.5v9a.5.5 0 00.5.5H7v-10H1.5z" />,
    <path d="M11 10.5a.5.5 0 010-1h.5v-3H11a.5.5 0 010-1h.5c.551 0 1 .449 1 1v3h.5a.5.5 0 010 1h-2z" />
  );

export default SvgRankingWinner;
