import React from "react";
import { useSelector } from "react-redux";
import { minifyAddress } from "../../../utils";

const LeaderBoard = () => {
  const { winners } = useSelector((state: any) => ({
    winners: state.tetris.winners
  }))
  return (
    <div className="grid grid-row">
      {winners.map((winner, index) => (
        <div 
          key={index}
          className="flex gap-8 cursor-pointer py-[20px] text-white text-[14px] px-[30px] bg-black border border-[white]"
        >
          <div className="">{winner.amount}</div>
          {/* <div className="">{minifyAddress(winner.walletAddress, 3)}</div> */}
          <div className="">{winner.level}</div>
          <div className="">{winner.score}</div>
        </div>
      ))}
    </div>
  );
}

export default LeaderBoard;