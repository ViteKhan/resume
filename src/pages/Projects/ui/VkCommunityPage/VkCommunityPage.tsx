import { Box, Typography, Link } from '@mui/material';
import { BackButton } from '../../../../shared/ui/BackButton/BackButton';
import VkCommunityFirst from '../../../../shared/assets/images/vkCommunityFirst.png';
import VkCommunitySecond from '../../../../shared/assets/images/vkCommunitySecond.png';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const images = [
  { src: VkCommunityFirst, height: 'auto' },
  { src: VkCommunitySecond, height: 'auto' },
];

export const VkCommunityPage = () => {
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
        Оформление записей для сообщества в соцсети ВКонтакте{' '}
        <Link
          href="https://vk.com/kids_fit"
          target="_blank"
          rel="noopener"
        >
          https://vk.com/kids_fit
        </Link>{' '}
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
                alt={`vkCommunity ${index}`}
                style={{ width: '100%', height: image.height, borderRadius: '10px' }}
              />
            </Box>
          </Zoom>
        ))}
      </Box>
    </Box>
  );
};
