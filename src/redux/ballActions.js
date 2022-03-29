export const buyBall = qty => {
  //preprocessing kari sakiae ahiya
  return {
    type: "BUY_BALL",
    payload: qty,
  };
};
