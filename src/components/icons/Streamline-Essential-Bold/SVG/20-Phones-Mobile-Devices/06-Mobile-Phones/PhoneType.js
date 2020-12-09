import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M11 10.479V18.5a1 1 0 01-1 1H3a1 1 0 01-1-1v-11a1 1 0 011-1h6.25a.25.25 0 00.25-.25v-2A.25.25 0 009.25 4H2.5A2.5 2.5 0 000 6.5v15A2.5 2.5 0 002.5 24h8a2.5 2.5 0 002.5-2.5V10.743a.255.255 0 00-.252-.247 4.009 4.009 0 01-1.411-.248.245.245 0 00-.337.231z" />,
    <path d="M22.5 0h-10A1.5 1.5 0 0011 1.5v6A1.5 1.5 0 0012.5 9H15v1.793a.5.5 0 00.854.353L18 9h4.5A1.5 1.5 0 0024 7.5v-6A1.5 1.5 0 0022.5 0zm-9.25 4.25a1 1 0 111 1 1 1 0 01-1-1zm3.5 0a1 1 0 111 1 1 1 0 01-1-1zm4.5 1a1 1 0 111-1 1 1 0 01-1 1z" />
  );

export default SvgPhoneType;
