import React from "react";
import C3Context from "./C3Context.";
import axios from "axios";

const BASE_URL = "http://nawaf.pythonanywhere.com/";

function C3State(props) {
  // Following function is used to get the profile data:

  const getProfiledata = async () => {
    try {
      let response = await axios.get(`${BASE_URL}/account/update_profile/2/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      console.error("Get Profile Error ===> ", error);
    }
  };

  // Following function is used to update the profile:

  const changeProfile = async (first_name, email, file) => {
    try {
      let obj = {
        user: {},
      };

      if (first_name != "" && first_name) {
        obj.user["first_name"] = first_name;
      }

      if (email != "" && email) {
        obj.user["email"] = email;
      }

      let response = await axios.put(
        `${BASE_URL}/account/update_profile/2/`,
        obj
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Following function is used to change the password:

  const changePass = async (email, password) => {
    try {
      let obj = {
        email,
        password,
      };
      let response = await axios.post(
        `${BASE_URL}/account/change_password/`,
        obj
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Following function is used to create the team:

  const createTeam = async (teamName, companyId) => {
    try {
      let token = localStorage.getItem("token");

      let response = await axios.post(
        `${BASE_URL}/api/team_create/`,
        {
          team_name: teamName,
          company_id: companyId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Following function is used to get the company:

  const getCompanyDetail = async () => {
    try {
      let token = localStorage.getItem("token");
      let response = await axios.get(`${BASE_URL}/api/company/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Following function is used to list teams:

  const listTeam = async (comapny_id) => {
    try {
      let response = await `${BASE_URL}/company/${comapny_id}/teams/`;

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Following function is used to get the team memeber:

  const getTeamMember = async (teamId) => {
    try {
      let response = await axios.get(
        `${BASE_URL}/api/teams/${teamId}/members/`
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Following function is used to update the profile image:

  const updateProfileImage = async (userId) => {
    try {
      let response = await axios.put(`${BASE_URL}/image-update/${userId}/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <C3Context.Provider
        value={{
          getProfiledata,
          changeProfile,
          changePass,
          getTeamMember,
          listTeam,
          getCompanyDetail,
          createTeam,
        }}
      >
        {props?.children}
      </C3Context.Provider>
    </>
  );
}

export default C3State;
