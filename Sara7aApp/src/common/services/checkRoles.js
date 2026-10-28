import { userModel } from "../../database/model/user.model.js";
import { UnauthorizedException } from "../errors/appError.js";

export const checkRoles = (roles) => {
  return async (req, res, next) => {
    let userData = await userModel.findById(req.user.id);
    if (userData && roles.map(String).includes(String(userData.role))) {
      next();
    } else {
      return UnauthorizedException({ message: "You are not authorized" });
    }
  };
};
