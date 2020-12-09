import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 5.874a4.255 4.255 0 00-4.25 4.25v11.5a.75.75 0 00.75.75h7a.75.75 0 00.75-.75v-11.5A4.255 4.255 0 0012 5.874zm2 6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1.5a2 2 0 014 0z" />,
    <path d="M12 1.624a8.556 8.556 0 00-7.255 13.09.75.75 0 101.271-.8 7.055 7.055 0 1111.958.016.75.75 0 001.269.8A8.557 8.557 0 0012 1.624z" />
  );

export default SvgGestureTap;
