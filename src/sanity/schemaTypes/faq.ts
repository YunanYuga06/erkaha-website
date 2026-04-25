import { defineField, defineType } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

export const faqType = defineType({
  name: 'faq',
  title: 'Tanya Jawab (FAQ)',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({ name: 'question', title: 'Pertanyaan', type: 'string' }),
    defineField({ name: 'answer', title: 'Jawaban', type: 'text', rows: 3 }),
  ],
})