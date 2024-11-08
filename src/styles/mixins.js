import { css } from "styled-components"

export default {
  // Display flex
  displayFlex: (direction = null, justify = null, align = null, wrap = null, inline = null ) => css`
    display: ${inline ? 'inline-flex' : 'flex'};
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    flex-wrap: ${wrap};
  `,

  // Position absolute
  positionAbsolute: (top = null, right = null, bottom = null, left = null) => css`
    position: absolute;
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
  `,
}

// //
// // Fixed positioning
// //
// @mixin position-fixed($top: 0, $right: 0, $bottom: 0, $left: 0) {
//   position: fixed;
//   top: $top;
//   right: $right;
//   bottom: $bottom;
//   left: $left;
// }
//
// //
// // Position center: vertical, horizontal
// //
// @mixin position-center($position: 'both') {
// @if $position == 'vertical' {
//   @include position-absolute(50%, null, null, null);
//     transform: translateY(-50%);
//   }
// @else if $position == 'horizontal' {
//   @include position-absolute(null, null, null, 50%);
//     transform: translateX(-50%);
//   }
// @else {
//   @include position-absolute(50%, null, null, 50%);
//     transform: translate(-50%, -50%);
//   }
// }