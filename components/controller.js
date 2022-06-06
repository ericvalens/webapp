import { Joystick } from "react-joystick-component";

export default function Controller() {
  const onMove = (stick) => {
    const { type, x, y, direction, distance } = stick;
    console.log(`${type}, ${x}, ${y}, ${direction}, ${distance}`);
  };

  const onStop = (stick) => {
    const { type } = stick;
    console.log(`${type}`);
  };

  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
      <div className="max-w-3xl mx-auto flex justify-center h-full">
        <div className="flex flex-col">
          <br className="flex-none" />
          <div className="flex flex-col grow justify-center pt-96">
            <div className="pt-24">
              <Joystick
                size={100}
                throttle={500}
                baseColor="#1ECBE1"
                stickColor="#E1341E"
                move={onMove}
                stop={onStop}
              />
            </div>
          </div>
          <br className="flex-none" />
        </div>
      </div>
    </div>
  );
}
