import React,{useState, useEffect} from "react";
import axios from "axios";
import {Table} from "antd";
import {Link} from "react-router-dom";
import "./admin.css";
import "../final.css";

function Admin_TP(){
    const url = "https://mazarsapi.multitvsolution.com/mazarapi/v1/tp/getTaxProfessional"
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
      const users = await axios.get(url);
      console.log(users.data);
      const art = users.data.result;
      const new_arr = art.map((row,idx) => ({...row, index:idx+1}));

      setData(new_arr);
  };
  const columns = [
    {
      title: "S/No",
      dataIndex: "index",
      key: "index",
      width: "4%"
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email"
    },
    {
        title: "Phone",
        dataIndex: "phone",
        key: "phone"
    },
    {
        title: "Category name",
        dataIndex: "cat_name"
    },
    ]

    return(
        <div className="home">
            <div className="admin-tp">
                <div className="header">
                    <h2 className="heading">Tax Professionls</h2>
                    <button className="btn"><Link to="/admin/tax-professionals/add-tp" className="btn-link">Add</Link></button>
                </div>
                <div className="admin_table">
                    <Table
                    className= "table table-bordered"
                    columns={columns}
                    size="small"
                    dataSource={data}
                    />
                </div>
            </div>
        </div>
    );
}

export default Admin_TP;