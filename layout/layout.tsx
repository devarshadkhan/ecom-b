import React from "react";
import css from "styles/admin.module.scss";
import Sidebar from "./sidebar";

const AdminLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className={css.container}>
      <Sidebar />
      <div className={css.content}>{children}</div>
    </div>
  );
};
export default AdminLayout;
