import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SUA_SINH_VIEN,
  THEM_SINH_VIEN,
} from "../Redux/constant/quanlySvConstant";

class ModalSinhVien extends Component {
  state = {
    sinhVien: {
      id: "",
      name: "",
      email: "",
      phone: "",
    },
  };

  handleOnchange(e) {
    this.setState({
      sinhVien: { ...this.state.sinhVien, [e.target.name]: e.target.value },
    });
  }
  // UNSAFE_componentWillReceiveProps(nextProps) {}
  render() {
    console.log("editsv", this.props.editSinhVien);
    return (
      <div>
        <div>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#modelId"
            onClick={this.props.resetEditSinhVien}
          >
            Open Modal
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {this.props.editSinhVien
                      ? "Cập nhật sinh viên"
                      : "Thêm sinh viên"}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="id">Id</label>
                    <input
                      value={this.state.sinhVien.id}
                      type="text"
                      name="id"
                      id="id"
                      className="form-control"
                      // placeholder
                      aria-describedby="helpId"
                      onChange={(event) => {
                        this.handleOnchange(event);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Tên</label>
                    <input
                      value={this.state.sinhVien.name}
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      // placeholder="true"
                      aria-describedby="helpId"
                      onChange={(event) => {
                        this.handleOnchange(event);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      value={this.state.sinhVien.email}
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      // placeholder
                      aria-describedby="helpId"
                      onChange={(event) => {
                        this.handleOnchange(event);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      value={this.state.sinhVien.phone}
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      // placeholder
                      aria-describedby="helpId"
                      onChange={(event) => {
                        this.handleOnchange(event);
                      }}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      this.props.themSinhVien(this.state.sinhVien);
                    }}
                    type="button"
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sv) => {
      dispatch({
        type: THEM_SINH_VIEN,
        payload: sv,
      });
    },
    resetEditSinhVien: () => {
      dispatch({
        type: SUA_SINH_VIEN,
        payload: null,
      });
    },
  };
};

let mapStateToProps = (state) => {
  return {
    editSinhVien: state.quanlySvReducer.editSinhVien,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalSinhVien);
