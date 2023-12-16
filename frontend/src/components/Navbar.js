import React, { useEffect } from "react";
import { styled } from "styled-components";
import logo from "./Assest/logo.jpg";
import { Tabs, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { GetCurrentUser } from "../apicalls/users";
import { setLoader } from "../redux/loaderSlice";
import { setUser } from "../redux/userSlice";

function Navbar({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const Overlay = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    background-color: black;
    color: white;
  `;
  const LogoCover = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
  `;
  const Logo = styled.img`
    height: 100%;
    width: 150px;
    object-fit: cover;
  `;
  const Options = styled.div`
    display: flex;
    font-size: 20px;
    gap: 20px;
    padding: 30px;
    .link {
      font-size: 20px;
      color: white;
      text-decoration: none;
    }
  `;
  const Login = styled.div``;
  const SignUp = styled.div``;
  const Cart = styled.div`
    font-size: 20px;
  `;
  const UserName = styled.span`
    text-decoration: underline;
    cursor: pointer;
    padding: 2px;
    text-transform: uppercase;
  `;
  const Noti = styled.span`
    margin-right: 15px;
    cursor: pointer;
  `;
  const MainWrapper = styled.div`
    padding: 30px;
    gap: 10px;
    display: flex;
    .link {
      font-size: 20px;
      color: white;
      text-decoration: none;
    }
  `;
  const Users = styled.div`
    color: white;
    padding: 20px 40px;
    gap: 5px;
    display: flex;
  `;

  const validationToken = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetCurrentUser();
      dispatch(setLoader(false));
      if (response.success) {
        dispatch(setUser(response.data));
      } else {
        navigate("/login");
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      navigate("/login");
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validationToken();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    user && (
      <div>
        <Overlay>
          <Logo src={logo} onClick={()=>navigate("/")}/>
          <MainWrapper>
            <Link to="/" className="link">
              Home
            </Link>
            <HashLink to="#about" className="link">
              About
            </HashLink>
          </MainWrapper>
          <Users>
            <i
              class="ri-shopping-cart-line"
              onClick={() => {
                navigate("/cart");
              }}
              style={{ fontSize: "25px" }}
            ></i>

            <UserName>{user.name}</UserName>
            {/* notification-bar */}
            <Noti>
              {/* <Badge count = {notice?.filter((noti)=>!noti.read).length}
                    onClick={()=>{
                        readNotice();
                        setShowNotice(true);
                    }}
                >
                    <Avatar
                        size="medium"
                        icon={<i className="ri-shield-flash-line"></i>}
                    />
                </Badge> */}
            </Noti>
            <i
              className="ri-logout-circle-r-line"
              style={{ fontSize: "25px" }}
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            ></i>
          </Users>
        </Overlay>
        <div>{children}</div>
      </div>
    )
  );
}

export default Navbar;
