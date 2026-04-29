
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
            Окружите себя эстетикой в пространстве, созданном для самых важных 
            моментов: от камерных свадеб и дней рождения до бизнес-встреч и 
            творческих бранчей. Здесь безупречный вкус блюд встречается с 
            атмосферой, где каждая деталь — идеальная декорация для вашей 
            истории
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
