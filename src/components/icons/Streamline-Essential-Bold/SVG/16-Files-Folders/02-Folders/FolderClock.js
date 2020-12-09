import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17.25 10.5A6.75 6.75 0 1024 17.25a6.758 6.758 0 00-6.75-6.75zm0 11.5A4.75 4.75 0 1122 17.25 4.756 4.756 0 0117.25 22z" />,
    <path d="M19.25 16.25h-.875a.125.125 0 01-.125-.125V14.75a1 1 0 00-2 0v2.5a1 1 0 001 1h2a1 1 0 000-2zM9.015 17.735a8.249 8.249 0 0111.632-8A.249.249 0 0021 9.5v-5A1.5 1.5 0 0019.5 3H9.618a.5.5 0 01-.447-.276L8.224.83A1.5 1.5 0 006.88 0H1.5A1.5 1.5 0 000 1.5v15A1.5 1.5 0 001.5 18h7.265a.247.247 0 00.182-.079.25.25 0 00.068-.186z" />
  );

export default SvgFolderClock;
