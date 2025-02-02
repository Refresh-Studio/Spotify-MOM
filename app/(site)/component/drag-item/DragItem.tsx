import { DragPositionType } from '../../../interface/drag-position.interface';

import './drag-item.scss';

interface DragItemProps {
  visible: boolean;
  position?: DragPositionType;
  label?: string;
}

export const DragItem = ({ visible, position = { x: 0, y: 0 }, label = 'drag' }: DragItemProps) => (
  <div
    className={`drag-item ${visible ? 'drag-item--hover' : ''}`}
    style={{
      top: visible ? position.y : 0,
      left: visible ? position.x : 0
    }}
  >
    <span className="typescale-1">{label}</span>
  </div>
);
