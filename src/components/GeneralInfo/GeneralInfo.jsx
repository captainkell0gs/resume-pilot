import { useState } from 'react';
import FormField from '../ui/FormField';

export default function GeneralInfo ({ onNext, generalInfo, setGeneralInfo }) {
    const [isExpanded, setIsExpanded] = useState(false);

    function handleExpand() {
        setIsExpanded(prev => !prev);
    }

    function handleChange(e) {
        const { id, value } = e.target;

        setGeneralInfo(prev => ({
            ...prev,
            [id]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onNext();
    }

    return(
        <section className='general-info'>
            <form onSubmit={handleSubmit} >
                <h3>Personal Details</h3>
                <hr />

                <FormField label="First Name*" id="firstName" value={generalInfo.firstName} required onChange={handleChange} />
                <FormField label="Last Name*" id="lastName" value={generalInfo.lastName} required onChange={handleChange} />

                <div className="form-row">
                    <FormField label="Email*" id="email" type="email" placeholder="e.g. johndoe@example.com" required value={generalInfo.email} onChange={handleChange} />
                    <FormField label="Phone" id="phone" type="tel" placeholder="e.g. 123-456-7890" value={generalInfo.phone} onChange={handleChange} />
                </div>

                <FormField label="Address" id="address" value={generalInfo.address} onChange={handleChange} />

                <div className="form-row">
                    <FormField label="Zip" id="zip" value={generalInfo.zip} onChange={handleChange} />
                    <FormField label="City" id="city" placeholder="e.g. New York" value={generalInfo.city} onChange={handleChange} />
                </div>

                {isExpanded && 
                    <div className='additional-info'>
                        <div className="form-row">
                            <FormField label="Date of Birth" id="dateOfBirth" type="date" value={generalInfo.dateOfBirth} onChange={handleChange} />
                            <FormField label="Gender" id="gender" type="select" value={generalInfo.gender} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </FormField>
                        </div>

                        <div className="form-row">
                            <FormField label="Nationality" id="nationality" value={generalInfo.nationality} onChange={handleChange} />
                            <FormField label="Marital Status" id="maritalStatus" value={generalInfo.maritalStatus} onChange={handleChange} />
                        </div>

                        <div className="form-row">
                            <FormField label="LinkedIn" id="linkedIn" value={generalInfo.linkedIn} onChange={handleChange} />
                            <FormField label="Website" id="website" value={generalInfo.website} onChange={handleChange} />
                        </div>
                    </div>
                }

                <button type="button" className="btn btn--secondary" onClick={handleExpand}>
                    {isExpanded ? "-" : "+"} Additional Information
                </button>

                <button type="submit" className="btn btn--primary">Next Step</button>
            </form>
        </section>
    );
}

GeneralInfo.empty = () => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    maritalStatus: "",
    linkedIn: "",
    website: ""
});