import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12.842 18.321a3 3 0 01-4.457.24l-3.516-3.517a3.112 3.112 0 01-.23-4.245 3 3 0 014.353-.117l1.077 1.077a.251.251 0 00.372-.02l4.435-5.505a.256.256 0 00-.063-.377 9.752 9.752 0 104.236 5.379.254.254 0 00-.438-.076z" />,
    <path d="M23.435.391a1.5 1.5 0 00-2.109.227L10.386 14.2l-2.455-2.457a1.5 1.5 0 10-2.121 2.121L9.446 17.5a1.514 1.514 0 002.228-.12L23.662 2.5a1.5 1.5 0 00-.227-2.109z" />
  );

export default SvgCheckCircle;
