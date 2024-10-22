// import { Box } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
// import Zoom from 'react-medium-image-zoom';
// import 'react-medium-image-zoom/dist/styles.css';
import { Grid } from '@mui/material';
import { PROJECTS_LIST } from '../../shared/constants';
import { ProjectCard } from '../../shared/ui/Card/Card';

export const Main = () => {
  return (
    // <Box margin="20px auto">
    //   <Swiper
    //     spaceBetween={10}
    //     slidesPerView={3}
    //     breakpoints={{
    //       0: {
    //         slidesPerView: 1,
    //         spaceBetween: 0
    //       },
    //       500: {
    //         slidesPerView: 2,
    //         spaceBetween: 15
    //       },
    //       900: {
    //         slidesPerView: 2,
    //         spaceBetween: 15
    //       },
    //       1025: {
    //         slidesPerView: 3,
    //         spaceBetween: 20
    //       },
    //     }}
    //     autoplay
    //     modules={[Autoplay, Navigation]}
    //     navigation
    //     grabCursor
    //     loop
    //   >
    //     {PROJECTS_LIST.map((project) => (
    //       <SwiperSlide key={project.name}>
    //         <Zoom>
    //           <Box 
    //             display="flex"
    //             justifyContent="center"
    //             alignItems="center"
    //             height="100%"
    //           >
    //             <img
    //               src={project.image}
    //               alt={project.name}
    //               style={{ maxWidth: '100%', height: 'auto' }}
    //             />
    //           </Box>
    //         </Zoom>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </Box>
    // @ts-ignore
    <Grid
      container
      spacing={4}
      sx={{
        padding: '0 20px',
        marginTop: '1px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
      justify="center"
    >
      {PROJECTS_LIST.map(project => (
        <Grid 
          item 
          key={project.name} 
          sx={{
            flex: '1 1 400px',
            maxWidth: '400px',
            boxSizing: 'border-box',
          }}
        >
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};
