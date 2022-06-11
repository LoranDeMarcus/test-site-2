import React from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import { form } from './styles'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { registration } from '../../api/userAPI'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const requiredFieldText = 'Обязательное поле'

const validationSchema = yup.object({
  login: yup.string().required(requiredFieldText),
  password: yup.string().required(requiredFieldText),
  name: yup.string().required(requiredFieldText),
  lastName: yup.string().required(requiredFieldText),
  middleName: yup.string().required(requiredFieldText),
  department: yup.string().required(requiredFieldText),
  course: yup.string().optional(),
})

export const Registration = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
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
      await registration(formData)
    } catch (err) {
      alert(err.response.data.message)
    }
  }

  return (
    <s.Section>
      <Container>
        <s.AuthWrapper>
          <form onSubmit={handleSubmit(onSubmit)} className={form}>
            <s.Title>Регистрация</s.Title>
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
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Имя"
                    onChange={onChange}
                    value={value}
                    errorMessage={errors?.name?.message}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Фамилия"
                    onChange={onChange}
                    value={value}
                    errorMessage={errors?.lastName?.message}
                  />
                )}
              />
              <Controller
                name="middleName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Отчество"
                    onChange={onChange}
                    value={value}
                    errorMessage={errors?.middleName?.message}
                  />
                )}
              />
              <Controller
                name="department"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Факультет"
                    onChange={onChange}
                    value={value}
                    errorMessage={errors?.department?.message}
                  />
                )}
              />
              <Controller
                name="course"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Курс"
                    onChange={onChange}
                    value={value}
                    errorMessage={errors?.course?.message}
                  />
                )}
              />
            <s.ButtonWrapper>
              <Button type="submit" theme='secondary'>
                Регистрация
              </Button>
            </s.ButtonWrapper>
          </form>
        </s.AuthWrapper>
      </Container>
    </s.Section>
  )
}
