import NavigationBar from "../../components/organisms/NavigationBar";
import { UserOutlined, FolderOpenOutlined } from "@ant-design/icons";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const onlyEmployee = user?.isEmployee && !user?.isAdmin && !user?.isManager;
  const isAdminOrManager = user?.isAdmin || user?.isManager;

  const handleMenuClick = (key: string) => {
    switch (key) {
      case "overview":
        navigate("/home");
        break;
      case "employees":
        navigate("/employees");
        break;
      case "profile":
        navigate(`/employees/${user?.id}`);
        break;
      default:
        break;
    }
  };

  const navigationItems = [
    <NavigationBar.Item
      path="/home"
      key="overview"
      onClick={() => handleMenuClick("overview")}
      icon={<FolderOpenOutlined size={20} />}
      text="Overview"
    />,
    isAdminOrManager && (
      <NavigationBar.Item
        path="/employees"
        onClick={() => handleMenuClick("employees")}
        key="employees"
        icon={<UserOutlined />}
        text="Employees"
      />
    ),
    onlyEmployee && (
      <NavigationBar.Item
        path={`/employees/${user?.id}`}
        onClick={() => handleMenuClick("profile")}
        key="profile"
        icon={<UserOutlined />}
        text="Profile"
      />
    ),
    <NavigationBar.LogoutButton key="logout" onClick={logout} />,
  ].filter(Boolean);

  return (
    <NavigationBar onMenuClick={handleMenuClick}>
      {navigationItems}
    </NavigationBar>
  );
};

export default NavBar;
