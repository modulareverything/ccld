import React, { useState } from 'react'
import tw from 'tailwind.macro'

const Modal = () => {
  return (
    <div
      css={tw`fixed w-full h-full top-0 left-0 flex items-center justify-center`}
    >
      {/* Skrim */}
      <div css={tw`absolute w-full h-full bg-gray-500 opacity-50`}></div>

      {/* Modal */}
      <div
        css={tw`bg-white absolute w-11/12 md:max-w-md mx-auto rounded shadow-lg`}
      >
        {/* Close Icon */}
        <div
          css={tw`absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4`}
        >
          <svg
            class="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>

        {/* Modal Content */}
        <div css={tw`py-4`}>
          <h1 css={tw`text-2xl text-gray-800`}>Modal</h1>
        </div>
      </div>
    </div>
  )
}

const ModalWrapper = () => {
  const [on, toggle] = useState(false)
  return (
    <div>
      {on && <Modal />}
      <button onClick={() => toggle(true)}>Pop Up</button>
    </div>
  )
}

export default ModalWrapper
