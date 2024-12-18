import "./listUsers.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { userRows } from "../../../data/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react"; 

export default function UserList() {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    };
   
    const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
    return (
    <div className="userListUser">
        <img className="userListImg" src={params.row.avatar} alt="" />
        {params.row.username}
        </div>
    );
    },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
    field: "status",
    headerName: "Status",
    width: 120,
    },
    {
    field: "transaction",
    headerName: "Transaction Volume",
    width: 160,
    },
    {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
    return (
    <>
        <Link to={"/user/" + params.row.id}>
            <ModeEditOutlineIcon/>
        </Link>
        <DeleteOutlineIcon
            className="userListDelete"
            onClick={() => handleDelete(params.row.id)}
        />
    </>
    );
},
},
];
return (
    <div className="userList">
        <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            checkboxSelection
        />
    </div>
);
} 
