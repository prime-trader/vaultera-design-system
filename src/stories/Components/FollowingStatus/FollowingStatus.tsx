import React from "react";
import style from "./FollowingStatus.module.scss";
type Props = {
  varient: string;
};

const FollowingStatus = (props: Props) => {
  return (
    <div className={`${style.FollowingStatus} ${style[props.varient]}`}>
      <label>
        {props.varient == "following"
          ? "Following"
          : props.varient == "resend"
            ? "Resend"
            : "Not Following"}
      </label>
    </div>
  );
};

export default FollowingStatus;
