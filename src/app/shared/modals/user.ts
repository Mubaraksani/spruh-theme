import { Role } from "./role";

export class User {
   // _id?: string;
   // profile_photo?: string;
   // email?: string;
   // mobile?: string;
   // fname?: string;
   // lname?: string;
   // user_type?: Role;
   // is_admin?: boolean;
   // power_admin_id?: string
   // privileges?: [];

   agent_id?: string;
   agent_avatar_url?: string;
   agent_email?: string;
   mobile_no?: string;
   phone_code?: string;
   agent_fname?: string;
   agent_lname?: string;
   address?: string;
   token?: string;
   agent_secret_key?: string;
   double_auth_key?: string;
}
