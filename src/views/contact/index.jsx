import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {Container,Wrapper, LeftContainer,ImageWrapper, RightContainer, FormHeading, StyledForm, StyledInput, ErrorText, SubmitButton, CharacterImage,Textarea ,FormItem} from '../../style/views/contact'; 
import { validationSchema } from '../../validation/formValidate';
import people from '../../assets/svg/people.svg'
const Contact = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
      });
    
      const onSubmit = (data) => {
        console.log('Form Submitted:', data);

        reset(); 
      };
    
      return (
        <Container>
            <Wrapper>
            <LeftContainer>
            <ImageWrapper>
            <CharacterImage src={people} alt="people" /> 
            </ImageWrapper>
          </LeftContainer>
          
          <RightContainer>
            <FormHeading>We'd love to hear <br/>
                 from you
            </FormHeading>
            
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
                {...register('website')}
              />
              {errors.website && <ErrorText>{errors.website.message}</ErrorText>}
    
              </FormItem>
    
               <FormItem  type={'textarea'} >
               <Textarea
                    placeholder="Project Details*"
                    rows="4"
                    {...register('projectDetails')}
                />
                {errors.projectDetails && <ErrorText type={'textarea'}  >{errors.projectDetails.message}</ErrorText>}
               </FormItem>
        
 
            <SubmitButton type="submit">Send Proposal</SubmitButton>
            </StyledForm>
           
          </RightContainer>
            </Wrapper>
          
        </Container>
    
  )
}

export default Contact