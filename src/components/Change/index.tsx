import './styles.scss'

type Props = {
  value: number
  percentage?: boolean
}

export function Change({ value, percentage = false }: Props) {
  const isPositive = value >= 0

  return (
    <span className={isPositive ? 'change--green' : 'change--red'}>
      {isPositive && '+'}
      {value}
      {percentage && '%'}
    </span>
  )
}
