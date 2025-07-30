import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box } from '@mui/material';
import configData from '../config.json'

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
 
  // OR
  // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

  const logo = (
  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', m: 0, p: 0, ...sx }}>
    <img src="/static/logo.png" alt="SplitSphere Logo" title="SplitSphere" style={{ width: 88, height: 88, borderRadius: '50%', boxShadow: '0 2px 14px #0002', marginRight: 16 }} />
    <img src="/static/logo-text.png" alt="SplitSphere" title="SplitSphere" style={{ height: 48, width: 'auto' }} />
  </Box>
);

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to={configData.DASHBOARD_URL}>{logo}</RouterLink>;
}
