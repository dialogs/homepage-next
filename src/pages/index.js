import React from 'react';
import { Link } from 'gatsby';

import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { Hero } from '../components/Hero/Hero';
import { Platform } from '../components/Platform/Platform';
import { Safety } from '../components/Safety/Safety';
import { Incompany } from '../components/Incompany/Incompany';
// import { Tabs, Tab } from '../components/Tabs/Tabs';

export default () => {
  return (
    <Container>
      <Hero />
      <Platform />
      <Safety />
      <Incompany />

      <section className="section easy">
        <div className="easy__cols">
          <div className="easy__col easy__col--left">
            <h3 className="easy-title">dialog — это просто и эффективно</h3>
            <div className="easy-image">
              <img
                className="easy-img"
                src="/images/home/easy/easy-export.png"
                srcSet="/images/home/easy/easy-export@2x.png 2x"
                alt=""
              />
            </div>
          </div>
          <div className="easy__col easy__col--right">
            <div className="easy-info">
              <div className="easy-info-item">
                <div className="easy-info-title">В диалоге – проще</div>
                <div className="easy-info-text">
                  Современный мир перегружен шумом - реклама, новости,
                  отвлекающие уведомления. IT-продукты в погоне за новыми
                  функциями забывают о пользователях. Dialog помогает
                  сфокусироваться на решении задач без сложных интерфейсов и фич
                  - берись и работай, как тебе удобно.
                </div>
              </div>
              <div className="easy-info-item">
                <div className="easy-info-title">В диалоге – эффективнее</div>
                <div className="easy-info-text">
                  Мы против бюрократии, бесполезных встреч и формальных писем с
                  километровыми подписями. Чем эффективнее коммуникация, тем
                  быстрее команда достигает своих целей. Dialog помогает
                  эффективно решать личные и командные задачи без перегруженных
                  процессов.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section business">
        <div className="business__cols">
          <div className="business__info">
            <div className="business__info-title">
              dialog — в большом бизнесе
            </div>
            <div className="business__info-subtitle">
              Пример интеграции в банковскую сферу
            </div>
            <div className="business__info-logo">
              <img
                className="business__info-img"
                src="/images/home/business/logo-sberbank-business.svg"
                alt="Сбербанк"
              />
            </div>
            <ul className="business__info-list list list--secondary">
              <li className="business__info-item">
                Платформа для общения сотрудников и корпоративных клиентов
              </li>
              <li className="business__info-item">
                Интеграция банковских сервисов через открытый API
              </li>
              <li className="business__info-item">
                Доступ с любых устройств и из всех подсетей
              </li>
              <li className="business__info-item">
                Обмен конфиденциальной информацией
              </li>
            </ul>
          </div>
          <div className="business__image">
            <img
              className="business__img"
              src="/images/home/business/man2.png"
              srcSet="/images/home/business/man2@2x.png 2x"
              alt=""
            />
          </div>
        </div>
      </section>

      <div className="home__section offer">
        <h3 className="offer-title">Получить предложение</h3>
        <div className="offer-description">Пакет от 100 лицензий.</div>
        <form action="" className="form offer__form">
          <div className="offer__form-items-box">
            <div className="form-item form-item--default offer__form-item">
              <input
                type="text"
                className="input--default"
                id="offer-name"
                name="OFFER_NAME"
              />
              <label htmlFor="offer-name" className="label--default">
                Как к вам обращаться
              </label>
            </div>

            <div className="form-item form-item--default offer__form-item">
              <input
                type="email"
                className="input--default"
                id="offer-mail"
                name="OFFER_EMAIL"
              />
              <label htmlFor="offer-mail" className="label--default">
                Рабочий e-mail
              </label>
            </div>

            <div className="form-item form-item--default offer__form-item">
              <input
                type="tel"
                className="input--default"
                id="offer-phone"
                name="OFFER_PHONE"
              />
              <label htmlFor="offer-phone" className="label--default">
                Телефон
              </label>
            </div>

            <div className="form-item form-item--default offer__form-item">
              <input
                type="text"
                className="input--default"
                id="offer-company"
                name="OFFER_COMPANY"
              />
              <label htmlFor="offer-company" className="label--default">
                Название компании
              </label>
            </div>

            <div className="form-item form-item--select offer__form-item">
              <select
                className="select select--default"
                id="offer-users"
                name="OFFER_USERS"
              >
                <option disabled>Количество пользователей</option>
                <option value="1-10">1-10</option>
                <option value="val2">11-50</option>
                <option value="val3">51-100</option>
                <option value="val4">101-500</option>
                <option value="val5">500+</option>
              </select>
            </div>
          </div>

          <div className="offer__form-items-box offer__form-items-box--checkboxes">
            <div className="form-item form-item--checkbox offer__form-item">
              <label htmlFor="offer-personal" className="checkbox__label">
                <input
                  defaultChecked
                  className="checkbox__input"
                  type="checkbox"
                  id="offer-personal"
                  name="OFFER_PERSONAL"
                />
                <span className="checkbox__checkbox">
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.65856L4.94027 9.95214L13.1557 1"
                      stroke="#1E1E1E"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <span className="checkbox__text">
                  Я согласен на обработку личных данных
                </span>
              </label>
            </div>
            <div className="form-item form-item--checkbox offer__form-item">
              <label htmlFor="offer-subscribe" className="checkbox__label">
                <input
                  className="checkbox__input"
                  type="checkbox"
                  id="offer-subscribe"
                  name="OFFER_SUBSCRIBE"
                />
                <span className="checkbox__checkbox">
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.65856L4.94027 9.95214L13.1557 1"
                      stroke="#1E1E1E"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <span className="checkbox__text">
                  Подписаться на новостную рассылку
                </span>
              </label>
            </div>
          </div>

          <div className="form-item offer__form-item offer__form-item__button">
            <button type="submit" className="button button--default">
              Отправить заявку
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};
