import '../final.css';
import Sidebar from './sidebar';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import Admin_Queries from "../admin/admin_queries";
import Cust_Queries from "../customer/cust_queries";
import Cust_Dashboard from "../customer/cust_dashboard";
import Cust_Scheduler from "../customer/cust_schedule";
import {
    AboutUs,
    OurAim,
    OurVision,
    Services,
    ServicesOne
} from '../content/about';

import Edit_Proposal from '../tl/tl_edit_proposal';
import Tl_Proposal_Tabs from '../tl/tl_proposal_tabs';
import Admin_TP from '../admin/admin_tp';
import Admin_Add_TP from '../admin/admin-add-tp';


function Final(props) {
    console.log(props);
    return(
        <>
                <Sidebar {...props}/>
                <Switch>
                    <Route path="/customer/dashboard"  exact component={Cust_Dashboard} />
                    <Route path="/customer/queries" exact component={Cust_Queries} />
                    <Route path="/customer/proposal" exact component={OurVision} />
                    <Route path="/customer/assignment" exact component={Services} />
                    <Route path="/customer/schedule" exact component={Cust_Scheduler} />
                    <Route path="/customer/feedback" exact component={ServicesOne} />
                    <Route path="/admin/dashboard"  exact component={AboutUs} />
                    <Route path="/admin/queries" exact component={Admin_Queries} />
                    <Route path="/admin/tax-professionals" exact component={Admin_TP} />
                    <Route path="/admin/tax-professionals/add-tp" exact component={Admin_Add_TP} />
                    <Route path="/admin/proposal" exact component={OurVision} />
                    <Route path="/admin/assignment" exact component={Services} />
                    <Route path="/tl/dashboard"  exact component={AboutUs} />
                    <Route path="/tl/queries" exact component={OurAim} />
                    <Route path="/tl/proposal" exact component={Tl_Proposal_Tabs} />
                    <Route path="/tl/proposal/edit-proposal/:proposal_id" exact component={Edit_Proposal} />
                    <Route path="/tl/assignment" exact component={Services} />
                    <Route path="/tp/dashboard"  exact component={AboutUs} />
                    <Route path="/tp/queries" exact component={OurAim} />
                    <Route path="/tp/proposal" exact component={OurVision} />
                    
                    <Route path="/tp/assignment" exact component={Services} />
                </Switch>
        </>
    );
}

export default Final;