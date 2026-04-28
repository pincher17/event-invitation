
import React, { useState } from 'react';
import { sendToTelegram } from '../services/telegramService';
import { TELEGRAM_CONFIG } from '../constants';
import { FormData as IFormData } from '../types';
import {
  FormWrapper,
  FormContainer,
  FormHeader,
  StyledForm,
  InputGroup,
  RadioGroup,
  RadioLabel,
  ErrorMessage,
  SubmitButton,
  SuccessSection,
  SuccessContent,
  InspirationTextarea
} from '../styles/FormSection.styles';

const FormSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new window.FormData(e.currentTarget);
    const data: IFormData = {
      names: formData.get('names') as string,
      phone: formData.get('phone') as string,
      instagram: formData.get('instagram') as string,
      date: formData.get('date') as string,
      venue: formData.get('venue') as string,
      team: formData.get('team') as string,
      inspiration: formData.get('inspiration') as string,
      story: formData.get('story') as string,
      proposal: formData.get('proposal') as string,
      participantsCount: formData.get('participantsCount') as string,
    };

    const success = await sendToTelegram(data, TELEGRAM_CONFIG.BOT_TOKEN, TELEGRAM_CONFIG.CHAT_ID);

    if (success) {
      setSubmitted(true);
    } else {
      setError('Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.');
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <SuccessSection>
        <SuccessContent>
          <h2>Спасибо!</h2>
          <p>
            Ваша анкета получена. Мы свяжемся с вами в ближайшее время для подтверждения участия.
          </p>
          <div />
        </SuccessContent>
      </SuccessSection>
    );
  }

  return (
    <FormWrapper>
      <FormContainer>
        <FormHeader>
          <h2>Анкета гостя</h2>
          <p>заполните все поля внимательно</p>
        </FormHeader>

        <StyledForm onSubmit={handleSubmit}>
          {/* Question 1 */}
          <InputGroup>
            <label>1. Имя и фамилия</label>
            <input 
              required
              name="names"
              type="text" 
              placeholder="Валерий Меладзе"
            />
          </InputGroup>

          {/* Question 2 */}
          <InputGroup>
            <label>2. Контактный номер телефона</label>
            <input 
              required
              name="phone"
              type="tel" 
              placeholder="+375 (__) ___-__-__"
            />
          </InputGroup>

          {/* Question 3 */}
          {/* <InputGroup>
            <label>3. Ваш Instagram <span>*</span></label>
            <input 
              required
              name="instagram"
              type="text" 
              placeholder="Ссылка на профиль"
            />
          </InputGroup> */}

          {/* Question 4 */}
         {/*  <InputGroup>
            <label>4. Дата вашего особенного дня в 2026 году</label>
            <input 
              required
              name="date"
              type="text" 
              placeholder="Укажите дату или поставьте прочерк"
            />
          </InputGroup> */}

          {/* Question 5 */}
          {/* <InputGroup>
            <label>5. Место действия (Свадебная площадка)</label>
            <textarea 
              name="venue"
              placeholder="Название площадки, если уже выбрана"
            />
          </InputGroup> */}

          {/* Question 6 */}
          {/* <InputGroup>
            <label>6. Ваша команда</label>
            <InspirationTextarea 
              name="team"
              rows={2}
              placeholder="С кем уже заключили договоры? (ведущий, фотограф и др.)"
            />
          </InputGroup> */}

          {/* Question 7 */}
          {/* <InputGroup>
            <label>7. Ваше вдохновение</label>
            <InspirationTextarea
              name="inspiration"
              rows={2}
              placeholder="Стиль или ссылка на мудборд"
            />
          </InputGroup> */}

          {/* Question 8 */}
          {/* <InputGroup>
            <label>8. Ваша история: как всё начиналось?</label>
            <InspirationTextarea 
              required
              name="story"
              rows={3}
              placeholder="Год, место и первые эмоции..."
            />
          </InputGroup> */}

          {/* Question 9 */}
          {/* <InputGroup>
            <label>9. Тот самый момент... (Предложение)</label>
            <InspirationTextarea 
              required
              name="proposal"
              rows={3}
              placeholder="Где и как это было?"
            />
          </InputGroup> */}

          {/* Question 10 */}
          {/* <InputGroup>
            <label>10. Состав участников на встрече 13 февраля</label>
            <RadioGroup>
              <RadioLabel>
                <input type="radio" name="participantsCount" value="Вдвоем" required />
                <span>Придем вдвоем</span>
              </RadioLabel>
              <RadioLabel>
                <input type="radio" name="participantsCount" value="Один/Одна" />
                <span>Буду один / одна</span>
              </RadioLabel>
            </RadioGroup>
          </InputGroup> */}

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Отправка...' : 'подтвердить бронь'}
          </SubmitButton>
        </StyledForm>
      </FormContainer>
    </FormWrapper>
  );
};

export default FormSection;
