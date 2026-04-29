
import React from 'react';
import {
  ProgramContainer,
  MaxWidthWrapper,
  Header,
  ListWrapper,
  ProgramList,
  ProgramItem,
  ConditionsBox,
  ConditionsGrid,
  DressCodeBox,
  DressCodeText,
  DressCodePalette,
  ColorDot
} from '../styles/ProgramSection.styles';

const ProgramSection: React.FC = () => {
  // true: цифры по центру относительно заголовков (когда описания скрыты)
  // false: прежнее выравнивание под вариант с описаниями
  const titlesOnly = false;

  return (
    <ProgramContainer>
      <MaxWidthWrapper>
        <Header>
          <h2>В программе:</h2>
          <div />
        </Header>
        
        <ListWrapper>
          <ProgramList>
            <ProgramItem $centerNumber={titlesOnly}>
              <span className="number">01</span>
              <div>
                <span className="title">Живая музыка</span>
                <p>Полное погружение в атмосферу под звуки саксофона</p>
              </div>
            </ProgramItem>
            <ProgramItem $centerNumber={titlesOnly}>
              <span className="number">02</span>
              <div>
                <span className="title">Фуршет</span>
                <p>Попробуете блюда, которые мы готовим для ваших событий</p>
              </div>
            </ProgramItem>
            <ProgramItem $centerNumber={titlesOnly}>
              <span className="number">03</span>
              <div>
                <span className="title">Интерактивы от ведущего</span>
                <p>Яркий и необыкновенный дуэт ведущих задаст вайб и настроение</p>
              </div>
            </ProgramItem>
            <ProgramItem $centerNumber={titlesOnly}>
              <span className="number">04</span>
              <div>
                <span className="title">презентация от шеф-повара</span>
                <p>Гастрономическая упаковка впечатлений обеспечена. Возможно обсудить ваши идеи и увидеть, как их можно воплотить</p>
              </div>
            </ProgramItem>
          </ProgramList>

          <ConditionsBox>
            <h3>Тайминг</h3>
            <ConditionsGrid>
              <div>15:00 сбор гостей</div>
              <div>15:30 открытие</div>
              <div>18:00 финал</div>
            </ConditionsGrid>
          </ConditionsBox>

          <DressCodeBox>
            <h3>Дресс-код</h3>
            <DressCodeText>Мы будем признательны, если Вы придержетесь цветовой гаммы</DressCodeText>
            <DressCodePalette>
              <ColorDot $color="#000000" aria-label="Черный цвет" />
              <ColorDot $color="#FFFFFF" aria-label="Белый цвет" />
            </DressCodePalette>
          </DressCodeBox>
        </ListWrapper>
      </MaxWidthWrapper>
    </ProgramContainer>
  );
};

export default ProgramSection;
