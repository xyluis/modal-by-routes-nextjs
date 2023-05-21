import Modal from '@/components/Modal'

export default function ModalPage() {
  return (
    <Modal>
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="flex items-center justify-center gap-2">
          Here is the <code>/view</code> modal
        </h1>

        <span>
          Now, press <kbd>f5</kbd>
        </span>

        <span>
          To close, press <kbd>Esc</kbd>
        </span>
      </div>
    </Modal>
  )
}
