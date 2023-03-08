import { FC } from "react";
import "./App.css";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import ProjectCollapse from "./components/ProjectCollapse";
import logo from "./logo.svg";

const App: FC = () => {
  return (
    <Layout>
      <Header className="App-header">
        <p>Welcome to my Project Showcase!</p>
      </Header>
      <Layout className="App-inner-layout">
        <Content className="App-content">
          <ProjectCollapse />
        </Content>
      </Layout>
      <Footer className="App-footer">
        Made with React
        <img src={logo} className="App-logo" alt="logo" />
      </Footer>
    </Layout>
  );
};

export default App;
