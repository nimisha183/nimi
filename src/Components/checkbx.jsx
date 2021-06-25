import React from "react";
import { useState } from "react";

const Checkbox = ({ techstack }) => {
 const [tech, setTech] = useState();
    return (
        <div
            onChange={() => techstack(tech)}
        >
        <label>Technology Stack</label> <br />
        <input
          type="checkbox"
          value="JAVA"
          onCheck={(e) => setTech(e.target.value)}
        />{" "}
        JAVA
        {/* <input
          type="checkbox"
          value="C"
          onCheck={(e) => handleChange()}
        />{" "}
        C */}
      </div>
    );
}
export default Checkbox;
  





const checkboxesList = [
  "New Jersey",
  "Maryland",
  "Connecticut",
  "Florida",
  "Massachussets",
];

// const getDefaultCheckboxes = () =>
//   checkboxesList.map((checkbox) => ({
//     name: checkbox,
//     checked: false,
//   }));

// export function useCheckboxes(defaultCheckboxes) {
//   const [checkboxes, setCheckboxes] = useState(
//     defaultCheckboxes || getDefaultCheckboxes()
//   );
//   function setCheckbox(index, checked) {
//     const newCheckboxes = [...checkboxes];
//     newCheckboxes[index].checked = checked;
//     setCheckboxes(newCheckboxes);
//   }
//   return {
//     setCheckbox,
//     checkboxes,
//   };
// }

// export function Checkboxes({ checkboxes, setCheckbox }) {
//   return (
//     <>
//       {checkboxes.map((checkbox, i) => (
//         <CheckboxLabel>
//           <Checkbox
//             type="checkbox"
//             checked={checkbox.checked}
//             onChange={(e) => {
//               setCheckbox(i, e.target.checked);
//             }}
//           />
//           {checkbox.name}
//         </CheckboxLabel>
//       ))}
//     </>
//   );
// }
// export function CheckboxRadioExample() {
//   const checkboxes = useCheckboxes();
//   return (
//     <div>
//       <Checkboxes {...checkboxes} />
//       <span>
//         Value:
//         {checkboxes.checkboxes
//           .filter((t) => t.checked)
//           .map((checkbox) => checkbox.name)
//           .join(", ")}
//       </span>
//     </div>
//   );
// }