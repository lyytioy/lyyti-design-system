import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsMovieRecord = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M.75 6A.75.75 0 010 5.25v-3A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v3a.75.75 0 01-.75.75H.75zM22.5 4.5V2.25a.75.75 0 00-.75-.75h-3.959l-1 3H22.5zm-7.291 0l1-3H8.791l-1 3h7.418zm-9 0l1-3H2.25a.75.75 0 00-.75.75V4.5h4.709zM2.25 22.5A2.252 2.252 0 010 20.25v-12a.75.75 0 01.75-.75h22.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0V9h-21v11.25c0 .414.336.75.75.75h8.25a.75.75 0 010 1.5H2.25z" />,
    <path d="M18.75 24c-2.895 0-5.25-2.355-5.25-5.25s2.355-5.25 5.25-5.25S24 15.855 24 18.75 21.645 24 18.75 24zm0-9C16.682 15 15 16.682 15 18.75s1.682 3.75 3.75 3.75 3.75-1.682 3.75-3.75S20.818 15 18.75 15z" />,
    <circle cx={18.75} cy={18.75} r={1.125} />
  );

export default SvgControlsMovieRecord;
