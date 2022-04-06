import {
  LUU_SINH_VIEN,
  SET_DANH_SACH_SV,
  SUA_SINH_VIEN,
  THEM_SINH_VIEN,
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
        return sv.id === id;
      });
      index !== -1 && newcloneArr.splice(index, 1);
      state.dssv = newcloneArr;
      return { ...state };
    case SUA_SINH_VIEN: {
      state.editSinhVien = action.payload;
      return { ...state };
    }
    case LUU_SINH_VIEN:
      // state.editSinhVien = { ...state.editSinhVien };
      let newcloneArr2 = [...state.dssv];
      let index2 = newcloneArr2.findIndex((sv) => {
        return sv.id === state.editSinhVien.id;
      });
      if (index2 !== -1) {
        newcloneArr2[index2] = state.editSinhVien;
        // console.log("editSV", state.editSinhVien);
      }
      // state.editSinhVien = editSinhVien;
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
