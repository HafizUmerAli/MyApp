import React from "react";
import { Avatar } from "@material-ui/core";
import "./sidebar.css";
function Sidebar() {
    const roleId = 0;
  return (
    <div className="sidebar">
        
      <div className="userInfo d-flex flex-column align-items-center p-3">
        <Avatar
          src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
          style={{ width: "100px", height: "100px" }}
        />
       { roleId == 0 ? (<h1 className='display-5'>Admin Portal</h1>): (<h1 className='display-5'>User Portal</h1>)}
      </div>

      <div className="options d-flex flex-column align-items-center">
        <button className="optionBtns btn btn-light">Home</button>
        { roleId == 0 ? (<button className="optionBtns btn btn-light">View All User</button>): (<button className="optionBtns btn btn-light">Add Complain</button>)}
        { roleId == 0 ? (<button className="optionBtns btn btn-light">View Complain History</button>): (<button className="optionBtns btn btn-light">Delete Complain</button>)}
        { roleId == 0 ? (<button className="optionBtns btn btn-light">View Pending</button>): (<button className="optionBtns btn btn-light">View Status</button>)}
        { roleId == 0 ? (<button className="optionBtns btn btn-light">View Resolved</button>): (<button className="optionBtns btn btn-light">Setting</button>)}
      </div>
    </div>
  );
}

export default Sidebar;
 