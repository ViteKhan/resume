import { Box, Typography } from '@mui/material';
import { BackButton } from '../../../../shared/ui/BackButton/BackButton';
import NomadHerHorizontal from '../../../../shared/assets/images/nomadHerHorizontal.png';
import NomadHerVertical from '../../../../shared/assets/images/nomadHerVertical.png';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const images = [
  { src: NomadHerVertical, height: '500px'},
  { src: NomadHerHorizontal, height: 'auto' },
];

export const NomadHerPage = () => {
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
        Призовое место в конкурсе иллюстраций для приложения NomadHer. <br />
        Октябрь 2023 год.
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
