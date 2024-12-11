import React from "react";
import styles from "./skeleton.module.scss";

interface SkeletonProps {
  loading: boolean;
  height?: string | number;
  width?: string | number;
  borderRadius?: string | number;
  children?: React.ReactNode;
  className?: string;
  loadingStyle?: "shimmer" | "pulse";
}

const Skeleton: React.FC<SkeletonProps> = ({
  loading,
  height = "100px",
  width = "100px",
  borderRadius = "4px",
  children,
  className = "",
  loadingStyle = "pulse",
}) => {
  const containerStyles = {
    height: typeof height === "number" ? `${height}px` : height,
    width: typeof width === "number" ? `${width}px` : width,
    borderRadius:
      typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius,
  };

  const animationClass =
    loadingStyle === "pulse"
      ? "animate-pulse bg-gray-300"
      : styles["animate-shimmer"];

  return (
    <div className={`${animationClass} ${className}`} style={containerStyles}>
      {children && loading && (
        <div className="relative flex items-center justify-center h-full w-full">
          {children}
        </div>
      )}
    </div>
  );
};

export default Skeleton;
