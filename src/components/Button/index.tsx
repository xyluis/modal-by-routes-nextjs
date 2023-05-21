import { VariantProps } from 'class-variance-authority'
import { ButtonStyle } from './styles'
import { PropsWithChildren } from 'react'
import { cn } from '@/utils/cn'
import Link, { LinkProps } from 'next/link'

type Props = VariantProps<typeof ButtonStyle> &
  PropsWithChildren<{}> &
  LinkProps

export function Button({ children, href, ...rest }: Props) {
  return (
    <Link href={href} className={cn(ButtonStyle())} {...rest}>
      {children}
    </Link>
  )
}
