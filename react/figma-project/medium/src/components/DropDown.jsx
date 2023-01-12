import Dropdown from "react-bootstrap/Dropdown";

export default function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant id="dropdown-basic">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_nike_principal.jpg"
          width="50px"
          height="35px"
          alt=""
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
