
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
          Italian terrace vibe <br/>
          {/* <span>Проект НЕ ПРОСПИ ⚡️</span> */}
        </Title>
        
        <Description>
          <p>
            На презентации погрузимся с вами в Италию, не только попробуем ее на вкус, 
            но и почувствуем это современное пространство, созданное для камерных свадеб, 
            дней рождений, корпоративов, творческих встреч, деловых мероприятий.
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
