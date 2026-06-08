import dotenv from 'dotenv';
import { PassengerDetails } from '../pages/PassengerInfoPage'; 

const env = process.env.TEST_ENV || "qa";

dotenv.config({
    path : `.env.${env}`
})

export const ENV = {
    BASE_URL : process.env.BASE_URL!,
    PassengerDetail : JSON.parse(
        process.env.PASSENGER_DETAIL!
    ) as PassengerDetails,
    BOARDING_CITY : process.env.BOARDING_CITY!,
    DESTINATION_CITY : process.env.DESTINATION_CITY!,
    DATE_OF_JOURNEY : process.env.DATE_OF_JOURNEY!
}