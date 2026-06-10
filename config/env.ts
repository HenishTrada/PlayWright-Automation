import dotenv from 'dotenv';
 
//The process.env property returns an object containing the user environment.
 
// const env = process.env.TEST_ENV || 'qa';

// dotenv.config({
//     path :`.env.${env}`
// })

 
// dotenv.config();
 
// export const ENV={
//     BASE_URL:process.env.BASE_URL!,
//     PRODUCT_NAME:process.env.PRODUCT_NAME!
// };

const env = process.env.TEST_ENV || "qa";

if (!process.env.CI) {
    dotenv.config({
        path: `.env.${env}`
    });
}

function required(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`${key} is missing`);
  }

  return value;
}

export const ENV = {
  AMAZON_BASE_URL: required("AMAZON_BASE_URL"),
  CONNECTHQ_BASE_URL : required("CONNECTHQ_BASE_URL"),
  PRODUCT_NAME: required("PRODUCT_NAME"),
};