import { Formik } from 'formik';
import { RegisterAuthSchema } from 'libs/schemas';
import React from 'react';

import { Button, FormGroup, Paragraph } from 'components/common';
import { StyledView } from 'components/nativewind-wrapper';

const formInitialValues = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
};

interface RegisterFormProps {
  isLoading: boolean;
  errorMessage?: string;
  onSubmit: (input: typeof formInitialValues) => void;
}

const RegisterForm: React.FunctionComponent<RegisterFormProps> = ({
  onSubmit,
  errorMessage,
  isLoading,
}) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={formInitialValues}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validationSchema={RegisterAuthSchema}
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
        <StyledView className='mt-3'>
          <StyledView className='space-y-3'>
            <StyledView>
              <FormGroup
                label='First Name'
                onChangeText={handleChange('first_name')}
                onBlur={() => setFieldTouched('first_name')}
                value={values.first_name}
                isError={Boolean(errors.first_name && touched.first_name)}
                errorMessage={errors.first_name}
                placeholder='Enter first name'
              />
            </StyledView>
            <StyledView>
              <FormGroup
                label='Last Name'
                onChangeText={handleChange('last_name')}
                onBlur={() => setFieldTouched('last_name')}
                value={values.last_name}
                isError={Boolean(errors.last_name && touched.last_name)}
                errorMessage={errors.last_name}
                placeholder='Enter last name '
              />
            </StyledView>
            <StyledView>
              <FormGroup
                label='Email address'
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                value={values.email}
                isError={Boolean(errors.email && touched.email)}
                errorMessage={errors.email}
                placeholder='Enter email '
              />
            </StyledView>
            <StyledView>
              <FormGroup
                label='Password'
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('pasword')}
                value={values.password}
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
          <StyledView className='mt-1 space-y-3'>
            <Button
              disabled={!isValid || isLoading}
              isLoading={isLoading}
              onPress={() => {
                handleSubmit();
              }}
              variant='contained'
            >
              Create My Account
            </Button>
          </StyledView>
        </StyledView>
      )}
    </Formik>
  );
};

export default RegisterForm;
