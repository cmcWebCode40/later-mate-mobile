import { Link } from 'expo-router';
import { Formik } from 'formik';
import { ResetPasswordAuthSchema } from 'libs/schemas';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button, FormGroup, Paragraph } from 'components/common';
import { StyledView } from 'components/nativewind-wrapper';

const formInitialValues = {
  token: '',
  password: '',
  password_confirmation: '',
};

interface ResetPaswordFormProps {
  isLoading?: boolean;
  errorMessage?: string;
  onSubmit: (input: typeof formInitialValues) => void;
}

const ResetPaswordForm: React.FunctionComponent<ResetPaswordFormProps> = ({
  onSubmit,
  isLoading,
  errorMessage,
}) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={formInitialValues}
      onSubmit={onSubmit}
      validationSchema={ResetPasswordAuthSchema}
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
          <KeyboardAwareScrollView
            style={
              {
                // minHeight: 500,
              }
            }
          >
            <ScrollView
              style={{
                flex: 1,
              }}
            >
              <StyledView className='space-y-6'>
                <StyledView>
                  <FormGroup
                    label='New password'
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    value={values.password}
                    isError={Boolean(errors.password && touched.password)}
                    errorMessage={errors.password}
                    placeholder='Enter new password'
                    hasPassword={true}
                  />
                </StyledView>
                <StyledView>
                  <FormGroup
                    label='Re-enter new password'
                    onChangeText={handleChange('password_confirmation')}
                    onBlur={() => setFieldTouched('password_confirmation')}
                    value={values.password_confirmation}
                    isError={Boolean(
                      errors.password_confirmation &&
                        touched.password_confirmation
                    )}
                    errorMessage={errors.password_confirmation}
                    placeholder='Enter new password again'
                    hasPassword={true}
                  />
                </StyledView>
                {errorMessage && (
                  <Paragraph variant='sm' className='text-primary-100 mt-0.5'>
                    {errorMessage}
                  </Paragraph>
                )}
              </StyledView>
              <StyledView className='mt-8 space-y-3'>
                <Button
                  isLoading={isLoading}
                  disabled={!isValid}
                  onPress={() => {
                    handleSubmit();
                  }}
                  variant='contained'
                >
                  Reset password
                </Button>
                <Link
                  asChild
                  href={{
                    pathname: '(auth)/authentication',
                    params: {
                      mode: 1,
                    },
                  }}
                >
                  <Button variant='ghost'>Log In</Button>
                </Link>
              </StyledView>
            </ScrollView>
          </KeyboardAwareScrollView>
        </StyledView>
      )}
    </Formik>
  );
};

export default ResetPaswordForm;
