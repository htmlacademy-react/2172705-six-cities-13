import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  useAppDispatch,
  useAppSelector,
  getObjectKeys,
  capitalizeWord
} from '@/shared/lib';
import { Button, RingLoader } from '@/shared/ui';
import { formFields, validationSchema } from '../const';
import { login, getAuthStatus } from '../index';
import styles from './styles.module.css';

type FormValues = {
  email: string;
  password: string;
}

export function LoginForm() {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    dispatch(login({ ...values, login: values.email }));
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
            disabled={authStatus.isNotCalculated}
          >
            {authStatus.isNotCalculated ? <RingLoader /> : 'Sign in'}
          </Button>
        </form>
      </section>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </section>
    </div>
  );
}
