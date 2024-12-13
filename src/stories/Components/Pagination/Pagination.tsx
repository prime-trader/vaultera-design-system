import style from './Pagination.module.scss'
type Props = React.HTMLAttributes<HTMLDivElement>

const Pagination = ({ className, ...rest }: Props) => {
  return (
    <div className={`${style.Pagination} ${className}`} {...rest}>
      <div className={`${style.box} ${style.diabled}`}>
        <LeftArrowIcon />
      </div>
      <div className={`${style.box} ${style.selected}`}>
        <label htmlFor="page-1">1</label>
      </div>
      <div className={style.box}>
        <label htmlFor="page-2">2</label>
      </div>
      <div className={style.box}>
        <label htmlFor="page-3">...</label>
      </div>
      <div className={style.box}>
        <label htmlFor="page-10">10</label>
      </div>
      <div className={style.box}>
        <RightArrowIcon />
      </div>
    </div>
  )
}

export default Pagination

const LeftArrowIcon = () => {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.56 12L11.5 11.06L8.44667 8L11.5 4.94L10.56 4L6.56 8L10.56 12Z" fill="white" />
    </svg>
  )
}

const RightArrowIcon = () => {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.44 12L5.5 11.06L8.55333 8L5.5 4.94L6.44 4L10.44 8L6.44 12Z" fill="white" />
    </svg>
  )
}
