
import React from 'react';
import { VIDEO_URL } from '../constants';
import {
  VideoContainer,
  BackgroundVideo,
  VideoOverlay,
  VideoContent,
  Title,
  Description,
  Separator
} from '../styles/VideoSection.styles';

const VideoSection: React.FC = () => {
  return (
    <VideoContainer>
      <BackgroundVideo src={VIDEO_URL} alt="Фон секции мероприятия" />
      <VideoOverlay />

      <VideoContent>
        <Title>
          {/* Мы часть сценария вашего события<br/> */}
          {/* <span>Проект НЕ ПРОСПИ ⚡️</span> */}
        </Title>
        
        <Description>
          <p>
            На презентации покажем, что каждое блюдо - это роль в сценарии вашего события, 
            и мы попробуем его на вкус. Насладимся видами пространства, созданного для 
            камерных свадеб, дней рождений, корпоративов, творческих встреч
          </p>
          <Separator>
            <div />
            {/* <p>13 февраля мы соберём лучших специалистов.</p> */}
          </Separator>
        </Description>
      </VideoContent>
    </VideoContainer>
  );
};

export default VideoSection;
