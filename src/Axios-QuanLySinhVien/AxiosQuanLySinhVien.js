import React, { Component } from "react";
import { connect } from "react-redux";
import DanhSachSinhVien from "./DanhSachSinhVien/DanhSachSinhVien";
import ModalSinhVien from "./ModalSinhVien/ModalSinhVien";
import { SET_DANH_SACH_SV } from "./Redux/constant/quanlySvConstant";
import { sinhVienServ } from "./SinhVienServ/sinhVienServ";

class AxiosQuanLySinhVien extends Component {
  state = {
    dssv: [],
  };
  componentDidMount() {
    let isSuccess = true;
    sinhVienServ
      .layDanhSachSinhVIen()
      .then((res) => {
        console.log(res);
        // this.setState({ dssv: res.data });
        this.props.setDssv(res.data);
        //xuathongbao
      })
      .catch((err) => {
        isSuccess = false;
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <p className="display-3 pt-2 text-center">Quản lý sinh viên</p>
        <ModalSinhVien />
        <DanhSachSinhVien />
      </div>
    );
  }
}

let mapDispatchtoProps = (dispatch) => {
  return {
    setDssv: (dssv) => {
      dispatch({
        type: SET_DANH_SACH_SV,
        payload: dssv,
      });
    },
  };
};

export default connect(null, mapDispatchtoProps)(AxiosQuanLySinhVien);

// let mapDispatch = (dispatch) => {
//   dispatch({ type: SET_DANH_SACH_SV });
// };

// let sayHello = (value) => {
//   console.log("yes", value);
// };

// mapDispatch(sayHello);
