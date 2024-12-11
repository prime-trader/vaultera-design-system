import style from '../CopyEditButton.module.scss'

type Props = {
  onClick: () => void
}

const EditVar = ({ onClick }: Props) => {
  return (
    <div className={`${style.copyVar01} `} onClick={onClick}>
      <label>Edit</label> <EditIcon />
    </div>
  )
}

export default EditVar
const EditIcon = () => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_626_37803)">
        <path
          d="M15.8333 6.00001C16.0083 5.82491 16.2162 5.68602 16.445 5.59126C16.6738 5.4965 16.919 5.44772 17.1666 5.44772C17.4142 5.44772 17.6594 5.4965 17.8882 5.59126C18.117 5.68602 18.3248 5.82491 18.4999 6.00001C18.675 6.1751 18.8139 6.38297 18.9087 6.61175C19.0034 6.84052 19.0522 7.08572 19.0522 7.33334C19.0522 7.58096 19.0034 7.82616 18.9087 8.05494C18.8139 8.28371 18.675 8.49158 18.4999 8.66668L9.49992 17.6667L5.83325 18.6667L6.83325 15L15.8333 6.00001Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_626_37803">
          <rect width="16" height="16" fill="white" transform="translate(4.5 4)" />
        </clipPath>
      </defs>
    </svg>
  )
}
