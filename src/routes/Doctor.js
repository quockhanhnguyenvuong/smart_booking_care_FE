import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import ManageSchedule from "../containers/System/Doctor/ManageSchedule";
import Header from "../containers/Header/Header";
import ManageDocTor from "../containers/System/Admin/ManageDoctor";
import ManagePatient from "../containers/System/Doctor/ManagePatient";
import HistoryManage from "../containers/System/Doctor/HistoryManage";
import ManagePatientAtHome from "../containers/System/Doctor/ManagePatientAtHome";
class Home extends Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <React.Fragment>
        {isLoggedIn && <Header />}
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route
                path="/doctor/manage-schedule"
                component={ManageSchedule}
              />
              <Route path="/doctor/manage-patient" component={ManagePatient} />
              <Route path="/doctor/manage-doctor" component={ManageDocTor} />
              <Route path="/doctor/manage-history" component={HistoryManage}/>
              <Route
                path="/doctor/manage-patient-at-home"
                component={ManagePatientAtHome}
              />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
