import React from "react";
import "./Frequently.css";

const Frequently = () => {
  return (
    <>
      <div className="accordian">
        <h3>Frequently Asked Questions</h3>
        <p>
          Pinpoint your audience with precision, ensuring your marketing efforts
          reach those most likely to engage with your brand.
        </p>
      </div>
      <ul className="sub-accordian">
        <li>
          <input type="radio" name="accordian" id="first" />
          <label htmlFor="first">
            1. How does Osumare measure campaign success?{" "}
            <span>
              <i class="bx bx-chevron-down"></i>
            </span>
          </label>
          <p>
            We believe in measurable results. Our data-driven approach means
            that every campaign's performance is tracked, analyzed, and refined
            for optimal outcomes. We provide regular reports that detail key
            metrics, giving you clear insights into how our strategies are
            driving growth for your brand.
          </p>
        </li>
        <li>
          <input type="radio" name="accordian" id="second" />
          <label htmlFor="second">
            2. How does Osumare measure campaign success?{" "}
            <span>
              <i class="bx bx-chevron-down"></i>
            </span>
          </label>
          <p>
            We believe in measurable results. Our data-driven approach means
            that every campaign's performance is tracked, analyzed, and refined
            for optimal outcomes. We provide regular reports that detail key
            metrics, giving you clear insights into how our strategies are
            driving growth for your brand.
          </p>
        </li>
        <li>
          <input type="radio" name="accordian" id="third" />
          <label htmlFor="third">
            3. How does Osumare measure campaign success?{" "}
            <span>
              <i class="bx bx-chevron-down"></i>
            </span>
          </label>
          <p>
            We believe in measurable results. Our data-driven approach means
            that every campaign's performance is tracked, analyzed, and refined
            for optimal outcomes. We provide regular reports that detail key
            metrics, giving you clear insights into how our strategies are
            driving growth for your brand.
          </p>
        </li>
      </ul>
    </>
  );
};

export default Frequently;
