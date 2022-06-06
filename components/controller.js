import { useState } from "react";
import { Joystick } from "react-joystick-component";

export default function Controller() {
  const [state, setState] = useState({});

  const onMove = (stick) => {
    const { type, x, y, direction, distance } = stick;
    setState({ type, x, y, direction, distance });
  };

  const onStop = (stick) => {
    const { type } = stick;
    setState({ type });
  };

  return (
    <div className="mx-auto h-screen max-w-7xl bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-full max-w-3xl justify-center">
        <div className="flex flex-col">
          <div className="mt-12 flex-none text-center text-2xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
            <ul className="h-60 list-none">
              <li className="uppercase">Type: {state.type}</li>
              {state.distance && (
                <li className="pt-4 uppercase">
                  Distance: {parseInt(state.distance)}
                </li>
              )}
              {state.direction && (
                <li className="pt-4 uppercase">Direction: {state.direction}</li>
              )}
              {state.x && state.y && (
                <li className="pt-4 uppercase">
                  Coordinates: x: {parseInt(state.x)}, y: {parseInt(state.y)}
                </li>
              )}
            </ul>
          </div>
          <div className="flex grow flex-col justify-center">
            <div className="flex justify-center">
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
