import * as Yup from "yup";

export const heroSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot be more than 50 characters long")
    .required("Name is required"),
    
  description: Yup.string()
    .min(100, "Description must be at least 100 characters long")
    .max(200, "Description cannot be more than 200 characters long")
    .required("Description is required"),
    
  image: Yup.string()
    .url("Image must be a valid URL")
    .required("Image is required"),
    
  state: Yup.string()
    .min(2, "State must be at least 2 characters long")
    .required("State is required"),
    
  country: Yup.string()
    .min(2, "Country must be at least 2 characters long")
    .required("Country is required"),
});
