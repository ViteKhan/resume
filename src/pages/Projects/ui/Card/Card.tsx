import { Card, CardContent, CardMedia, CardActions, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ProjectCardProps } from './Card.types';
import { useNavigate } from 'react-router-dom';

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const theme = useTheme();
  const navigate = useNavigate(); 

  const goToProject = () => {
    navigate(`/projects/${project.link}`);
  };

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.primary.contrastText,
        borderRadius: '10px',
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: 240, 
          objectFit: 'cover',
          width: '100%', 
        }}
        image={project.image}
        title={project.name}
      />
      <CardContent sx={{ minHeight: '105px'}}>
        <Typography gutterBottom variant="h6" component="div" fontWeight={600}>
          {project.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: '0 16px 16px' }}>
        <Button
          size="small" 
          sx={{
            marginLeft: 'auto',
            color: theme.palette.text.primary,
          }}
          onClick={goToProject}
        >
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
};