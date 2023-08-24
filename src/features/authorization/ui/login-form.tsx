import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { changeCity, cities } from '@/entities/city';
import { login, getLoginStatusObj } from '@/entities/user';
import {
  useAppDispatch,
  useAppSelector,
  getObjectKeys,
  capitalizeWord,
  getRandomItemFromArray
} from '@/shared/lib';
import { Button, RingLoader } from '@/shared/ui';
import { formFields, validationSchema } from '../const';
import styles from './styles.module.css';
import { AppRoute } from '@/const';

type FormValues = {
  email: string;
  password: string;
}

export function LoginForm() {
  const randomCity = getRandomItemFromArray(cities);

  const dispatch = useAppDispatch();
  const loginAuthStatus = useAppSelector(getLoginStatusObj);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    dispatch(login({ ...values, login: values.email }));
  };

  const onCityLinkClick = () => {
    dispatch(changeCity(randomCity));
  };

  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form
          className="login__form form"
          action="#"
          method="post"
          onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
        >
          {getObjectKeys(formFields).map((name) => (
            <div
              key={name}
              className={clsx(
                'login__input-wrapper form__input-wrapper',
                styles['input-wrapper'],
                { [styles.invalid]: errors?.[name] },
              )}
            >
              <label className="visually-hidden">{formFields[name]}</label>
              <input
                className="login__input form__input"
                type={name}
                placeholder={capitalizeWord(name)}
                disabled={loginAuthStatus.isPending}
                {...register(`${name}`)}
              />
              {errors?.[name] && (
                <span className={styles['error-text']}>
                  {errors?.[name]?.message}
                </span>
              )}
            </div>
          ))}
          <Button
            className="login__submit form__submit"
            type="submit"
            disabled={loginAuthStatus.isPending}
          >
            {loginAuthStatus.isPending ? <RingLoader /> : 'Sign in'}
          </Button>
        </form>
      </section>

      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.Root}
            onClick={onCityLinkClick}
          >
            <span>{randomCity}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
