import { Box, Typography } from '@mui/material';
import { BackButton } from '../../../../shared/ui/BackButton/BackButton';
import YoutubeChannelFirst from '../../../../shared/assets/images/youtubeChannelFirst.png';
import YoutubeChannelSecond from '../../../../shared/assets/images/youtubeChannelSecond.png';
import YoutubeChannelThird from '../../../../shared/assets/images/youtubeChannelThird.png';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const images = [
  { src: YoutubeChannelFirst, height: 'auto'},
  { src: YoutubeChannelSecond, height: 'auto' },
  { src: YoutubeChannelThird, height: 'auto' },
];

export const YoutubeChannelPage = () => {
  return (
    <Box marginBottom="20px">
      <BackButton />
      <Typography
         variant="h6"
         gutterBottom 
         textAlign="center" 
         marginBottom="20px"
         sx={{
           fontSize: { xs: '16px', sm: '18px', md: '20px' },
         }}
      >
        Пример для оформления YouTube—канала. <br />
        Апрель 2024 год. 
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
        maxWidth="600px"
        margin="0 auto"
      >
        {images.map((image, index) => (
          <Zoom key={index}>
            <Box 
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
              width={{ xs: '100%', md: 'auto' }}
            >
              <img
                src={image.src}
                alt={`nomadher ${index}`}
                style={{ width: '100%', height: image.height, borderRadius: '10px' }}
              />
            </Box>
          </Zoom>
        ))}
      </Box>
    </Box>
  );
};
