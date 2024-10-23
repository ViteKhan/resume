import { Box, Typography } from '@mui/material';
import { BackButton } from '../../../../shared/ui/BackButton/BackButton';
import ColoringBook1 from '../../../../shared/assets/images/coloringBook1.png';
import ColoringBook2 from '../../../../shared/assets/images/coloringBook2.png';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const images = [
  { src: ColoringBook1, height: '500px' },
  { src: ColoringBook2, height: '500px'},
];

export const ColoringBookPage = () => {
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
        Идея раскраски для банковских работников ко Дню матери <br />
        (Идея не реализованная)
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
                alt={`coloringBook ${index}`}
                style={{ width: '100%', height: image.height, borderRadius: '10px' }}
              />
            </Box>
          </Zoom>
        ))}
      </Box>
    </Box>
  );
};
