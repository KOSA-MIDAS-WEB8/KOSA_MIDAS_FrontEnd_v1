import { atom } from "recoil";
export const editDataState = atom({
  key: "editDateState",
  default: {
    name: "",
    core_time_start: -1,
    core: -1,
    core_time_hours: -1,
    work_hour: -1,
    default_start_hour: -1,
    default: -1,
  },
});
