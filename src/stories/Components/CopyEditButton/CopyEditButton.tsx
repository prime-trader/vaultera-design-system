import { useState } from "react";
import style from "./CopyEditButton.module.scss";
import "../../../index.css";
import CopyVar01 from "./component/CopyVar01";
import CopyVar02 from "./component/CopyVar02";
import EditVar from "./component/EditBtn";

type Props = {
  varient: string;
  value?: string;
  onEdit?: () => void;
};

const CopyEditButton = ({ varient = "copyvar1", value, onEdit }: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleCopy = async () => {
    try {
      // Attempt to copy the value to clipboard
      await navigator.clipboard.writeText(value ?? "");
      setIsCopied(true); // Update copied state
      setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className={style.btn}>
      {varient == "copyvar1" ? (
        <CopyVar01 isCopied={isCopied} onClick={handleCopy} />
      ) : varient == "copyvar2" ? (
        <CopyVar02 isCopied={isCopied} onClick={handleCopy} />
      ) : (
        <EditVar onClick={onEdit ?? (() => {})} />
      )}
    </div>
  );
};

export default CopyEditButton;
