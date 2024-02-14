import React from 'react'

function Button(props) {
  return (
    <button onClick={props.click} className={`px-5 sm:px-8 py-[18px] rounded-[12px] bg-[#02CDCF] f-recharge font-bold text-lg leading-[21.6px] text-[#0B0A0A] duration-500 ${props.className}`}>
      {props.text}
    </button>
  );
}

export default Button