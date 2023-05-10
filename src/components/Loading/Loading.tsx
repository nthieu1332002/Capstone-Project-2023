// import { Spin } from "antd";
import CircularProgress from '@mui/material/CircularProgress';
import "./style.scss";

const Loading = () => {
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  );
};

export default Loading;
