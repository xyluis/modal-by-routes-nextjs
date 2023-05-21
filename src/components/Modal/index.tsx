'use client'
import {
  useCallback,
  useEffect,
  ReactNode,
  createRef,
  MouseEventHandler,
} from 'react'
import { useRouter } from 'next/navigation'

interface ModalProps {
  children: ReactNode
}

export default function Modal({ children }: ModalProps) {
  const overlay = createRef<HTMLDivElement>()
  const wrapper = createRef<HTMLDivElement>()
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper],
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss],
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <div
      ref={overlay}
      className="fixed bottom-0 left-0 right-0 top-0 z-10 mx-auto bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded border border-zinc-700 bg-zinc-800 p-6 sm:w-10/12 md:w-8/12 lg:w-1/2"
      >
        {children}
      </div>
    </div>
  )
}
