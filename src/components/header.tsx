import React from 'React'

interface Props {
  title: string
}

const Header = (props: Props): JSX.Element => {
  const { title } = props
  return <h1>{title}</h1>
}

export default Header
