import React, { useContext, useEffect } from 'react'
import "./Verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();


    const verifyPayment = async() =>{
        try {
            const token = localStorage.getItem("token"); 
            console.log(token);
            console.log(url)// lấy token từ localStorage hoặc nơi bạn lưu token
            const response = await axios.post(
                `${url}/api/order/verify`,
                { success, orderId },
                {
                    headers: {
                        token: token, // thêm token vào headers
                    },
                }
            );
            
            if(response.data.success){
                navigate("/myorders"); // Điều hướng tới trang khác, bạn có thể thay "/myorders" thành trang bạn mong muốn
            } else {
                console.log("Xác nhận thanh toán thất bại");
                navigate("/"); // Điều hướng về trang chủ nếu xác nhận thất bại
            }
        } catch (error) {
            console.log("Lỗi khi xác nhận thanh toán:", error);
        }
    }
    

    useEffect(()=>{
        verifyPayment()
    },[])
  return (
    <div className='verify'>
        <div className="spinner">

        </div>
      
    </div>
  )
}

export default Verify
