import styles from './Sidebar.module.scss';

import {useCurrentFrame, useCurrentScene} from '../../hooks';
import {Pane} from '../tabs';
import {useInspection} from '../../contexts';

export function SceneGraph() {
  useCurrentFrame();
  const scene: any = useCurrentScene();

  console.log(scene);
  console.log(scene.view);

  console.log(scene.view.key);
  console.log(scene.view.children());

  return (
    <Pane title="Scene Graph" id="scene-graph-pane">
      {<SceneGraphView node={scene.view} />}
    </Pane>
  );
}

interface SceneGraphViewProps {
  node: any;
}

function SceneGraphView({node}: SceneGraphViewProps) {
  const state = useInspection();

  return (
    <div className={styles.thread}>
      <div
        onClick={() => state.setInspectedElement(node.key)}
        className={styles.threadTitle}
      >
        {node.key}
      </div>
      {node.children().length > 0 && (
        <ul className={styles.threadList}>
          {node.children().map((value: any) => (
            <SceneGraphView node={value} />
          ))}
        </ul>
      )}
    </div>
  );
}
