import React from 'react'
import style from './ToastNotification.module.scss'
import '../../../index.css'

type Props = {
  varient: string
  message: string
}

const Pagination = ({ varient = 'success', message }: Props) => {
  return (
    <div className={`${style.toast} ${style[varient]}`}>
      <div className={style.toastBody}>
        <div className={style.IconCon}>
          {varient == 'fail' ? (
            <FailedIcon />
          ) : varient == 'warning' ? (
            <WarningIcon />
          ) : (
            <SuccessIcon />
          )}
        </div>
        <div className={style.body}>
          <div className={style.topbar}>
            <h4>
              {' '}
              {varient == 'fail'
                ? 'Error message'
                : varient == 'warning'
                  ? 'Warning message'
                  : 'Success message'}
            </h4>
            <CloseIcon />
          </div>
          <label>{message}</label>
        </div>
      </div>
    </div>
  )
}

export default Pagination

const SuccessIcon = () => {
  return (
    <svg
      width="197"
      height="197"
      viewBox="0 0 197 197"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ minWidth: '197px', minHeight: '197px' }}
    >
      <path
        d="M80.8109 108.072C81.2623 112.291 84.6556 115.685 88.8727 116.155C92.0049 116.504 95.2209 116.804 98.4999 116.804C101.779 116.804 104.995 116.504 108.127 116.155C112.344 115.685 115.737 112.291 116.189 108.072C116.522 104.958 116.803 101.76 116.803 98.5001C116.803 95.2401 116.522 92.0425 116.189 88.928C115.737 84.7089 112.344 81.3156 108.127 80.8455C104.995 80.4964 101.779 80.1965 98.4999 80.1965C95.2209 80.1965 92.0049 80.4964 88.8727 80.8455C84.6556 81.3156 81.2623 84.7089 80.8109 88.928C80.4777 92.0425 80.1963 95.2401 80.1963 98.5001C80.1963 101.76 80.4777 104.958 80.8109 108.072Z"
        fill="white"
        fillOpacity="0.05"
      />
      <g filter="url(#filter0_ddd_20756_23886)">
        <path
          d="M80.8109 108.072C81.2623 112.291 84.6556 115.685 88.8727 116.155C92.0049 116.504 95.2209 116.804 98.4999 116.804C101.779 116.804 104.995 116.504 108.127 116.155C112.344 115.685 115.737 112.291 116.189 108.072C116.522 104.958 116.803 101.76 116.803 98.5001C116.803 95.2401 116.522 92.0425 116.189 88.928C115.737 84.7089 112.344 81.3156 108.127 80.8455C104.995 80.4964 101.779 80.1965 98.4999 80.1965C95.2209 80.1965 92.0049 80.4964 88.8727 80.8455C84.6556 81.3156 81.2623 84.7089 80.8109 88.928C80.4777 92.0425 80.1963 95.2401 80.1963 98.5001C80.1963 101.76 80.4777 104.958 80.8109 108.072Z"
          stroke="#5BF4AB"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter1_ddd_20756_23886)">
        <path
          d="M91.1787 100.33L96.5034 105.822C99.009 98.6241 101.096 95.4657 105.822 91.1787"
          stroke="#5BF4AB"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddd_20756_23886"
          x="0.896286"
          y="0.89653"
          width="195.207"
          height="195.207"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10.95" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.356863 0 0 0 0 0.956863 0 0 0 0 0.670588 0 0 0 0.2 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20756_23886" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="38.9" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.356863 0 0 0 0 0.956863 0 0 0 0 0.670588 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_20756_23886"
            result="effect2_dropShadow_20756_23886"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="21.7728" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.356863 0 0 0 0 0.956863 0 0 0 0 0.670588 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_20756_23886"
            result="effect3_dropShadow_20756_23886"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_20756_23886"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_ddd_20756_23886"
          x="11.8787"
          y="11.8787"
          width="173.243"
          height="173.243"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3.6288" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.356863 0 0 0 0 0.956863 0 0 0 0 0.670588 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20756_23886" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10.95" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.356863 0 0 0 0 0.956863 0 0 0 0 0.670588 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_20756_23886"
            result="effect2_dropShadow_20756_23886"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="38.9" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.356863 0 0 0 0 0.956863 0 0 0 0 0.670588 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_20756_23886"
            result="effect3_dropShadow_20756_23886"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_20756_23886"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
const FailedIcon = () => {
  return (
    <svg
      width="191"
      height="192"
      viewBox="0 0 191 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ minWidth: '192px', minHeight: '192px' }}
    >
      <g filter="url(#filter0_dd_20759_23930)">
        <path
          d="M79.4412 91.6557C82.9222 87.2107 86.6876 83.3168 90.9841 79.7194C93.5966 77.532 96.7289 77.5464 99.3438 79.7194C103.662 83.3079 107.419 87.191 110.894 91.6557C112.894 94.2262 112.907 97.4471 110.894 100.015C107.376 104.501 103.568 108.425 99.2146 112.051C96.766 114.09 93.644 114.076 91.1931 112.051C86.7898 108.412 82.9699 104.473 79.4412 99.9319C77.4755 97.4024 77.4622 94.1828 79.4412 91.6557Z"
          fill="white"
          fillOpacity="0.05"
        />
        <path
          d="M98.5747 111.282L99.1378 111.958L98.5747 111.282C96.4999 113.01 93.9144 113.002 91.8301 111.28C87.4836 107.688 83.7148 103.802 80.2308 99.3183L79.448 99.9265L80.2308 99.3182C78.5433 97.1468 78.5353 94.4343 80.2285 92.2723C83.6668 87.8818 87.3835 84.0383 91.6261 80.4861C92.7769 79.5226 93.991 79.0828 95.1618 79.0842C96.3335 79.0857 97.5503 79.5292 98.7047 80.4885L99.3438 79.7194L98.7047 80.4885C102.967 84.0306 106.674 87.8615 110.104 92.2698C111.826 94.482 111.834 97.1952 110.107 99.3981C106.632 103.829 102.873 107.702 98.5747 111.282Z"
          stroke="#CD2E54"
          strokeWidth="2"
        />
      </g>
      <path
        d="M79.4412 91.6557C82.9222 87.2107 86.6876 83.3168 90.9841 79.7194C93.5966 77.532 96.7289 77.5464 99.3438 79.7194C103.662 83.3079 107.419 87.191 110.893 91.6557C112.894 94.2262 112.907 97.4471 110.893 100.015C107.376 104.501 103.568 108.425 99.2146 112.051C96.766 114.09 93.644 114.076 91.1931 112.051C86.7898 108.412 82.9699 104.473 79.4412 99.9319C77.4755 97.4024 77.4622 94.1828 79.4412 91.6557Z"
        fill="white"
        fillOpacity="0.05"
        stroke="#CD2E54"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g filter="url(#filter1_ddd_20759_23930)">
        <path
          d="M95.3633 87.2754V97.5941Z"
          fill="white"
          fillOpacity="0.05"
          shapeRendering="crispEdges"
        />
        <path
          d="M95.3633 87.2754V97.5941"
          stroke="#FF5E5E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter2_ddd_20759_23930)">
        <path
          d="M95.3633 102.864V104.725Z"
          fill="white"
          fillOpacity="0.05"
          shapeRendering="crispEdges"
        />
        <path
          d="M95.3633 102.864V104.725"
          stroke="#FF5E5E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_20759_23930"
          x="0.161911"
          y="0.284225"
          width="190.037"
          height="191.09"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10.95" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.804167 0 0 0 0 0.180937 0 0 0 0 0.330512 0 0 0 0.2 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20759_23930" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="38.9" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.803922 0 0 0 0 0.180392 0 0 0 0 0.329412 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_20759_23930"
            result="effect2_dropShadow_20759_23930"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_20759_23930"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_ddd_20759_23930"
          x="50.8177"
          y="42.7298"
          width="89.0912"
          height="99.41"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.2576" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.803922 0 0 0 0 0.180392 0 0 0 0 0.329412 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20759_23930" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="21.7728" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.803922 0 0 0 0 0.180392 0 0 0 0 0.329412 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_20759_23930"
            result="effect2_dropShadow_20759_23930"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.804167 0 0 0 0 0.180937 0 0 0 0 0.330512 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_20759_23930"
            result="effect3_dropShadow_20759_23930"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_20759_23930"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_ddd_20759_23930"
          x="50.8177"
          y="58.3179"
          width="89.0912"
          height="90.953"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.2576" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.803922 0 0 0 0 0.180392 0 0 0 0 0.329412 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20759_23930" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="21.7728" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.803922 0 0 0 0 0.180392 0 0 0 0 0.329412 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_20759_23930"
            result="effect2_dropShadow_20759_23930"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.804167 0 0 0 0 0.180937 0 0 0 0 0.330512 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_20759_23930"
            result="effect3_dropShadow_20759_23930"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_20759_23930"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
const WarningIcon = () => {
  return (
    <svg
      width="193"
      height="193"
      viewBox="0 0 193 193"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ minWidth: '193px', minHeight: '193px' }}
    >
      <g filter="url(#filter0_dd_20759_23925)">
        <path
          d="M96.5003 113.583C105.935 113.583 113.584 105.935 113.584 96.5C113.584 87.0651 105.935 79.4166 96.5003 79.4166C87.0655 79.4166 79.417 87.0651 79.417 96.5C79.417 105.935 87.0655 113.583 96.5003 113.583Z"
          fill="white"
          fillOpacity="0.05"
        />
        <path
          d="M96.5003 113.583C105.935 113.583 113.584 105.935 113.584 96.5C113.584 87.0651 105.935 79.4166 96.5003 79.4166C87.0655 79.4166 79.417 87.0651 79.417 96.5C79.417 105.935 87.0655 113.583 96.5003 113.583Z"
          stroke="#FBBC05"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter1_ddd_20759_23925)">
        <path
          d="M96.5 89.6666V96.5"
          stroke="#FBBC05"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter2_ddd_20759_23925)">
        <path
          d="M96.5 103.333H96.5171"
          stroke="#FBBC05"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_20759_23925"
          x="0.116989"
          y="0.116623"
          width="192.767"
          height="192.767"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10.95" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.984314 0 0 0 0 0.737255 0 0 0 0 0.0196078 0 0 0 0.2 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20759_23925" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="38.9" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.984314 0 0 0 0 0.737255 0 0 0 0 0.0196078 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_20759_23925"
            result="effect2_dropShadow_20759_23925"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_20759_23925"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_ddd_20759_23925"
          x="17.2"
          y="10.3666"
          width="158.6"
          height="165.433"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3.6288" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.984314 0 0 0 0 0.737255 0 0 0 0 0.0196078 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20759_23925" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10.95" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.984314 0 0 0 0 0.737255 0 0 0 0 0.0196078 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_20759_23925"
            result="effect2_dropShadow_20759_23925"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="38.9" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.984314 0 0 0 0 0.737255 0 0 0 0 0.0196078 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_20759_23925"
            result="effect3_dropShadow_20759_23925"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_20759_23925"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_ddd_20759_23925"
          x="17.2"
          y="24.0334"
          width="158.617"
          height="158.6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3.6288" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.984314 0 0 0 0 0.737255 0 0 0 0 0.0196078 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20759_23925" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10.95" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.984314 0 0 0 0 0.737255 0 0 0 0 0.0196078 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_20759_23925"
            result="effect2_dropShadow_20759_23925"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="38.9" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.984314 0 0 0 0 0.737255 0 0 0 0 0.0196078 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_20759_23925"
            result="effect3_dropShadow_20759_23925"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_20759_23925"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
const CloseIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 6L18 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
