import React, { useState, useEffect, useRef  } from "react";
import axios from 'axios';
import { Database } from "../../API/API";
import { Link } from "react-router-dom";

function _MAIN() {

    const [DETAIL_LIST, SET_DETAIL_LIST] = useState([])

    const GET_DETAIL = () => {

        axios.get(`${Database}Name-list/Name-list.php`).then(data => {

            SET_DETAIL_LIST(data.data);
        
        });

    }

    
    const ADD_DETAIL = () => {

        let FORM_DATA = new FormData(document.getElementById('form-add'));
        axios({
            method: "post",
            url: `${Database}Add-name/Add-name.php`,
            data: FORM_DATA,
            headers: { "Content-Type": "multipart/form-data" }
        });

        document.getElementById('Name').value = "";
        
    }


    const DELETE = (seq) => {

        axios.get(`${Database}Delete-name/Delete-name.php?Seq=${seq}`);

    }


    useEffect(() => {

        setInterval(() => {
            
            GET_DETAIL();

        }, 1000);
    
    }, []);

    return (
        <div>
            <Link to='/'>
                ย้อนกลับ
            </Link>
            <br/><br/>

            <form id='form-add'>
                <input type="text" name='Name' id='Name' placeholder="เพิ่มชื่อ"/>
                <button type="button" onClick={() => ADD_DETAIL()}>เพิ่ม</button>
            </form>
            <br/>

            <h3>รายชื่อ</h3>

            {DETAIL_LIST.map((i, key) => (
                <div key={key}>
                    - {i.u_name} <button type="button" onClick={() => DELETE(i.u_seq)}>ลบ</button>
                    <br/><br/>

                </div>
            ))}

        </div>
    );
}

export default _MAIN;
