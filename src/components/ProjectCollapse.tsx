import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { FC } from "react";

const ProjectCollapse: FC = () => {
  return (
    <Collapse>
      <CollapsePanel key="Bounce2D" header="Bounce2D">
        <p>A game to test your geometric prowess.</p>

        <p>
          <a
            href="https://github.com/MRuvinshteyn/bounce-2d"
            rel="noreferrer"
            target="_blank"
          >
            Link
          </a>
        </p>
      </CollapsePanel>
    </Collapse>
  );
};

export default ProjectCollapse;
