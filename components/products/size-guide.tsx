import CloseIcon from "icons/CloseIcon";
import React from "react";
import css from "../../styles/product.module.scss";

interface SizeGuideProps {
  onClose: () => void;
}

function SizeGuide({ onClose }: SizeGuideProps) {
  return (
    <>
      <div className={css["size-parent"]}>
        <div className={css["cross-btn"]} onClick={onClose}>
          <a>
            <CloseIcon size={30} color="#fff" />
          </a>
        </div>
        <div className={css["size-table"]}>
          <table>
            <tr>
              <th>BED SIZE</th>
              <th>LENGTH</th>
              <th>WIDTH</th>
              <th>BASE HEIGHT</th>
            </tr>

            <tbody className={css.table_data}>
              <tr>
                <td>3 FT (SINGLE)</td>
                <td>
                  <tr>190CM </tr>
                  <tr>75 INCHES</tr>
                  <tr>6.25FT</tr>
                </td>
                <td>
                  <tr>90CM</tr>
                  <tr>35 INCHES</tr>
                  <tr>2.95FT</tr>
                </td>
                <td>
                  <tr>30CM</tr>
                  <tr>12 INCHES</tr>
                  <tr>1FT</tr>
                </td>
              </tr>
              <tr>
                <td>4 FT (SMALL DOUBLE)</td>
                <td>
                  <tr>190CM</tr>
                  <tr>75 INCHES</tr>
                  <tr>6.25FT</tr>
                </td>
                <td>
                  <tr>120CM</tr>
                  <tr>47 INCHES</tr>
                  <tr>3.9FT</tr>
                </td>
                <td>
                  <tr>30CM</tr>
                  <tr>12 INCHES</tr>
                  <tr>1FT</tr>
                </td>
              </tr>
              <tr>
                <td>4 FT6 (DOUBLE)</td>
                <td>
                  <tr>190CM</tr>
                  <tr>75 INCHES</tr>
                  <tr>6.25FT</tr>
                </td>
                <td>
                  <tr>135CM</tr>
                  <tr>53 INCHES</tr>
                  <tr>4.4FT</tr>
                </td>
                <td>
                  <tr>30CM</tr>
                  <tr>12 INCHES</tr>
                  <tr>1FT</tr>
                </td>
              </tr>
              <tr>
                <td>5FT (KING)</td>
                <td>
                  <tr>200CM</tr>
                  <tr>79 INCHES</tr>
                  <tr>6.6FT</tr>
                </td>
                <td>
                  <tr>150CM</tr>
                  <tr>59 INCHES</tr>
                  <tr>4.9FT</tr>
                </td>
                <td>
                  <tr>30CM</tr>
                  <tr>12 INCHES</tr>
                  <tr>1FT</tr>
                </td>
              </tr>
              <tr>
                <td>6FT (SUPER KING)</td>
                <td>
                  <tr>200CM</tr>
                  <tr>79 INCHES</tr>
                  <tr>6.6FT</tr>
                </td>
                <td>
                  <tr>180CM</tr>
                  <tr>71 INCHES</tr>
                  <tr>6FT</tr>
                </td>
                <td>
                  <tr>30CM</tr>
                  <tr>12 INCHES</tr>
                  <tr>1FT</tr>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th rowSpan={2}>DRAW DIMENSION</th>
                <th>LENGTH</th>
                <th>WIDTH</th>
                <th>DEPTH</th>
              </tr>
              <tr>
                <td>20.9 INCHES / 53CM</td>
                <td>20.9 INCHES / 75CM</td>
                <td>20.9 INCHES / 18CM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SizeGuide;
