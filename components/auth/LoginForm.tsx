import { Link } from 'expo-router';
import { Formik } from 'formik';
import { LoginAuthSchema } from 'libs/schemas';
import React from 'react';

import { Button, FormGroup, Paragraph } from 'components/common';
import { StyledView } from 'components/nativewind-wrapper';

const formInitialValues = {
  //TODO: default login for testing on staging
  email: 'johndoe@gmail.com',
  password: 'password',
};

interface LoginFormProps {
  isLoading: boolean;
  errorMessage?: string;
  onSubmit: (input: typeof formInitialValues) => void;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({
  onSubmit,
  isLoading,
  errorMessage,
}) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={formInitialValues}
      onSubmit={onSubmit}
      validationSchema={LoginAuthSchema}
    >
      {({
        values,
        isValid,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        handleSubmit,
      }) => (
        <StyledView className='mt-5'>
          <StyledView className='space-y-6'>
            <StyledView>
              <FormGroup
                label='Email address'
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                value={values.email}
                editable={!isLoading}
                isError={Boolean(errors.email && touched.email)}
                errorMessage={errors.email}
                placeholder='Enter email or phone'
              />
            </StyledView>
            <StyledView>
              <FormGroup
                label='Password'
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('pasword')}
                value={values.password}
                editable={!isLoading}
                isError={Boolean(errors.password && touched.password)}
                errorMessage={errors.password}
                placeholder='Enter password'
                hasPassword={true}
              />
            </StyledView>
          </StyledView>
          <Paragraph variant='sm' className='text-primary-100 mt-4'>
            {errorMessage}
          </Paragraph>
          <StyledView className='flex-row justify-between mt-1'>
            <StyledView />
            <Link asChild href='(auth)/forgot-password'>
              <Paragraph className='text-pink-600 font-medium text-base'>
                Forgot pasword ?
              </Paragraph>
            </Link>
          </StyledView>
          <StyledView className='mt-8 space-y-3'>
            <Button
              disabled={!isValid || isLoading}
              isLoading={isLoading}
              onPress={() => {
                handleSubmit();
              }}
              variant='contained'
            >
              Login
            </Button>
          </StyledView>
        </StyledView>
      )}
    </Formik>
  );
};

export default LoginForm;
