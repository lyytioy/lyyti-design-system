import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInformationCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23.501c-6.341 0-11.5-5.159-11.5-11.5S5.659.501 12 .501s11.5 5.159 11.5 11.5-5.159 11.5-11.5 11.5zm0-22c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z" />,
    <path d="M13 17.505c-.827 0-1.5-.673-1.5-1.5v-6.5H10a.5.5 0 010-1h1.5c.551 0 1 .449 1 1v6.5a.5.5 0 00.5.5h1.5a.5.5 0 010 1H13zM11.745 7.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
  );

export default SvgInformationCircle;
