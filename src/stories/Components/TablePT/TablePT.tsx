import React from "react";
import style from "./TablePT.module.scss";
type Props = {};

const TablePT = (props: Props) => {
  return (
    <div className={style.table}>
      <table>
        <thead>
          <tr>
            <th>
              <div className={style.th_con}>
                <label>Colum Title 1</label>
                <SortIcon />
              </div>
            </th>
            <th>
              <div className={style.th_con}>
                <label>Colum Title 1</label>
                <SortIcon />
              </div>
            </th>
            <th>
              <div className={style.th_con}>
                <label>Colum Title 1</label>
                <SortIcon />
              </div>
            </th>
            <th>
              <div className={style.th_con}>
                <label>Colum Title 1</label>
                <SortIcon />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
            <td>
              {" "}
              <div className={style.td_con}>Content</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablePT;

const SortIcon = () => {
  return (
    <svg
      width="15"
      height="23"
      viewBox="0 0 15 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.125 9.25L7.625 5.75L11.125 9.25"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.125 13.75L7.625 17.25L11.125 13.75"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
