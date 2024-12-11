import style from '../CopyEditButton.module.scss'

type Props = {
  isCopied: boolean
  onClick: () => void
}

const CopyVar02 = ({ isCopied, onClick }: Props) => {
  return (
    <>
      {' '}
      <div
        className={`${style.copyVar01} ${isCopied && style['contentVar02copied']}`}
        onClick={onClick}
      >
        {isCopied ? (
          <>
            {' '}
            <label>Copied!</label> <CopiedIcon />
          </>
        ) : (
          <>
            <label>Copy Link</label> <CopyIcon />
          </>
        )}
      </div>
      {isCopied && (
        <>
          {' '}
          <div className={`${style['dot']} ${style['dot01']}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
            >
              <path
                d="M4.5 4.5L1.5 2"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={`${style['dot']} ${style['dot02']}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="3"
              viewBox="0 0 6 3"
              fill="none"
            >
              <path
                d="M4.5 1.5H2"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={`${style['dot']} ${style['dot03']}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
            >
              <path
                d="M1.5 4.5L4.5 2"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={`${style['dot']} ${style['dot04']}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="4"
              viewBox="0 0 7 4"
              fill="none"
            >
              <path
                d="M2 2H5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </>
      )}
    </>
  )
}

export default CopyVar02
const CopyIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.3077 15H10.6923C9.75767 15 9 14.1046 9 13V4C9 2.89543 9.75767 2 10.6923 2H18.3077C19.2423 2 20 2.89543 20 4V13C20 14.1046 19.2423 15 18.3077 15Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.53846 8H5.69231C5.24348 8 4.81303 8.21071 4.49567 8.58579C4.1783 8.96086 4 9.46957 4 10V19C4 19.5304 4.1783 20.0391 4.49567 20.4142C4.81303 20.7893 5.24348 21 5.69231 21H13.3077C13.7565 21 14.187 20.7893 14.5043 20.4142C14.8217 20.0391 15 19.5304 15 19V18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const CopiedIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_20464_228024)">
        <path
          d="M12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z"
          fill="#3EFFA3"
        />
        <path
          d="M16.455 7.45499L16.425 7.48799L11.2155 14.1255L8.07602 10.9845C7.86276 10.7858 7.58069 10.6776 7.28924 10.6827C6.99778 10.6879 6.71971 10.8059 6.51359 11.0121C6.30747 11.2182 6.1894 11.4963 6.18426 11.7877C6.17911 12.0792 6.2873 12.3612 6.48602 12.5745L10.455 16.545C10.5619 16.6517 10.6893 16.7358 10.8294 16.7923C10.9695 16.8487 11.1196 16.8764 11.2706 16.8736C11.4217 16.8708 11.5706 16.8376 11.7086 16.776C11.8465 16.7144 11.9706 16.6256 12.0735 16.515L18.0615 9.02999C18.2654 8.81599 18.3769 8.53034 18.3719 8.2348C18.3668 7.93925 18.2457 7.65757 18.0346 7.45063C17.8235 7.2437 17.5395 7.12816 17.2439 7.12897C16.9483 7.12979 16.6649 7.2469 16.455 7.45499Z"
          fill="#3EFFA3"
        />
      </g>
      <defs>
        <clipPath id="clip0_20464_228024">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
