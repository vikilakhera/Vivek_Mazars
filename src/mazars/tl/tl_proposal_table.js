import React,{useState, useEffect} from "react";
import axios from "axios";
import {Table, Space} from "antd";
import {AiFillEdit} from "react-icons/ai";
import {Link, withRouter} from "react-router-dom";
import "../final.css";
import "./tl.css";

function Tl_Proposal_Table() {
    const url = "https://mazarsapi.multitvsolution.com/mazarapi/v1/tl/getProposalTl?id=128"
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    useEffect(() => {
        getData();
        setId(data.id);
        
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
          title: "Date",
          dataIndex: "query_date",
          key: "query_date"
      },
      {
          title: "Query No",
          dataIndex: "assign_no",
          key: "assign_no"
      },
      {
          title: "Category",
          dataIndex: "parent_id",
          key: "parent_id"
      },
      {
          title: "Sub Category",
          dataIndex: "cat_name"
      },
      {
          title: "Customer Name",
          dataIndex: "name"
      },
      {
          title: "Status",
          dataIndex: "status"
      },
      {
        title: 'Action',
        key: 'action',
        render: (text) => (
          <Space size="middle">
            <Link style={{color: "blue"}} to={{pathname:`/tl/proposal/edit-proposal/${text.id}`, idprop:{
              id: text.id
            }}} ><AiFillEdit/>Edit</Link>
          </Space>
        )
      }
  ]

  return(
      <div>
          <div className="tl_table">
              <Table
                className= "table table-bordered"
                columns={columns}
                size="small"
                dataSource={data}
              />
          </div>
      </div>
  );
}

export default withRouter(Tl_Proposal_Table);