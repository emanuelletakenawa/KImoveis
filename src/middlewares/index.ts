import { handleError } from "./handleError.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyId } from "./verifyId.middleware";
import { verifyEmail } from "./verifyEmail.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { validateAdmin } from "./validateAdmin.middleware";
import { verifyOwner } from "./verifyOwner.middleware";
import { verifyRealEstateId } from "./verifyRealEstateId.middeware";
import { verifyUserSchedule } from "./verifyUserSchedule.middleware";
import { verifyWorkDay } from "./verifyWorkDay.middleware";
import { verifyBusinessHours } from "./verifyHour.middleware";
import { verifySchedule } from "./verifySchedule.middleware";
import { verifyCategoryName } from "./verifyCategoryName.middleware";
import { verifyAddress } from "./verifyAddress.middleware";
import { verifyCategoryId } from "./verifyCategoryId.middleware";

export default {
  verifyId,
  handleError,
  validateBody,
  verifyEmail,
  verifyToken,
  validateAdmin,
  verifyOwner,
  verifyRealEstateId,
  verifyUserSchedule,
  verifyWorkDay,
  verifyBusinessHours,
  verifySchedule,
  verifyCategoryName,
  verifyAddress,
  verifyCategoryId,
};
