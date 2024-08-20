import React from "react";
import "./App.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { SearchOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import {
  Layout,
  Select,
  DatePicker,
  Breadcrumb,
  Input,
  Button,
  Table,
  Tag,
} from "antd";

dayjs.extend(customParseFormat);

const { Column } = Table;
const { Content, Footer } = Layout;
const { RangePicker } = DatePicker;
const dateForm = "YYYY/MM/DD";

const data = [
  {
    key: "1",
    name: "Tên Phụ Huynh",
    status: ["Không có nhu cầu"],
    chuongTrinhHoc: "ADVENTURE",
    coSo: "Tây Hồ Tây",
    tags: ["Cán bộ nhân viên"],
    time: "14:05 - 16/02/2024",
  },
  {
    key: "2",
    name: "Tên Phụ Huynh",
    status: ["Ghi danh"],
    chuongTrinhHoc: "DISCOVER",
    coSo: "Tây Hồ Tây",
    tags: ["Phụ huynh học sinh"],
    time: "14:05 - 16/02/2024",
  },
  {
    key: "3",
    name: "Tên Phụ Huynh",
    status: ["Đang chăm sóc"],
    chuongTrinhHoc: <p style={{ fontWeight: 100 }}>n/a</p>,
    coSo: "Dương Kinh",
    tags: ["Phụ huynh học sinh"],
    time: "14:05 - 16/02/2024",
  },
  {
    key: "4",
    name: "Tên Phụ Huynh",
    status: ["Đã nhập học"],
    chuongTrinhHoc: <p style={{ fontWeight: 100 }}>n/a</p>,
    coSo: "Cầu Giấy",
    tags: ["Phụ huynh học sinh"],
    time: "14:05 - 16/02/2024",
  },
  {
    key: "5",
    name: "Tên Phụ Huynh",
    status: ["Trùng Thông tin"],
    chuongTrinhHoc: <p style={{ fontWeight: 100 }}>n/a</p>,
    coSo: "Ocean Park",
    tags: ["Cán bộ nhân viên"],
    time: "14:05 - 16/02/2024",
  },
];

function App() {
  return (
    <Layout className="container">
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[
            {
              title: "...",
            },
            {
              title: "Giới Thiệu Phụ Huynh",
            },
            {
              title: "Danh Sách Giới Thiệu Phụ Huynh",
            },
          ]}
        />
        <div>
          <h1>Danh Sách Giới Thiệu Phụ Huynh</h1>
        </div>
        <Select
          style={{ padding: "0 1px", width: 220 }}
          defaultValue="Tuần này"
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucky", label: "Lucky" },
          ]}
        />
        <RangePicker
          style={{ margin: "0 15px", width: 350, backgroundColor: "#DFE1E6" }}
          defaultValue={[
            dayjs("2024/01/01", dateForm),
            dayjs("2024/01/01", dateForm),
          ]}
          format={dateForm}
        />
        <div className="text">
          <div className="text1">
            <h3>Tất Cả</h3>
            <h2>45</h2>
            <p>Phụ huynh</p>
          </div>
          <div className="text2">
            <h3>Đã Nhập Học</h3>
            <h2>12</h2>
            <p>Phụ huynh</p>
          </div>
          <div className="text3">
            <h3>Đã Ghi Danh</h3>
            <h2>15</h2>
            <p>Phụ huynh</p>
          </div>
          <div className="text4">
            <h3>QLEAD</h3>
            <h2> 8</h2>
            <p>Phụ huynh</p>
          </div>
          <div className="text5">
            <h3>Đang Chăm Sóc</h3>
            <h2>5</h2>
            <p>Phụ huynh</p>
          </div>
          <div className="text6">
            <h3>Trùng Thông Tin</h3>
            <h2>7</h2>
            <p>Phụ huynh</p>
          </div>
          <div className="text7">
            <h3>Không Có Nhu Cầu</h3>
            <h2>6</h2>
            <p>Phụ huynh</p>
          </div>
        </div>
        <div className={"search"} style={{ padding: "10px 0" }}>
          <Input
            style={{ width: 840 }}
            prefix={<SearchOutlined />}
            placeholder="Nhập tên phụ huynh/số điện thoại/email... để tìm kiếm"
          />
          <Select
            style={{ width: 300, margin: 12 }}
            placeholder="Nguồn giới thiệu"
            options={[
              { value: "1", label: "Cán bộ nhân viên" },
              { value: "2", label: "Phụ huynh" },
            ]}
          />
          <Select
            style={{ width: 200, margin: 12 }}
            placeholder="Chương trình học"
            options={[
              { value: "1", label: "ADVENTURE" },
              { value: "2", label: "DISCOVER" },
              { value: "3", label: "IB" },
              { value: "4", label: "DGS ADVENTURE" },
            ]}
          />
          <Select
            style={{ width: 200, margin: 12 }}
            placeholder="Trạng thái"
            options={[
              { value: "1", label: "Không có nhu cầu" },
              { value: "2", label: "Ghi danh" },
              { value: "3", label: "Đang chăm sóc" },
              { value: "4", label: "Đã nhập học" },
              { value: "5", label: "Trùng thông tin" },
            ]}
          />
          <Button className={"btn-delete"} style={{ width: 150 }}>
            Xoá bộ lọc
          </Button>
          <Button className={"btn-search"} style={{ margin: 12, width: 150 }}>
            Tìm Kiếm
          </Button>
        </div>
        <div className={"table"}>
          <Table dataSource={data}>
            <Column
              title="Phụ Huynh Được Giới Thiệu"
              dataIndex="name"
              key="name"
              render={(name) => (
                <aside className="name">
                  Tên Phụ Huynh
                  <p>
                    <PhoneOutlined /> 0971405427
                  </p>
                  <p>
                    <MailOutlined /> n/a
                  </p>
                </aside>
              )}
            />
            <Column
              title="Trạng Thái"
              dataIndex="status"
              key="status"
              render={(status) => (
                <>
                  {status.map((statu) => {
                    let color;
                    if (statu === "Không có nhu cầu") {
                      color = "default";
                    } else if (statu === "Ghi danh") {
                      color = "processing";
                    } else if (statu === "Đang chăm sóc") {
                      color = "volcano";
                    } else if (statu === "Đã nhập học") {
                      color = "success";
                    } else {
                      color = "red";
                    }
                    return (
                      <div key={statu}>
                        <Tag color={color}>{statu}</Tag>
                      </div>
                    );
                  })}
                </>
              )}
            />
            <Column
              title="Chương Trình Học Quan Tâm"
              dataIndex="chuongTrinhHoc"
              key="chuongTrinhHoc"
            />
            <Column title="Cơ Sở" dataIndex="coSo" key="coSo" />
            <Column
              title="Người Giới Thiệu"
              dataIndex="tags"
              key="tags"
              render={(tags) => (
                <>
                  {tags.map((tag) => {
                    let color;
                    if (tag === "Phụ huynh học sinh") {
                      color = "volcano";
                    } else {
                      color = "geekblue";
                    }
                    return (
                      <div className="userOut" key={tag}>
                        <div>
                          <Tag color={color}>{tag}</Tag>
                        </div>
                        <img
                          src="https://storage-vnportal.vnpt.vn/nan-ubnd/1/quantritintuc/3638031579059476963.jpg" alt=""
                          style={{ width: 38, height: 38 }}
                        />
                        <b>Tên Nhân Viên</b>
                        <p>Mã nhân viên</p>
                      </div>
                    );
                  })}
                </>
              )}
            />
            <Column title="Thời Gian Gửi Lead" dataIndex="time" key="time" />
          </Table>
        </div>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
