import { type SchemaTypeDefinition } from 'sanity'
import { portfolioType } from './portofolio'
import { serviceType } from './service'
import { testimonialType } from './testimonial' 
import { siteSettingsType } from './siteSetting'
import { uspType } from './usp'
import { faqType } from './faq'
import { sizeChartType } from './sizeChart'
import { partnerLogoType } from './partnerLogo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioType, serviceType, testimonialType, siteSettingsType, uspType, faqType, sizeChartType, partnerLogoType],
}
