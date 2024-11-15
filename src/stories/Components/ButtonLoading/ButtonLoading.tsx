import React, { ComponentProps } from "react";
import clsx from "clsx"; // For conditional class names
import style from "./ButtonLoading.module.scss";
import "../../../index.css";
import Button from "../Button/Button";

type ButtonProps = ComponentProps<typeof Button>;

type LoaderButtonProps = {
  loading_percentage?: number;
};

type ButtonLoadingProps = ButtonProps & LoaderButtonProps;

const ButtonLoading: React.FC<ButtonLoadingProps> = ({
  label,
  onClick,
  size = "150px",
  icon,
  tags,
  type = "button",
  loading_percentage = 10,
}) => {
  const gradientBackground = `linear-gradient(90deg, rgba(211, 118, 255, 1) ${
    loading_percentage - 0.1
  }%, rgba(160, 247, 255, 0) ${loading_percentage}%)`;

  return (
    <div
      className={style.LoaderBtn}
      style={{
        background: gradientBackground,
        padding: loading_percentage < 100 ? "2px" : "0",
        width: size,
      }}
    >
      <Button
        label={label}
        onClick={onClick}
        disabled={loading_percentage < 100}
        variant={"primary"}
        size={"100%"}
        icon={icon}
        tags={tags}
        type={type}
      />
    </div>
  );
};

export default ButtonLoading;
