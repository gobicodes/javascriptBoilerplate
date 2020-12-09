"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserbyUserName =
  "SELECT GF_U.*,GF_U_AM.account_id FROM gf_user GF_U \
    left join gf_account_user_mapping GF_U_AM on  \
    GF_U.user_id = GF_U_AM.user_id \
    where GF_U.user_name='?' AND  GF_U_AM.account_id=?";
exports.ForgetPassword = "SELECT password from gf_user WHERE  user_name=";
exports.GetFeaturesRole =
  "select GFR.* from gf_feature_role_usermapping GFRM \
inner join gf_feature_role GFR on \
GFRM.role_id = GFR.role_id  \
where GFRM.user_id=";
exports.ChangePassword = "UPDATE gf_user SET password='";
exports.ProcValidateUser = "call ProcValidateUser(?,?)";
exports.GetAccountByDomain = "select * from gf_accounts where domain_name='";
exports.GetUserAccount =
  "select gf_accounts.* from gf_account_user_mapping  \
inner join gf_accounts on \
gf_accounts.account_id = gf_account_user_mapping.account_id \
where gf_account_user_mapping.user_id=";
