import {  Box, Typography } from '@mui/material';
// @ts-ignore
import Photo from '../../shared/assets/images/photo.jpg'

export const About = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 610, margin: '0 auto' }}>
      <img
        src={Photo}
        alt="Хан Лилия Марселевна"
        style={{ width: '200px', height: '200px', margin: '0 auto 20px', display: 'block' }}
      />
      <Typography variant="body1" gutterBottom textAlign="center">
        Здравствуйте! Я — Лилия!
      </Typography>
      <Typography variant="body1" gutterBottom textAlign="justify" sx={{ textIndent: '25px' }}>
        Имею высшее инженерное образование. 
        В данный момент я прохожу обучение на платформе Skillbox (профессия Motion дизайнер). Воспитываю четырёхлетнюю дочь, параллельно участвую в разных творческих конкурсах.
        Отмечу сразу  — в дизайне я новичок, но с огромным желанием творить! Мечтаю работать с опытными коллегами, развиваться и обучаться.
      </Typography>
      <Typography variant="body1" gutterBottom textAlign="justify" sx={{ textIndent: '25px' }}>
        Я ищу компанию, которая сможет дать мне шанс. Моя цель на данном этапе жизни — практика. 
        Мне подойдут позиции стажёра или ассистента дизайнера или помощника СММ-менеджера. СММ—сфера очень отзывается во мне и сильно пересекается с дизайном, поэтому я тоже с радостью рассмотрю такие предложения.  
        В прошлом вела творческий блог в Инстаграме. В настоящее время помогаю подруге с ведением сообщества в ВКонтакте. 
        Очень хочу наконец начать свой карьерный путь!
      </Typography>
    </Box>
  );
};
