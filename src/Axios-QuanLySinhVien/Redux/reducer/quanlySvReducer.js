import {
  SET_DANH_SACH_SV,
  SUA_SINH_VIEN,
  THEM_SINH_VIEN,
  TIM_KIEM_SINH_VIEN,
  XOA_SINH_VIEN,
} from "../constant/quanlySvConstant";

const initialState = {
  dssv: [],

  editSinhVien: null,
};

export const quanlySvReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_SV:
      state.dssv = action.payload;
      return { ...state };
    case THEM_SINH_VIEN:
      let cloneArr = [...state.dssv];
      cloneArr.push(action.payload);
      state.dssv = cloneArr;
      return { ...state };
    case XOA_SINH_VIEN:
      let id = action.payload;

      let newcloneArr = [...state.dssv];
      let index = newcloneArr.findIndex((sv) => {
        return sv.id == id;
      });
      index !== -1 && newcloneArr.splice(index, 1);
      state.dssv = newcloneArr;
      return { ...state };
    case SUA_SINH_VIEN: {
      let editSinhVien = action.payload;

      // let cloneArr = [...state.dssv];

      // let index = cloneArr.findIndex((sv) => {
      //   return sv.id === editSinhVien.id;
      // });

      // if(index!==-1){

      // }
      state.editSinhVien = editSinhVien;

      return { ...state };
    }
    case TIM_KIEM_SINH_VIEN:
      return { ...state };
    default:
      return { ...state };
  }
};

// let sinhVien={
//   id:2093,
//   phone:""
//   email:""
//   phone:""
// }

// let eventName = "email";

// sinhVien = {...sinhVien,id:10}
