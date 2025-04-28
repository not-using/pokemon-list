import { forwardRef } from 'react'

const Loader = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      className="loader mx-auto my-16 w-16 opacity-30"
      ref={ref}
      {...props}
    />
  )
})
export default Loader
