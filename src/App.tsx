import { FC } from "react";
import "./App.css";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import ProjectCollapse from "./components/ProjectCollapse";

const App: FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header className="App-header">Welcome to my Project Showcase!</Header>
        <Content style={{ textAlign: "center", margin: "50px" }}>
          <ProjectCollapse />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
