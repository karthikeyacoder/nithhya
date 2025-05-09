import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ViewDoctors() 
{
    const [doctors, setDoctors] = useState([]);
    const [error, setError] = useState("");

    const displayDoctors = async () => 
      {
        try 
        {
            const response = await axios.get(`${config.url}/admin/viewalldoctors`);
            setDoctors(response.data);
        } 
        catch (err) 
        {
            setError("Failed to fetch doctors data ... " + err.message);
        } 
    };

    useEffect(() => {
      displayDoctors();
    }, []);

    const deleteDoctor = async (did) => 
        {
            try 
            {
                const response = await axios.delete(`${config.url}/admin/deletedoctor?did=${did}`);
                toast.success(response.data);  // show success toast
                displayDoctors();           // refresh doctors list
            } 
            catch (err) 
            {
                console.log(err);
                setError("Unexpected Error Occurred... " + err.message);
                toast.error("Deletion failed: " + err.message); // show error toast
            }
        };

    return (
        <div style={{ padding: "20px" }}>
            <h3 style={{ textAlign: "center", color: "black", fontWeight: "bolder" }}>
                <u>View All Doctors</u>
            </h3>

            <ToastContainer position="top-center" autoClose={4000} />


            {error ? (
                <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
                    {error}
                </p>
            ) : doctors.length === 0 ? (
                <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
                    No Doctors Data Found
                </p>
            ) : (
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Mobile No</th>
                            <th>Company Name</th>
                            <th>Company Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor) => (
                            <tr key={doctor.id}>
                                <td>{doctor.id}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.gender}</td>
                                <td>{doctor.dob}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.username}</td>
                                <td>{doctor.mobileno}</td>
                                <td>{doctor.company_name}</td>
                                <td>{doctor.company_location}</td>
                                <td>
                                    <Button
                                        variant="outlined"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => deleteDoctor(doctor.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
