import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    websiteURL: Yup.string().url('Invalid URL format').required('Website is required'),
    projectDetails: Yup.string().min(20, 'Project Details should be at least 20 characters').required('Project Details are required'),
  });