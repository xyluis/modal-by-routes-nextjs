import { Button } from '@/components/Button'

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-6">
        <Button href="/view">Click here</Button>

        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/xyluis/modal-by-routes-nextjs"
            className="text-white decoration-blue-500 underline-offset-2 hover:underline"
          >
            Github
          </a>
        </div>
      </div>
    </main>
  )
}
