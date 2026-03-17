import { EnumWidgetId } from "../@types/Widget";


// Generic links.
export const GetContactPageLink = () => '/contact';

// Widget links.
export const GetAcnValidatorLink = () => `/widgets/${EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_VALIDATOR}/australian-company-number-validator`;
export const GetAcnGeneratorLink = () => `/widgets/${EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_GENERATOR}/australian-company-number-generator`;
export const GetTfnValidatorLink = () => `/widgets/${EnumWidgetId.AUSTRALIAN_TAX_FILE_NUMBER_VALIDATOR}/australian-tax-file-number-validator`;
export const GetTfnGeneratorLink = () => `/widgets/${EnumWidgetId.AUSTRALIAN_TAX_FILE_NUMBER_GENERATOR}/australian-tax-file-number-generator`;
export const GetIrdGeneratorLink = () => `/widgets/${EnumWidgetId.NEW_ZEALAND_IRD_GENERATOR}/new-zealand-ird-number-generator`;
export const GetIrdValidatorLink = () => `/widgets/${EnumWidgetId.NEW_ZEALAND_IRD_VALIDATOR}/new-zealand-ird-number-validator`;
export const GetAbnValidatorLink = () => `/widgets/${EnumWidgetId.AUSTRALIAN_BUSINESS_NUMBER_VALIDATOR}/australian-business-number-validator`;
export const GetAbnGeneratorLink = () => `/widgets/${EnumWidgetId.AUSTRALIAN_BUSINESS_NUMBER_GENERATOR}/australian-business-number-generator`;
export const GetMedicareValidatorLink = () => `/widgets/${EnumWidgetId.AUSTRALIAN_MEDICARE_NUMBER_VALIDATOR}/australian-medicare-number-validator`;
export const GetMedicareGeneratorLink = () => `/widgets/${EnumWidgetId.AUSTRALIAN_MEDICARE_NUMBER_GENERATOR}/australian-medicare-number-generator`;
export const GetIrdV2GeneratorLink = () => `/widgets/${EnumWidgetId.NEW_ZEALAND_IRD_V2_GENERATOR}/new-zealand-ird-number-generator-post-april-2026`;
export const GetIrdV2ValidatorLink = () => `/widgets/${EnumWidgetId.NEW_ZEALAND_IRD_V2_VALIDATOR}/new-zealand-ird-number-validator-post-april-2026`;
export const GetNzBankAccountValidatorLink = () => `/widgets/${EnumWidgetId.NEW_ZEALAND_BANK_ACCOUNT_VALIDATOR}/new-zealand-bank-account-validator`;
export const GetNzbnGeneratorLink = () => `/widgets/${EnumWidgetId.NEW_ZEALAND_BUSINESS_NUMBER_GENERATOR}/new-zealand-business-number-generator`;
export const GetNzbnValidatorLink = () => `/widgets/${EnumWidgetId.NEW_ZEALAND_BUSINESS_NUMBER_VALIDATOR}/new-zealand-business-number-validator`;
export const GetAuBsbValidatorLink = () => `/widgets/${EnumWidgetId.AUSTRALIAN_BSB_VALIDATOR}/australian-bsb-validator`;
export const GetIbanValidatorLink = () => `/widgets/${EnumWidgetId.IBAN_VALIDATOR}/iban-validator`;