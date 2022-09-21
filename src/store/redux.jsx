import { configureStore} from "@reduxjs/toolkit/";
import destinationSlice from "./destinationSlice";
import menuSlice from "./menuSlice";

export const store = configureStore({
    reducer : {
        menu: menuSlice,
        destination: destinationSlice,
    },
});
   