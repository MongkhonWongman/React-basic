import { createBrowserRouter } from "react-router-dom";
import APP from '../Components/App';
import FOR_PHP from '../Components/Get-api-for-php/Get-api-for-php';
import FOR_TOMCAT from '../Components/Get-api-for-tomcat-service/Get-api-for-tomcat-service';

export const router = createBrowserRouter([
  {
    path: `/`,
    element: <APP />
  },
  {
    path: `/for-php`,
    element: <FOR_PHP />
  },
  {
    path: `/for-tomcat-service`,
    element: <FOR_TOMCAT />
  }
]);