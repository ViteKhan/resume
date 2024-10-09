import { Grid } from '@mui/material';
import { PROJECTS_LIST } from '../../../../shared/constants';
import { ProjectCard } from '../Card/Card';


export const Projects = () => {
  return (
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