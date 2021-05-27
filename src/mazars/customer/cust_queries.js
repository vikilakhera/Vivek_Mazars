import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Table} from 'antd';
import "./customer.css";

export default function Cust_Queries(){
    const queryUrl = "https://mazarsapi.multitvsolution.com/mazarapi/v1/customers/incompleteAssignments?user=93";
      const [queryData, setQueryData] = useState([]);
  
      useEffect(() => {
          getQueryData();
      }, []);
  
      const getQueryData = async () => {
        const users = await axios.get(queryUrl);
        console.log(users.data);
        const art = users.data.result;
        const new_arr = art.map((row,idx) => ({...row, index:idx+1}));

        setQueryData(new_arr);
    };

    
    
    const columns = [
      {
        title: "S/No",
        dataIndex: "index",
        key: "index",
        width: "4%"
        
      },
      {
        title: "Status Code",
        dataIndex: "status_code",
        key: "status_code",
        sorter: {
            compare: (a,b) => a.status_code - b.status_code,
            multiple: 1,
        },
      },
      {
        title: "Id",
        dataIndex: "id",
        key: "id",
        sorter: {
            compare: (a,b) => a.id - b.id,
            multiple: 2,
        },
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        sorter: {
            compare: (a,b) => a.name.localeCompare(b.name),
            multiple: 3,
        },
      },
      {
        title: "Assign. No.",
        dataIndex: "assign_no",
        key: "assign_no",
        sorter: {
            compare: (a,b) => a.assign_no.localeCompare(b.assign_no),
            multiple: 4,
        },
      },
      {
        title: "Fact Case",
        dataIndex: "fact_case",
        key: "fact_case",
        sorter: {
            compare: (a,b) => a.fact_case.localeCompare(b.fact_case),
            multiple: 5,
        },
      },
      {
        title: "Exp. Del. Date",
        dataIndex: "exp_delivery_date",
        key: "exp_delivery_date",
        sorter: {
            compare: (a,b) => a.exp_delivery_date - b.exp_delivery_date,
            multiple: 6,
        },
      },
      {
        title: "Client Discussion",
        dataIndex: "client_discussion",
        key: "client_discussion",
        sorter: {
            compare: (a,b) => a.client_discussion.localeCompare(b.client_discussion),
            multiple: 7,
        },
      },
      {
        title: "Draft Report",
        dataIndex: "draft_report",
        key: "draft_report",
        sorter: {
            compare: (a,b) => a.draft_report.localeCompare(b.draft_report),
            multiple: 8,
        },
      },
      {
        title: "Final Discussion",
        dataIndex: "final_discussion",
        key: "final_discussion",
        sorter: {
            compare: (a,b) => a.final_discussion.localeCompare(b.final_discussion),
            multiple: 9,
        },
      },
      {
        title: "Delivery Report",
        dataIndex: "delivery_report",
        key: "delivery_report",
        sorter: {
            compare: (a,b) => a.delivery_report.localeCompare(b.delivery_report),
            multiple: 10,
        },
      },
      {
        title: "Created",
        dataIndex: "created",
        key: "created",
        sorter: {
            compare: (a,b) => a.created - b.created,
            multiple: 11,
        },
      },
      {
        title: "Cat Name",
        dataIndex: "cat_name",
        key: "cat_name",
        sorter: {
            compare: (a,b) => a.cat_name.localeCompare(b.cat_name),
            multiple: 12,
        },
      },
      {
        title: "Parent Id",
        dataIndex: "parent_id",
        key: "parent_id",
        sorter: {
            compare: (a,b) => a.parent_id.localeCompare(b.parent_id),
            multiple: 13,
        },
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        sorter: {
            compare: (a,b) => a.status.localeCompare(b.status),
            multiple: 14,
        },
      }
    ]


    const [page, setPage] = useState(1);
  
    return (
      <div className="custQueriesParent">
        <div className="custQueries">
          <div className="custHeader">
            <h3>Queries ({queryData.length})</h3>
            <button>Fresh query</button>
          </div>
          <div className="custSearch custHeader">
            <h3>Your search bar here</h3>
          </div>
          <div className="custTable">
            <Table 
              className="table table-bordered"
              columns={columns}
              pagination={{
                onChange(current){
                  setPage(current);
                }
              }}
              size="small"
              dataSource={queryData}
              scroll={{x:1700, y: 500}}
            />
          </div>
        </div>
      </div>
    );
};