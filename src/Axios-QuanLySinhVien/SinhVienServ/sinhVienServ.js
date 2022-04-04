import axios from "axios";

const BASE_URL = "https://62179cc271e7672e53858103.mockapi.io/sv";
export const sinhVienServ = {
  layDanhSachSinhVIen: () => {
    return axios({
      method: "GET",
      url: BASE_URL,
    });
  },
};
