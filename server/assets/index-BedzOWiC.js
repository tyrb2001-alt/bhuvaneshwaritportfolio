import { useEffect } from "react";
function Index() {
  useEffect(() => {
    window.location.replace(`${"/bhuvaneshwaritportfolio/"}resume.html`);
  }, []);
  return null;
}
export {
  Index as component
};
