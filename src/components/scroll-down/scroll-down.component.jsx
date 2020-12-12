import React from "react";
import styled from "styled-components";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 1.6em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  text-shadow: 1px 1px #45a29e;
  color: #fff;
  .turn {
    cursor: pointer;
    transform: rotate(90deg);
  }
  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
  }
`;

const ScrollDown = () => {
  return (
    <MyScroll>
      <div>
        <span>
          <a className="turn nav-link" href="#about">
            &gt;
          </a>
        </span>
      </div>
    </MyScroll>
  );
};

export default ScrollDown;
