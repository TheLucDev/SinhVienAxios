import React, { Component } from "react";
import { connect } from "react-redux";
import {
  LUU_SINH_VIEN,
  SUA_SINH_VIEN,
  XOA_SINH_VIEN,
} from "../Redux/constant/quanlySvConstant";

class ItemSinhVien extends Component {
  render() {
    let { sv } = this.props;
    return (
      <tr>
        <td>{sv.id}</td>
        <td>{sv.name}</td>
        <td>{sv.email}</td>
        <td>{sv.phone}</td>
        <td className="flex">
          <button
            data-toggle="modal"
            data-target="#modelId"
            className="btn btn-success mr-1"
            onClick={() => {
              this.props.suaSinhVien(sv);
            }}
          >
            Sửa
          </button>
          <button
            onClick={() => {
              this.props.xoaSinhVien(sv.id);
            }}
            className="btn btn-danger"
          >
            Xoá
          </button>
        </td>
      </tr>
    );
  }
}

// let mapDispatchToProps=(dispatch)=>{

// }

let mapDispatchToProps = (dispatch) => {
  return {
    xoaSinhVien: (id) => {
      dispatch({
        type: XOA_SINH_VIEN,
        payload: id,
      });
    },
    suaSinhVien: (sv) => {
      dispatch({
        type: SUA_SINH_VIEN,
        payload: sv,
      });
    },
    capNhatSinhVien: (sv) => {
      dispatch({
        type: LUU_SINH_VIEN,
        payload: sv,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemSinhVien);
