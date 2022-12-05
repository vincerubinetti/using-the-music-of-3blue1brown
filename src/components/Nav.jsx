import { useContext } from "react";
import { useFormikContext } from "formik";
import { AppContext } from "../App";
import Button from "../components/Button";
import { pages, getLast } from "../pages";
import { clamp } from "../util/math";
import { ReactComponent as Help } from "../assets/help.svg";
import "./Nav.css";

const Nav = () => {
  const { page, setPage, submitting, submitForm } = useContext(AppContext);
  const { values, errors } = useFormikContext();

  // get validation props
  const fieldValid = !errors?.[pages[page].key];
  const formValid = Object.keys(errors).length === 0;
  const lastQuestion = page === getLast(values);
  const progress = clamp(100 * (page / getLast(values)), 0, 100) + "%";

  // are we on first page
  const first = page === 0;
  // are we on last page
  const last = page === pages.length - 1;

  // get error message
  const error = errors?.[pages[page]?.key];

  return (
    <div className="nav">
      <div className="progress" style={{ width: progress }}></div>

      {error && <p className="error">{error}&nbsp;</p>}

      <div className="buttons">
        {!first && !last && (
          <Button text="Back" onClick={() => setPage((page) => page - 1)} />
        )}
        {!last && (
          <Button
            className="next"
            disabled={!fieldValid || submitting}
            text={first ? "Start" : lastQuestion ? "Submit" : "Next"}
            loading={submitting}
            onClick={() => {
              if (lastQuestion) {
                if (formValid) submitForm(values);
              } else setPage((page) => page + 1);
            }}
          />
        )}
      </div>

      <a
        href="mailto:vince@vincentrubinetti.com"
        className="help"
        title="Issues or questions"
        target="_blank"
        rel="noreferrer"
      >
        <Help />
      </a>
    </div>
  );
};

export default Nav;
