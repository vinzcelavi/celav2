import type { MouseType, OffsetType } from '../types';

function getMouseCoordinates(event: MouseEvent, referenceElement: HTMLElement): MouseType {
  const position: MouseType = {
    x: event.pageX,
    y: event.pageY
  };

  const offset: OffsetType = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight
  };

  let reference: HTMLElement | null = referenceElement.offsetParent as HTMLElement;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent as HTMLElement;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top
  };
}

export { getMouseCoordinates };
