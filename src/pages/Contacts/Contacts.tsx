import { Box } from '@mui/material';
import { ContactLink } from '../../shared/ui/ContactLink/ContactLink';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';

export const Contacts = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '20px auto', maxWidth: '300px' }}>
      <ContactLink
        title={'Instagram'}
        link={'https://www.instagram.com/sorimantil'}
        icon={<InstagramIcon/>}
        isNewTab
      />
      <ContactLink
        title={'Telegram'}
        link={'https://t.me/minlilit'}
        icon={<TelegramIcon/>}
        isNewTab
      />
      <ContactLink
        title={'+7(916) 453-86-68'}
        link={'tel:+79164538668'}
        icon={<PhoneIphoneRoundedIcon/>}
      />
    </Box>
  );
};
