import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Stack from "@mui/material/Stack";
function Employee({
  address,
  age,
  contactNumber,
  dob,
  email,
  firstName,
  id,
  imageUrl,
  lastName,
  salary,
}) {
  return (
    <div className="card">
      {/* <header> */}
        {/* <div className="card-conatiner"> */}
          {/* <div className="card"> */}
          
          <img src={imageUrl} alt="" />
          <Stack>
              ID: {id}
              <br />
              Address: {address}
              <br />
              Age: {age}
              <br />
              <PhoneAndroidIcon /> {contactNumber}
              <br />
              Dob: {dob}
              <br />
              <EmailIcon /> {email}
              <br />
              Name {firstName} {lastName}
              <br />
              Salary: {salary}
          </Stack>
          {/* </div> */}
        {/* </div> */}
      {/* </header> */}
    </div>
  );
}
export default Employee;
