import { Layout, Menu, Input } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./styles/dashboard.css";
import { HiOutlineHome } from "react-icons/hi";
import { TbDashboard } from "react-icons/tb";
import { AiFillDollarCircle } from "react-icons/ai";
import { Card, Space, Typography, Progress, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const { Search } = Input;
function App() {
  const data1 = [
    { name: "Jan", sales: 200 },
    { name: "Feb", sales: 350 },
    { name: "Mar", sales: 100 },
    { name: "Apr", sales: 500 },
    { name: "May", sales: 250 },
    { name: "Jun", sales: 350 },
    { name: "Jul", sales: 150 },
    { name: "Aug", sales: 350 },
    { name: "Sep", sales: 100 },
    { name: "Oct", sales: 150 },
    { name: "Nov", sales: 250 },
    { name: "Dec", sales: 350 },
  ];
  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "stock",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Price",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Total Sales",
      key: "tags",
      dataIndex: "tags",
      render: (_: any, { tags }) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "$240",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "$230",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "$320",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <Layout className="container">
      <Layout>
        <Sider id="siderr" theme="light" style={{ color: "light" }}>
          <div style={{ display: "flex" }}>
            <TbDashboard style={{ height: 27, width: 20 }} />
            <h2 id="dashboard">Dashboard</h2>
          </div>
          <Menu
            id="menu"
            items={[
              {
                label: "Dashboard",
                key: "dashboard",
                icon: <TbDashboard />,
              },
            ]}
          />
          <Menu
            id="menu"
            items={[
              {
                label: "Product",
                key: "product",
                icon: <HiOutlineHome />,
                children: [{ label: "Add product", key: "add_product" }],
              },
            ]}
          />
          <Menu
            id="menu"
            items={[
              {
                label: "Customers",
                key: "cus",
                icon: <HiOutlineHome />,
                children: [{ label: "Add profile", key: "add_profile" }],
              },
            ]}
          />
          <Menu
            id="menu"
            items={[
              {
                label: "Income",
                key: "inc",
                icon: <HiOutlineHome />,
                children: [{ label: "Add profile", key: "add_profile" }],
              },
            ]}
          />
          <Menu
            id="menu"
            items={[
              {
                label: "Promote",
                key: "pro",
                icon: <HiOutlineHome />,
                children: [{ label: "Add profile", key: "add_profile" }],
              },
            ]}
          />
          <Menu
            id="menu"
            items={[
              {
                label: "Help",
                key: "help",
                icon: <HiOutlineHome />,
                children: [{ label: "Add profile", key: "add_profile" }],
              },
            ]}
          />
        </Sider>{" "}
        <Search
          placeholder="Search"
          onSearch={(value: any) => console.log(value)}
          style={{
            width: 200,
            height: 30,
            background: "white",
            position: "absolute",
            left: "84%",
          }}
        />
        <Content className="content">
          <Space direction="horizontal">
            <Card id="cardid">
              <Space
                direction="horizontal"
                style={{ width: "80%", height: "50%" }}
              >
                <AiFillDollarCircle />
                <small>Earnings</small>
              </Space>
              <Typography.Title></Typography.Title>
            </Card>
            <Card id="cardid">
              <Space
                direction="horizontal"
                style={{ width: "80%", height: "50%" }}
              >
                <HiOutlineHome />
                <small>Orders</small>
              </Space>
              <Typography.Title></Typography.Title>
            </Card>
            <Card id="cardid">
              <Space
                direction="horizontal"
                style={{ width: "80%", height: "50%" }}
              >
                <HiOutlineHome />
                <small>Balance</small>
              </Space>
              <Typography.Title></Typography.Title>
            </Card>
            <Card id="cardid">
              <Space
                direction="horizontal"
                style={{ width: "80%", height: "50%" }}
              >
                <HiOutlineHome />
                <small>Total sales</small>
              </Space>
              <Typography.Title></Typography.Title>
            </Card>
          </Space>
          <Card id="main" style={{ width: "60%" }}>
            <h2>Overview</h2>
            <p>Monthly Earning</p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
          <Card id="dusra" style={{ width: "20%" }}>
            {" "}
            <h2>Customers</h2>
            <p>Customers that buy product</p>
            <Space wrap style={{ width: "30%" }}>
              <Progress type="circle" percent={65} />
            </Space>
          </Card>
          <Card id="table">
            <Search
              placeholder="Search"
              onSearch={(value: any) => console.log(value)}
              style={{
                width: 200,
                height: 30,
                background: "white",
                position: "absolute",
                left: "84%",
              }}
            />
            <h2>Product sell</h2>
            <Table id="table2" columns={columns} dataSource={data} />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
