import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { FC } from "react";

const ProjectCollapse: FC = () => {
  return (
    <Collapse accordion>
      <CollapsePanel key="Bounce2D" header="Bounce2D">
        <p>
          A game to test your geometric prowess. Every level, you are given a
          number, which indicates the amount of bounces you must achieve before
          completing the level. The nubmer of bounces required continues to
          increase, ramping up the difficulty in turn. How many levels can you
          complete?
        </p>

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
      <CollapsePanel key="TetrisBattle" header="Tetris Battle">
        <p>
          A PvP version of the classic game Tetris. The game involves trying to
          achieve the highest possible score, while simultaneously trying to
          survive longer than your opponent. Additionally, on top of attempting
          to outlast your opponent, you also have the ability to make the game
          harder for your opponent by adding partially complete rows to their
          grid, which could lead to their disqualification.
        </p>

        <a
          href="https://github.com/jennifer4569/Tetris-Battle"
          rel="noreferrer"
          target="_blank"
        >
          Link
        </a>
      </CollapsePanel>
      <CollapsePanel key="CoCode" header="CoCode">
        <p>
          A code editor that attempts to streamline version control in a more
          intuitive way. By incorporating a graphical interface, we intend to
          simplify the version control procedure so that it takes up as little
          time as possible. In the future, we hope to expand CoCode with more
          group-oriented features, such as live code editing, roles and
          permissions, and in-app compilation and code execution.
        </p>

        <p>
          <a
            href="https://github.com/jennifer4569/CoCode"
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
