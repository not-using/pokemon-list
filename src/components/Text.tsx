type Props = {
  type?: 'title' | 'subtitle' | 'normal'
  children: string
  className?: string
}

const Text = ({ type = 'normal', children, className }: Props) => {
  switch (type) {
    case 'title':
      return <h1 className={`${className} text-4xl font-bold`}>{children}</h1>
    case 'subtitle':
      return (
        <h3 className={`${className} text-2xl font-semibold`}>{children}</h3>
      )
    case 'normal':
      return <p className={`${className} text-base font-normal`}>{children}</p>
  }
}

export default Text
