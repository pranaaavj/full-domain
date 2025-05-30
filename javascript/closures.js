function getTimer() {
  let timer = 0;
  return () => {
    console.log(timer);
    timer++;
  };
}

const counter = getTimer();

counter();
counter();
