import { FC, ReactNode } from 'react';
import { Avatar, Box, Card, CardContent, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface ContactLinkProps {
  link: string;
  icon: ReactNode;
  title: string;
  isNewTab?: boolean;
}

export const ContactLink: FC<ContactLinkProps> = ({ icon, link, title, isNewTab }) => {
  const theme = useTheme();

  return (
    <Link
      href={link}
      target={isNewTab ? '_blank' : '_self'}
      rel={'noopener'}
      underline="none"
    >
      <Card
        sx={{
          borderRadius: '10px',
          padding: '10px',
          background: theme.palette.primary.contrastText,
          color: theme.palette.text.primary,
          '&:hover': {
            background: theme.palette.text.primary,
            color: theme.palette.text.secondary,
            '& .MuiAvatar-root': {
              backgroundColor: theme.palette.text.secondary,
              color: theme.palette.text.primary
            }
          },
        }}>
        <CardContent
          sx={{
            padding: 0,
            '&:last-child': {
              paddingBottom: '0px',
            },
          }}
        >
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                backgroundColor: theme.palette.text.primary,
                height: 40,
                width: 40,
                color: theme.palette.text.secondary,
              }}
            >
              {icon}
            </Avatar>
            <Typography
              variant="body1"
              gutterBottom 
              sx={{ margin: 0 }}
            >
              {title}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};