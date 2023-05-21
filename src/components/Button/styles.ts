import { cva } from 'class-variance-authority'

export const ButtonStyle = cva([
  'font-bold',
  'bg-blue-500',
  'text-white',
  'px-4',
  'py-2',
  'rounded-md',
  'transition-colors',
  'hover:bg-blue-600',
])
