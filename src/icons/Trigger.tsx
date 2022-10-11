import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Trigger = (props: any) =>
  createElement(
    SvgIcon,
    { viewBox: '0 0 19 29', ...props },
    <path
      clipRule="evenodd"
      fill="none"
      d="M1.016 17.421c-.316 0-.433-.219-.259-.49l9.887-15.378c.174-.27.315-.23.315.106v9.324c0 .33.266.596.573.596h5.863c.317 0 .433.219.26.49L7.767 27.447c-.174.27-.315.23-.315-.105v-9.325a.591.591 0 0 0-.573-.596H1.016Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
  );

export default Trigger;
