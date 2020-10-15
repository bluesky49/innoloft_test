
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { strengthIndicator, strengthLevel } from "./StrengthPw";

const PwStrengthIndicator = ({ password, className, ...attrs }) => {
  const cardClassNames = classNames("pw-strength-indicator", className);

  const strength = strengthIndicator(password);
  const levels = strengthLevel(strength);
  const levelsDefault = [1, 2, 3, 4, 5];

  return (
    <div className={cardClassNames} {...attrs}>
      <div>
        Your password strenght:{" "}
        <span style={{ color: levels[levels.length - 1].color }}>
          {levels[levels.length - 1].text}
        </span>
      </div>
      <div>
        <div>
          {levels.map((level, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: level.color }}
              />
            );
          })}
        </div>
        <div>
          {levelsDefault.map(level => {
            return (
              <div
                key={level}
                style={{ backgroundColor: "#E0E0E0" }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

PwStrengthIndicator.propTypes = {
  /** Custom class name */
  className: PropTypes.string,
  /** Password to check strength */
  password: PropTypes.string
};

PwStrengthIndicator.defaultProps = {};

export default PwStrengthIndicator;