import { DragPositionType } from '../../../interface/drag-position.interface';

import './drag-item.scss';

interface DragItemProps {
  visible: boolean;
  position?: DragPositionType;
  label?: string;
}

export const DragItem = ({ visible, position = { x: 0, y: 0 }, label = 'DRAG' }: DragItemProps) => (
  <div
    className={`drag-item ${visible ? 'drag-item--hover' : ''}`}
    style={{
      top: position.y,
      left: position.x
    }}
  >
    <span className="typescale-2">{label}</span>
  </div>
);
