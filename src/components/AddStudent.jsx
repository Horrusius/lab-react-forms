import { useState } from "react";

function AddStudent({ setStudents }) {
    const [formData, setFormData] = useState({
        fullName: "",
        image: "",
        phone: "",
        email: "",
        program: "",
        graduationYear: 2023,
        graduated: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setStudents((prev) => [formData, ...prev]);

        setFormData({
            fullName: "",
            image: "",
            phone: "",
            email: "",
            program: "",
            graduationYear: 2023,
            graduated: false
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <span>Add a Student</span>
            <div>
                <label>
                    Full Name
                    <input name="fullName" type="text" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
                </label>

                <label>
                    Profile Image
                    <input name="image" type="url" placeholder="Profile Image" value={formData.image} onChange={handleChange} />
                </label>

                <label>
                    Phone
                    <input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                </label>

                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </label>
            </div>

            <div>
                <label>
                    Program
                    <select name="program" value={formData.program} onChange={handleChange}>
                        <option value="">-- None --</option>
                        <option value="Web Dev">Web Dev</option>
                        <option value="UXUI">UXUI</option>
                        <option value="Data">Data</option>
                    </select>
                </label>

                <label>
                    Graduation Year
                    <input
                        name="graduationYear"
                        type="number"
                        placeholder="Graduation Year"
                        minLength={4}
                        maxLength={4}
                        min={2023}
                        max={2030}
                        value={formData.graduationYear}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Graduated
                    <input
                        name="graduated"
                        type="checkbox"
                        checked={formData.graduated}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Add Student</button>
            </div>

        </form>
    );
}

export default AddStudent;