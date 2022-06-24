import React from "react";
import { ToastContainer, Slide } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import {Switch,Route,HashRouter} from "react-router-dom";
import BillList from "./Component/Admin/ViewBills.js";
import ClaimInsert from "./Component/Admin/AddClaim.js";
import Login from "./Component/Admin/Login";
import MyProvider from "./Component/contextapi/MyProvider";
import ClaimId from "./Component/Admin/ViewClaim.js";

function App() {
  return (
    <MyProvider>
    <div>
      <ToastContainer
          transition={Slide}
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
        />
    <HashRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/billList" component={BillList} />
          <Route exact path="/createClaim" component={ClaimInsert} />
          <Route exact path="/viewClaim" component={ClaimId} />
          
        </Switch>
      </HashRouter>
    </div>
</MyProvider>
  );
}

export default App;
