import { EnumWidgetId } from "../@types/Widget";


// Generic links.
export const GetContactPageLink = () => '/contact';

// Widget links.
export const GetAcnValidatorLink = () => `/widgets/${EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_VALIDATOR}/australian-company-number-validator`;
export const GetAcnGeneratorLink = () => `/widgets/${EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_GENERATOR}/australian-company-number-generator`;
export const GetTfnValidatorLink = () => `/widgets/${EnumWidgetId.AUSTRALIAN_TAX_FILE_NUMBER_VALIDATOR}/australian-company-number-validator`;
export const GetTfnGeneratorLink = () => `/widgets/${EnumWidgetId.AUSTRALIAN_TAX_FILE_NUMBER_GENERATOR}/australian-tax-file-number-generator`;
