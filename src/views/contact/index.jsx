import React,{forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { submitForm,resetStatus } from '../../redux/contact/formSlice';
import {
  Container,
  Wrapper,
  LeftContainer,
  ImageWrapper,
  RightContainer,
  FormHeading,
  StyledForm,
  StyledInput,
  ErrorText,
  SubmitButton,
  CharacterImage,
  Textarea,
  FormItem
} from '../../style/views/contact';
import { validationSchema } from '../../validation/formValidate';
import people from '../../assets/svg/people.svg';

const Contact =forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.contact); // Access Redux form 

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    dispatch(submitForm(data)); 

    // reset(); 
  };

  React.useEffect(() => {
    if (status === 'succeeded') {
      const timer = setTimeout(() => dispatch(resetStatus()), 3000);
      return () => clearTimeout(timer);
    }
  }, [status, dispatch]);

  return (
    <Container ref={ref} >
      <Wrapper>
        <LeftContainer>
          <ImageWrapper>
            <CharacterImage src={people} alt="people" />
          </ImageWrapper>
        </LeftContainer>
        
        <RightContainer>
          <FormHeading>We'd love to hear <br/> from you</FormHeading>
          
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormItem>
              <StyledInput
                type="text"
                placeholder="Name*"
                {...register('name')}
              />
              {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
            </FormItem>

            <FormItem>
              <StyledInput
                type="email"
                placeholder="Email*"
                {...register('email')}
              />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            </FormItem>

            <FormItem>
              <StyledInput
                type="text"
                placeholder="Website URL*"
                {...register('websiteURL')}
              />
              {errors.websiteURL && <ErrorText>{errors.websiteURL.message}</ErrorText>}
            </FormItem>

            <FormItem type="textarea">
              <Textarea
                placeholder="Project Details*"
                rows="4"
                {...register('projectDetails')}
              />
              {errors.projectDetails && (
                <ErrorText type="textarea">{errors.projectDetails.message}</ErrorText>
              )}
            </FormItem>

            <SubmitButton type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Proposal'}
            </SubmitButton>
   
            {status === 'failed' && <ErrorText>{error}</ErrorText>}
            {status === 'succeeded' && <p>Form submitted successfully!</p>}
          </StyledForm>
        </RightContainer>
      </Wrapper>
    </Container>
  );
})

export default Contact;
