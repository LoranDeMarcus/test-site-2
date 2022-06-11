import React from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import { form } from './styles'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { login } from '../../api/userAPI'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const requiredFieldText = 'Обязательное поле'

const loginValidationSchema = yup.object({
  login: yup.string().required(requiredFieldText),
  password: yup.string().required(requiredFieldText),
})

export const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      login: '',
      password: '',
      name: '',
      lastName: '',
      middleName: '',
      department: '',
      course: '',
    }
  })

  const onSubmit = async (formData) => {
    try {
      await login(formData)
    } catch (err) {
      alert(err.response.data.message)
    }
  }

  return (
    <s.Section>
      <Container>
        <s.AuthWrapper>
          <form onSubmit={handleSubmit(onSubmit)} className={form}>
            <s.Title>Авторизация</s.Title>
            <Controller
              name="login"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Логин"
                  onChange={onChange}
                  value={value}
                  errorMessage={errors?.login?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  htmlType="password"
                  label="Пароль"
                  onChange={onChange}
                  value={value}
                  errorMessage={errors?.password?.message}
                />
              )}
            />
            <s.ButtonWrapper>
              <Button type="submit" theme='secondary'>
                Войти
              </Button>
            </s.ButtonWrapper>
          </form>
        </s.AuthWrapper>
      </Container>
    </s.Section>
  )
}
